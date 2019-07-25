import { APIObject, PlainIndexSpec } from 'preql-core';
// Index example:
// dn: olcDatabase={1}mdb,cn=config
// changetype: modify
// add: olcDbIndex
// olcDbIndex: cn,sn,uid eq
const transpilePlainIndex = async (obj: APIObject<PlainIndexSpec>): Promise<string> => {
    return (
        '# Replace __OLC_DATABASE__ below and uncomment.\r\n'
        + `# dn: olcDatabase=__OLC_DATABASE__,cn=config\r\n`
        + `# changetype: modify\r\n`
        + `# add: olcDbIndex\r\n`
        + `# olcDbIndex: ${obj.spec.keyAttributes.map(key => key.name).join(',')} eq`
    );
};

export default transpilePlainIndex;
