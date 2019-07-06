// dn: cn=schema,cn=config
// objectClass: olcSchemaConfig
// cn: schema

// dn: cn=test,cn=schema,cn=config
// objectClass: olcSchemaConfig
// cn: test
// olcAttributeTypes: ( 1.1.1
//   NAME 'testAttr'
//   EQUALITY integerMatch
//   SYNTAX 1.3.6.1.4.1.1466.115.121.1.27 )
import { APIObject, Logger, AttributeSpec, APIObjectDatabase, DataTypeSpec } from 'preql-core';
import matchingRules from '../matchingRules';
import orderingRules from '../orderingRules';
import substringRules from '../substringRules';

const transpileAttribute = async (obj: APIObject<AttributeSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    const suffix: string = ('domain' in obj.metadata.labels && typeof obj.metadata.labels['domain'] === 'string') ?
        obj.metadata.labels['domain']
            .split('.')
            .map((dc: string): string => `dc=${dc}`)
            .join(',')
        : 'dc=root';

    const dataType: APIObject<DataTypeSpec> | undefined = (etcd.kindIndex.datatype || [])
        .find((dt: APIObject<DataTypeSpec>): boolean => dt.metadata.name === obj.spec.type);
    if (!dataType) {
        throw new Error(
            `No data type named '${obj.spec.type}'.`
        );
    }

    const ldapSyntax: string = (() => {
        let ret: string | undefined = dataType.metadata.labels['ldapSyntax'];
        if (ret) return ret;
        switch (dataType.spec.jsonEquivalent) {
            case ('boolean'): return 'booleanOID';
            case ('integer'): return 'integerOID';
            case ('number'): return 'ia5StringOID';
            case ('string'): return 'directoryStringOID';
            default: {
                throw new Error(
                    `No 'ldapSyntax' label for DataType '${dataType.metadata.name}'.`
                );
            }
        }
    })();

    const objectIdentifier: string | undefined = obj.metadata.labels['objectIdentifier'];
    if (!objectIdentifier) {
        throw new Error(
            `No 'objectIdentifier' label for Attribute '${obj.metadata.name}'.`
        );
    }

    let ret: string = (
        `dn: cn=${obj.spec.structName}${obj.spec.name}Attribute,${suffix}\r\n`
        + `objectClass: olcSchemaConfig\r\n`
        + `cn: ${obj.spec.structName}${obj.spec.name}Attribute\r\n`
        + `olcAttributeTypes: ( ${objectIdentifier}\r\n`
        + ` NAME '${obj.spec.name}'\r\n`
    );

    const comment: string | undefined = obj.metadata.annotations['comment'];
    if (comment) {
        ret += ` DESC '${comment}'\r\n`; // FIXME: Escape
    }

    const matchingRule: string | undefined = obj.metadata.labels['matchingRule'];
    if (matchingRule) {
        ret += ` EQUALITY ${matchingRule}\r\n`; // FIXME: Escape
    } else {
        const defaultMatchingRule: string | undefined = matchingRules[ldapSyntax];
        if (defaultMatchingRule) {
            ret += ` EQUALITY ${defaultMatchingRule}\r\n`;
        }
    }

    const orderingRule: string | undefined = obj.metadata.labels['orderingRule'];
    if (orderingRule) {
        ret += ` ORDERING ${orderingRule}\r\n`; // FIXME: Escape
    } else {
        const defaultOrderingRule: string | undefined = orderingRules[ldapSyntax];
        if (defaultOrderingRule) {
            ret += ` ORDERING ${defaultOrderingRule}\r\n`;
        }
    }

    const substringRule: string | undefined = obj.metadata.labels['substringRule'];
    if (substringRule) {
        ret += ` SUBSTR ${substringRule}\r\n`; // FIXME: Escape
    } else {
        const defaultSubstringRule: string | undefined = substringRules[ldapSyntax];
        if (defaultSubstringRule) {
            ret += ` SUBSTR ${defaultSubstringRule}\r\n`;
        }
    }

    ret += ` SYNTAX ${ldapSyntax}`; // FIXME: Escape
    ret += obj.spec.length ? `{${obj.spec.length}}\r\n` : '\r\n';
    if (!obj.spec.multiValued) {
        ret += ` SINGLE-VALUE\r\n`;
    }
    ret += ' )';

    return ret;
};

export default transpileAttribute;
