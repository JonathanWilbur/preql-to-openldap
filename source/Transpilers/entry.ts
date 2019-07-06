import { APIObject, Logger, EntrySpec, SuggestedTargetObjectHandler } from 'preql-core';

const transpileEntry: SuggestedTargetObjectHandler = async (obj: APIObject<EntrySpec>, logger: Logger): Promise<string> => {
    const suffix: string = ('domain' in obj.metadata.labels && typeof obj.metadata.labels['domain'] === 'string') ?
        obj.metadata.labels['domain']
            .split('.')
            .map((dc: string): string => `dc=${dc}`)
            .join(',')
        : 'dc=root';

    return (
        `dn: cn=${obj.metadata.name},${suffix}\r\n`
        + `objectClass: ${obj.spec.structName}\r\n`
        + `cn: ${obj.metadata.name}\r\n`
        + Object.entries(obj.spec.values)
            .map((entry): string => `${entry[0]}: ${entry[1]}`)
            .join('\r\n')
    );
};

export default transpileEntry;
