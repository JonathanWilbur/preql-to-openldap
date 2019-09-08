import { APIObject, Logger, AttributeSpec, APIObjectDatabase, DataTypeSpec } from 'preql-core';
import matchingRules from '../matchingRules';
import orderingRules from '../orderingRules';
import substringRules from '../substringRules';
import syntaxes from '../syntaxes';
import Syntax from '../Syntax';
import prohibitedIdentifiers from '../prohibitedIdentifiers';

const transpileAttribute = async (obj: APIObject<AttributeSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    if (prohibitedIdentifiers.indexOf(obj.spec.name) !== -1) {
        throw new Error(`Attribute name '${obj.spec.name}' is prohibited.`);
    }
    const dataType: APIObject<DataTypeSpec> | undefined = etcd.kindNameIndex[`datatype:${obj.spec.type}`];
    if (!dataType) {
        throw new Error(`No data type named '${obj.spec.type}'.`);
    }

    let syntaxOID: string | undefined;
    if (dataType.spec.values) {
        syntaxOID = '1.3.6.1.4.1.1466.115.121.1.15';
    } else {
        if (!dataType.spec.targets.openldap) {
            throw new Error(`No OpenLDAP nativeType defined for DataType '${dataType.metadata.name}'.`);
        }
        syntaxOID = dataType.spec.targets.openldap.nativeType;
        // TODO: Check that it is a valid OID.
    }
    const ldapSyntax: Syntax = syntaxes[syntaxOID];

    if (!obj.spec.objectIdentifier) {
        throw new Error(`No 'objectIdentifier' label for Attribute '${obj.metadata.name}'.`);
    }

    let ret: string = `olcAttributeTypes: ( ${obj.spec.objectIdentifier} NAME '${obj.spec.name}'`;

    const comment: string | undefined = obj.metadata.annotations['comment'];
    if (comment) {
        ret += ` DESC '${comment}'`; // FIXME: Escape
    }

    const matchingRule: string | undefined = (obj.spec.matchingRules || [])
        .find((mr: string): boolean => matchingRules.indexOf(mr) !== -1);
    if (matchingRule) {
        ret += ` EQUALITY ${matchingRule}`; // FIXME: Escape
    } else {
        const defaultMatchingRule: string | undefined = ldapSyntax.matchingRule;
        if (defaultMatchingRule) {
            ret += ` EQUALITY ${defaultMatchingRule}`;
        }
    }

    const orderingRule: string | undefined = (obj.spec.orderingRules || [])
        .find((or: string): boolean => orderingRules.indexOf(or) !== -1);
    if (orderingRule) {
        ret += ` ORDERING ${orderingRule}\r\n`; // FIXME: Escape
    } else {
        const defaultOrderingRule: string | undefined = ldapSyntax.orderingRule;
        if (defaultOrderingRule) {
            ret += ` ORDERING ${defaultOrderingRule}`;
        }
    }

    const substringRule: string | undefined = (obj.spec.substringRules || [])
        .find((sr: string): boolean => substringRules.indexOf(sr) !== -1);
    if (substringRule) {
        ret += ` SUBSTR ${substringRule}`; // FIXME: Escape
    } else {
        const defaultSubstringRule: string | undefined = ldapSyntax.substringsRule;
        if (defaultSubstringRule) {
            ret += ` SUBSTR ${defaultSubstringRule}`;
        }
    }

    ret += ` SYNTAX ${syntaxOID}`;
    ret += obj.spec.length ? `{${obj.spec.length}}` : '';
    if (!obj.spec.multiValued) {
        ret += ' SINGLE-VALUE';
    }
    ret += ' )';

    return ret;
};

export default transpileAttribute;
