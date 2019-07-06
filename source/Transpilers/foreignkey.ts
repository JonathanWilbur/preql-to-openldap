import { APIObject, Logger, APIObjectDatabase, ForeignKeySpec } from 'preql-core';

const transpileForeignKey = async (obj: APIObject<ForeignKeySpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    const suffix: string = ('domain' in obj.metadata.labels && typeof obj.metadata.labels['domain'] === 'string') ?
        obj.metadata.labels['domain']
            .split('.')
            .map((dc: string): string => `dc=${dc}`)
            .join(',')
        : 'dc=root';

    const objectIdentifier: string | undefined = obj.metadata.labels['objectIdentifier'];
    if (!objectIdentifier) {
        throw new Error(
            `No 'objectIdentifier' label for Foreign Key '${obj.metadata.name}'.`
        );
    }

    return (
        `dn: cn=${obj.spec.childStruct}${obj.spec.attributeName}Attribute,${suffix}\r\n`
        + `objectClass: olcSchemaConfig\r\n`
        + `cn: ${obj.spec.childStruct}${obj.spec.attributeName}Attribute\r\n`
        + `olcAttributeTypes: ( ${objectIdentifier}\r\n`
        + ` NAME '${obj.spec.attributeName}'\r\n`
        + ' EQUALITY distinguishedNameMatch\r\n'
        + ' ORDERING caseIgnoreOrderingMatch\r\n'
        + ' SUBSTR caseIgnoreSubstringsMatch\r\n'
        + ' SYNTAX distinguishedNameOID\r\n'
        + ' SINGLE-VALUE\r\n'
        + ' )'
    );
};

export default transpileForeignKey;
