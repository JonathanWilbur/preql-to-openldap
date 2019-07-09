// REVIEW: uuid?
const substringRules: Record<string, string> = {
    // '1.3.6.1.4.1.1466.115.121.1.4': 'octetStringMatch', // audioOID
    // '1.3.6.1.4.1.1466.115.121.1.5': '', // binaryOID
    // '1.3.6.1.4.1.1466.115.121.1.6': 'bitStringMatch', // bitStringOID
    // '1.3.6.1.4.1.1466.115.121.1.7': 'booleanMatch', // booleanOID
    // '1.3.6.1.4.1.1466.115.121.1.8': undefined, // certificateOID
    // '1.3.6.1.4.1.1466.115.121.1.9': undefined, // certificateListOID
    // '1.3.6.1.4.1.1466.115.121.1.10': undefined, // certificatePairOID
    '1.3.6.1.4.1.1466.115.121.1.11': 'caseIgnoreSubstringsMatch', // countryStringOID
    // '1.3.6.1.4.1.1466.115.121.1.12': undefined, // distinguishedNameOID (Should this be uniqueMemberMatch?)
    '1.3.6.1.4.1.1466.115.121.1.15': 'caseIgnoreSubstringsMatch', // directoryStringOID
    '1.3.6.1.4.1.1466.115.121.1.22': 'telephoneNumberSubstringsMatch', // facsimileTelephoneNumberOID
    // '1.3.6.1.4.1.1466.115.121.1.24': 'generalizedTimeMatch', // generalizedTimeOID
    '1.3.6.1.4.1.1466.115.121.1.26': 'caseIgnoreIA5SubstringsMatch', // iA5StringOID
    // '1.3.6.1.4.1.1466.115.121.1.27': 'integerMatch', // integerOID
    // '1.3.6.1.4.1.1466.115.121.1.28': undefined, // jpegOID
    // '1.3.6.1.4.1.1466.115.121.1.34': 'uniqueMemberMatch', // nameAndOptionalUIDOID
    '1.3.6.1.4.1.1466.115.121.1.36': 'numericStringSubstringsMatch', // NumericStringOID
    // '1.3.6.1.4.1.1466.115.121.1.38': 'objectIdentiferMatch', // objectIdentifierOID
    '1.3.6.1.4.1.1466.115.121.1.39': 'caseIgnoreIA5SubstringsMatch', // otherMailboxOID
    // '1.3.6.1.4.1.1466.115.121.1.40': 'octetStringMatch', // octetStringOID
    '1.3.6.1.4.1.1466.115.121.1.41': 'caseIgnoreSubstringsMatch', // postalAddressOID
    '1.3.6.1.4.1.1466.115.121.1.44': 'caseIgnoreIA5SubstringsMatch', // printableStringOID
    // '1.3.6.1.4.1.1466.115.121.1.49': undefined, // supportedAlgorithmOID
    '1.3.6.1.4.1.1466.115.121.1.50': 'telephoneNumberSubstringsMatch', // telephoneNumberOID
    '1.3.6.1.4.1.1466.115.121.1.52': 'caseIgnoreIA5SubstringsMatch', // telexNumberOID
    // '1.3.6.1.1.1.0.0': undefined, // nisNetgroupTripleOID
    // '1.3.6.1.1.1.0.1': undefined, // rfc2307BootParameterOID
    // '1.2.826.0.1.3344810.7.1': undefined, // serialNumberAndIssuerOID
    'printableStringOID': 'caseIgnoreSubstringsMatch',
    'directoryStringOID': 'caseIgnoreSubstringsMatch',
};

export default substringRules;
