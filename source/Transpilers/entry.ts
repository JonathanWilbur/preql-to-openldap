import { APIObject, Logger, EntrySpec, SuggestedTargetObjectHandler } from 'preql-core';

const transpileEntry: SuggestedTargetObjectHandler = async (obj: APIObject<EntrySpec>, logger: Logger): Promise<string> => {
    if (!obj.spec.distinguishedName) {
        throw new Error(`Entry '${obj.metadata.name}' did not have a 'distinguishedName'.`);
    }
    return (
        `dn: ${obj.spec.distinguishedName}\r\n`
        + `objectClass: ${obj.spec.structName}\r\n`
        + Object.entries(obj.spec.values)
            .map((entry): string => `${entry[0]}: ${entry[1]}`)
            .join('\r\n')
    );
};

export default transpileEntry;
