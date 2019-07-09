import { APIObject, Logger, EntrySpec, SuggestedTargetObjectHandler } from 'preql-core';

const transpileEntry: SuggestedTargetObjectHandler = async (obj: APIObject<EntrySpec>, logger: Logger): Promise<string> => {
    return (
        `dn: cn=${obj.metadata.name},__ENTRY_SUFFIX_${obj.metadata.name}__\r\n`
        + `objectClass: ${obj.spec.structName}\r\n`
        + `cn: ${obj.metadata.name}\r\n`
        + Object.entries(obj.spec.values)
            .map((entry): string => `${entry[0]}: ${entry[1]}`)
            .join('\r\n')
    );
};

export default transpileEntry;
