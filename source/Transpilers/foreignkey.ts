import { APIObject, Logger, APIObjectDatabase, ForeignKeySpec } from 'preql-core';

const transpileForeignKey = async (obj: APIObject<ForeignKeySpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    const objectIdentifier: string | undefined = obj.metadata.labels['objectIdentifier'];
    if (!objectIdentifier) {
        throw new Error(`No 'objectIdentifier' label for Foreign Key '${obj.metadata.name}'.`);
    }

    return (
        `olcAttributeTypes: ( ${objectIdentifier}`
        + ` NAME '${obj.spec.name}'`
        + ' EQUALITY distinguishedNameMatch'
        + ' SYNTAX distinguishedNameOID'
        + ' SINGLE-VALUE )'
    );
};

export default transpileForeignKey;
