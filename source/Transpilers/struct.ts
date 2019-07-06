import { APIObject, Logger, APIObjectDatabase, StructSpec, AttributeSpec } from 'preql-core';

const transpileStruct = async (obj: APIObject<StructSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
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

    const musts: APIObject<AttributeSpec>[] = (etcd.kindIndex.attribute || [])
        .filter((attr: APIObject<AttributeSpec>): boolean => (
            attr.spec.databaseName === obj.spec.databaseName
            && attr.spec.structName === obj.spec.name
            && (!attr.spec.nullable)
        ));

    const mays: APIObject<AttributeSpec>[] = (etcd.kindIndex.attribute || [])
        .filter((attr: APIObject<AttributeSpec>): boolean => (
            attr.spec.databaseName === obj.spec.databaseName
            && attr.spec.structName === obj.spec.name
            && attr.spec.nullable
        ));

    let ret: string = (
        `dn: cn=${obj.spec.name}Struct,${suffix}\r\n`
        + `objectClass: olcSchemaConfig\r\n`
        + `cn: ${obj.spec.name}Struct\r\n`
        + `olcObjectClasses: ( ${objectIdentifier}\r\n`
        + ` NAME '${obj.spec.name}'\r\n`
    );

    const comment: string | undefined = obj.metadata.annotations['comment'];
    if (comment) {
        ret += ` DESC '${comment}'\r\n`; // FIXME: Escape
    }

    ret += (
        ' AUXILIARY\r\n'
        + ` MUST (${musts.map(m => m.spec.name).join(' $ ')})\r\n`
        + ` MAY (${mays.map(m => m.spec.name).join(' $ ')})\r\n`
        + ' )'
    );

    return ret;
};

export default transpileStruct;
