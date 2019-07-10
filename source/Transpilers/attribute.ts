import { APIObject, Logger, AttributeSpec, APIObjectDatabase, DataTypeSpec } from 'preql-core';
import matchingRules from '../matchingRules';
import orderingRules from '../orderingRules';
import substringRules from '../substringRules';
import prohibitedIdentifiers from '../prohibitedIdentifiers';

const transpileAttribute = async (obj: APIObject<AttributeSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    if (prohibitedIdentifiers.indexOf(obj.spec.name) !== -1) {
        throw new Error(`Attribute name '${obj.spec.name}' is prohibited.`);
    }
    const dataType: APIObject<DataTypeSpec> | undefined = etcd.kindNameIndex[`datatype:${obj.spec.type}`];
    if (!dataType) {
        throw new Error(`No data type named '${obj.spec.type}'.`);
    }

    const ldapSyntax: string = (() => {
        let ret: string | undefined = dataType.metadata.labels['ldapSyntax'];
        if (ret) return ret;
        switch (dataType.spec.jsonEquivalent) {
            case ('boolean'): return 'booleanOID';
            case ('integer'): return 'integerOID';
            /**
             * Unfortunately, OpenLDAP does not seem to support the ASN.1 REAL
             * type for whatever reason, so we have to use a string type to
             * represent numbers that can be non-integral, such as:
             * - 123
             * - 1.23
             * - 1.23 * 10^-1
             * - 1.23E-1
             * - +4.56
             * - Infinity
             * - -Infinity
             * - NaN
             * - 5 + 3i
             * - PI
             * - 5 / 3
             */
            case ('number'): return 'printableStringOID';
            case ('string'): return 'directoryStringOID';
            default: {
                throw new Error(`No 'ldapSyntax' label for DataType '${dataType.metadata.name}'.`);
            }
        }
    })();

    const objectIdentifier: string | undefined = obj.metadata.labels['objectIdentifier'];
    if (!objectIdentifier) {
        throw new Error(`No 'objectIdentifier' label for Attribute '${obj.metadata.name}'.`);
    }

    let ret: string = `olcAttributeTypes: ( ${objectIdentifier} NAME '${obj.spec.name}'`;

    const comment: string | undefined = obj.metadata.annotations['comment'];
    if (comment) {
        ret += ` DESC '${comment}'`; // FIXME: Escape
    }

    const matchingRule: string | undefined = obj.metadata.labels['matchingRule'];
    if (matchingRule) {
        ret += ` EQUALITY ${matchingRule}`; // FIXME: Escape
    } else {
        const defaultMatchingRule: string | undefined = matchingRules[ldapSyntax];
        if (defaultMatchingRule) {
            ret += ` EQUALITY ${defaultMatchingRule}`;
        }
    }

    const orderingRule: string | undefined = obj.metadata.labels['orderingRule'];
    if (orderingRule) {
        ret += ` ORDERING ${orderingRule}\r\n`; // FIXME: Escape
    } else {
        const defaultOrderingRule: string | undefined = orderingRules[ldapSyntax];
        if (defaultOrderingRule) {
            ret += ` ORDERING ${defaultOrderingRule}`;
        }
    }

    const substringRule: string | undefined = obj.metadata.labels['substringRule'];
    if (substringRule) {
        ret += ` SUBSTR ${substringRule}`; // FIXME: Escape
    } else {
        const defaultSubstringRule: string | undefined = substringRules[ldapSyntax];
        if (defaultSubstringRule) {
            ret += ` SUBSTR ${defaultSubstringRule}`;
        }
    }

    ret += ` SYNTAX ${ldapSyntax}`; // FIXME: Escape
    ret += obj.spec.length ? `{${obj.spec.length}}` : '';
    if (!obj.spec.multiValued) {
        ret += ' SINGLE-VALUE';
    }
    ret += ' )';

    return ret;
};

export default transpileAttribute;
