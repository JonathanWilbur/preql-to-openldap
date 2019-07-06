import { APIObject, APIObjectDatabase, DatabaseSpec, Logger, StructSpec, SuggestedTargetIndexHandler } from 'preql-core';
import transpileDatabase from '../Transpilers/database';
import transpileAttribute from '../Transpilers/attribute';
import transpileForeignKey from '../Transpilers/foreignkey';
import transpileStruct from '../Transpilers/struct';
import transpileEntry from '../Transpilers/entry';

const transpile: SuggestedTargetIndexHandler = async (etcd: APIObjectDatabase, logger: Logger): Promise<string> => {
    let transpilations: string[] = [];

    // TODO: Premable

    const databases: APIObject[] | undefined = etcd.kindIndex.database;
    if (databases && databases.length > 0) {
        transpilations = transpilations.concat(await Promise.all(databases.map(
            async (obj: APIObject): Promise<string> => {
                return transpileDatabase(obj, logger);
            }
        )));
    }

    const attributes: APIObject[] | undefined = etcd.kindIndex.attribute;
    if (attributes && attributes.length > 0) {
        transpilations = transpilations.concat(await Promise.all(attributes.map(
            async (obj: APIObject): Promise<string> => {
                return transpileAttribute(obj, logger, etcd);
            }
        )));
    }

    const foreignkeys: APIObject[] | undefined = etcd.kindIndex.foreignkey;
    if (foreignkeys && foreignkeys.length > 0) {
        transpilations = transpilations.concat(await Promise.all(foreignkeys.map(
            async (obj: APIObject): Promise<string> => {
                return transpileForeignKey(obj, logger, etcd);
            }
        )));
    }

    const structs: APIObject[] | undefined = etcd.kindIndex.struct;
    if (structs && structs.length > 0) {
        transpilations = transpilations.concat(await Promise.all(structs.map(
            async (obj: APIObject): Promise<string> => {
                return transpileStruct(obj, logger, etcd);
            }
        )));
    }

    const entries: APIObject[] | undefined = etcd.kindIndex.entry;
    if (entries && entries.length > 0) {
        transpilations = transpilations.concat(await Promise.all(entries.map(
            async (obj: APIObject): Promise<string> => {
                return transpileEntry(obj, logger);
            }
        )));
    }

    // TODO: Postamble

    return transpilations.filter((t: string) => (t !== '')).join('\r\n\r\n');
};

export default transpile;
