// REVIEW: uuid?
const matchingRules: Record<string, string> = {
    // '1.3.6.1.4.1.1466.115.121.1.4': 'octetStringMatch', // audioOID
    // '1.3.6.1.4.1.1466.115.121.1.5': '', // binaryOID
    '1.3.6.1.4.1.1466.115.121.1.6': 'bitStringMatch', // bitStringOID
    '1.3.6.1.4.1.1466.115.121.1.7': 'booleanMatch', // booleanOID
    // '1.3.6.1.4.1.1466.115.121.1.8': undefined, // certificateOID
    // '1.3.6.1.4.1.1466.115.121.1.9': undefined, // certificateListOID
    // '1.3.6.1.4.1.1466.115.121.1.10': undefined, // certificatePairOID
    '1.3.6.1.4.1.1466.115.121.1.11': 'caseIgnoreMatch', // countryStringOID
    '1.3.6.1.4.1.1466.115.121.1.12': 'distinguishedNameMatch', // distinguishedNameOID (Should this be uniqueMemberMatch?)
    '1.3.6.1.4.1.1466.115.121.1.15': 'caseIgnoreMatch', // directoryStringOID
    '1.3.6.1.4.1.1466.115.121.1.22': 'telephoneNumberMatch', // facsimileTelephoneNumberOID
    '1.3.6.1.4.1.1466.115.121.1.24': 'generalizedTimeMatch', // generalizedTimeOID
    '1.3.6.1.4.1.1466.115.121.1.26': 'caseIgnoreIA5Match', // iA5StringOID
    '1.3.6.1.4.1.1466.115.121.1.27': 'integerMatch', // integerOID
    // '1.3.6.1.4.1.1466.115.121.1.28': undefined, // jpegOID
    '1.3.6.1.4.1.1466.115.121.1.34': 'uniqueMemberMatch', // nameAndOptionalUIDOID
    '1.3.6.1.4.1.1466.115.121.1.36': 'numericStringMatch', // NumericStringOID
    '1.3.6.1.4.1.1466.115.121.1.38': 'objectIdentiferMatch', // objectIdentifierOID
    '1.3.6.1.4.1.1466.115.121.1.39': 'caseIgnoreIA5Match', // otherMailboxOID
    '1.3.6.1.4.1.1466.115.121.1.40': 'octetStringMatch', // octetStringOID
    '1.3.6.1.4.1.1466.115.121.1.41': 'caseIgnoreMatch', // postalAddressOID
    '1.3.6.1.4.1.1466.115.121.1.44': 'caseIgnoreIA5Match', // printableStringOID
    // '1.3.6.1.4.1.1466.115.121.1.49': undefined, // supportedAlgorithmOID
    '1.3.6.1.4.1.1466.115.121.1.50': 'telephoneNumberMatch', // telephoneNumberOID
    '1.3.6.1.4.1.1466.115.121.1.52': 'caseIgnoreIA5Match', // telexNumberOID
    // '1.3.6.1.1.1.0.0': undefined, // nisNetgroupTripleOID
    // '1.3.6.1.1.1.0.1': undefined, // rfc2307BootParameterOID
    // '1.2.826.0.1.3344810.7.1': undefined, // serialNumberAndIssuerOID
    'booleanOID': 'booleanMatch',
    'integerOID': 'integerMatch',
    'printableStringOID': 'caseIgnoreMatch',
    'directoryStringOID': 'caseIgnoreMatch',
};

export default matchingRules;
