import { APIObject, APIObjectDatabase, Logger } from 'preql-core';
import transpileDatabase from '../Transpilers/database';
import transpileEntry from '../Transpilers/entry';
import syntaxObjectIdentifiersLDIF from '../syntaxObjectIdentifiersLDIF';
import transpilePreamble from '../Transpilers/preamble';
import transpilePostamble from '../Transpilers/postamble';
import transpilePlainIndex from '../Transpilers/plainindex';

const transpile = async (etcd: APIObjectDatabase, logger: Logger): Promise<string> => {
    let transpilations: string[] = [ syntaxObjectIdentifiersLDIF ];

    const premables: APIObject[] | undefined = etcd.kindIndex.preamble;
    if (premables && premables.length > 0) {
        transpilations = transpilations.concat(await Promise.all(premables.map(
            async (obj: APIObject): Promise<string> => {
                return transpilePreamble(obj);
            }
        )));
    }

    const databases: APIObject[] | undefined = etcd.kindIndex.database;
    if (databases && databases.length > 0) {
        transpilations = transpilations.concat(await Promise.all(databases.map(
            async (obj: APIObject): Promise<string> => {
                return transpileDatabase(obj, logger, etcd);
            }
        )));
    }

    const plainIndexes: APIObject[] | undefined = etcd.kindIndex.plainindex;
    if (plainIndexes && plainIndexes.length > 0) {
        transpilations = transpilations.concat(await Promise.all(plainIndexes.map(
            async (obj: APIObject): Promise<string> => {
                return transpilePlainIndex(obj);
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

    const postambles: APIObject[] | undefined = etcd.kindIndex.postamble;
    if (postambles && postambles.length > 0) {
        transpilations = transpilations.concat(await Promise.all(postambles.map(
            async (obj: APIObject): Promise<string> => {
                return transpilePostamble(obj);
            }
        )));
    }

    return transpilations.filter((t: string) => (t !== '')).join('\r\n\r\n');
};

export default transpile;
