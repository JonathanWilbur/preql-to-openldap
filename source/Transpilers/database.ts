import { APIObject, DatabaseSpec, Logger, APIObjectDatabase, AttributeSpec, ForeignKeySpec, StructSpec } from 'preql-core';
import transpileAttribute from '../Transpilers/attribute';
import transpileForeignKey from '../Transpilers/foreignkey';
import transpileStruct from '../Transpilers/struct';

const transpileDatabase = async (obj: APIObject<DatabaseSpec>, logger: Logger, etcd: APIObjectDatabase): Promise<string> => {
    const attributes: APIObject<AttributeSpec>[] = (etcd.kindIndex.attribute || [])
        .filter((attr: APIObject<AttributeSpec>): boolean => attr.spec.databaseName === obj.spec.name);
    const foreignKeys: APIObject<ForeignKeySpec>[] = (etcd.kindIndex.foreignkey || [])
        .filter((fk: APIObject<ForeignKeySpec>): boolean => fk.spec.databaseName === obj.spec.name);
    const structs: APIObject<StructSpec>[] = (etcd.kindIndex.struct || [])
        .filter((struct: APIObject<StructSpec>): boolean => struct.spec.databaseName === obj.spec.name);
    let transpilations: string[] = [
        `dn: cn=${obj.spec.name},cn=schema,cn=config`,
        'objectClass: olcSchemaConfig',
        `cn: ${obj.spec.name}`,
    ];

    if (attributes && attributes.length > 0) {
        transpilations = transpilations.concat(await Promise.all(attributes.map(
            async (obj: APIObject): Promise<string> => {
                return transpileAttribute(obj, logger, etcd);
            }
        )));
    }

    if (foreignKeys && foreignKeys.length > 0) {
        transpilations = transpilations.concat(await Promise.all(foreignKeys.map(
            async (obj: APIObject): Promise<string> => {
                return transpileForeignKey(obj, logger, etcd);
            }
        )));
    }

    if (structs && structs.length > 0) {
        transpilations = transpilations.concat(await Promise.all(structs.map(
            async (obj: APIObject): Promise<string> => {
                return transpileStruct(obj, logger, etcd);
            }
        )));
    }

    return transpilations.join('\r\n');
};

export default transpileDatabase;
