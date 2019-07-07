import { APIObject, APIObjectDatabase, DatabaseSpec, Logger, StructSpec, SuggestedTargetIndexHandler } from 'preql-core';
import transpileDatabase from '../Transpilers/database';
import transpileEntry from '../Transpilers/entry';
import syntaxObjectIdentifiersLDIF from '../syntaxObjectIdentifiersLDIF';

const transpile: SuggestedTargetIndexHandler = async (etcd: APIObjectDatabase, logger: Logger): Promise<string> => {
    let transpilations: string[] = [ syntaxObjectIdentifiersLDIF ];

    // TODO: Premable

    const databases: APIObject[] | undefined = etcd.kindIndex.database;
    if (databases && databases.length > 0) {
        transpilations = transpilations.concat(await Promise.all(databases.map(
            async (obj: APIObject): Promise<string> => {
                return transpileDatabase(obj, logger, etcd);
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
