import { APIObject, Logger, APIObjectDatabase, StructSpec, AttributeSpec, ForeignKeySpec } from 'preql-core';

const transpileStruct = async (obj: APIObject<StructSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    const objectIdentifier: string | undefined = obj.spec.objectIdentifier;
    if (!objectIdentifier) {
        throw new Error(`No 'objectIdentifier' label for Struct '${obj.metadata.name}'.`);
    }

    const musts: string[] = (etcd.kindIndex.attribute || [])
        .concat(etcd.kindIndex.foreignkey || [])
        .filter((attr: APIObject<AttributeSpec | ForeignKeySpec>): boolean => (
            attr.spec.databaseName === obj.spec.databaseName
            && (
                ('structName' in attr.spec && attr.spec.structName === obj.spec.name)
                || ('childStructName' in attr.spec && attr.spec.childStructName === obj.spec.name)
            )
            && !attr.spec.nullable
        ))
        .map((attr: APIObject<AttributeSpec | ForeignKeySpec>): string => attr.spec.name);

    const mays: string[] = (etcd.kindIndex.attribute || [])
        .concat(etcd.kindIndex.foreignkey || [])
        .filter((attr: APIObject<AttributeSpec | ForeignKeySpec>): boolean => (
            attr.spec.databaseName === obj.spec.databaseName
            && (
                ('structName' in attr.spec && attr.spec.structName === obj.spec.name)
                || ('childStructName' in attr.spec && attr.spec.childStructName === obj.spec.name)
            )
            && !!attr.spec.nullable // NOTE: For some reason, TypeScript thinks this is a boolean | string.
        ))
        .map((attr: APIObject<AttributeSpec | ForeignKeySpec>): string => attr.spec.name);

    let ret: string = `olcObjectClasses: ( ${objectIdentifier} NAME '${obj.spec.name}'`;
    if (obj.metadata.annotations['comment']) {
        ret += ` DESC '${obj.metadata.annotations['comment']}'`;
    }
    ret += ' SUP top STRUCTURAL'
    if (musts.length > 0) {
        ret += ` MUST ( ${musts.join(' $ ')} )`;
    }
    if (mays.length > 0) {
        ret += ` MAY ( ${mays.join(' $ ')} )`;
    }
    ret += ' )';
    return ret;
};

export default transpileStruct;
