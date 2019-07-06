import { APIObject, DatabaseSpec, Logger, SuggestedTargetObjectHandler } from 'preql-core';

const transpileDatabase: SuggestedTargetObjectHandler = async (obj: APIObject<DatabaseSpec>, logger: Logger): Promise<string> => {
    const databaseName: string = obj.spec.name; // TODO: Escape
    const dbMaxSize: number = 107374182400; // 1GB * 10; TODO: Make this configurable.
    const suffix: string = ('domain' in obj.metadata.labels && typeof obj.metadata.labels['domain'] === 'string') ?
        obj.metadata.labels['domain']
            .split('.')
            .map((dc: string): string => `dc=${dc}`)
            .join(',')
        : 'dc=root';
    const dbPath: string = '/var/lib/ldap'; // TODO: Make this configurable.
    return (
        `dn: olcDatabase=${databaseName},cn=config\r\n`
        + `objectClass: olcDatabaseConfig\r\n`
        + `objectClass: olcMdbConfig\r\n`
        + `olcDatabase: ${databaseName}\r\n`
        + `OlcDbMaxSize: ${dbMaxSize}\r\n`
        + `olcSuffix: ${suffix}\r\n`
        + `olcRootDN: cn=admin,${suffix}\r\n`
        + `olcRootPW: yummyyummy\r\n`
        + `olcDbDirectory: ${dbPath}\r\n`
        + `olcDbIndex: objectClass eq\r\n`
    );
};

export default transpileDatabase;
