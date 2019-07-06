// REVIEW: uuid?
const orderingRules: Record<string, string> = {
    // '1.3.6.1.4.1.1466.115.121.1.4': 'octetStringOrderingMatch', // audioOID
    // '1.3.6.1.4.1.1466.115.121.1.5': '', // binaryOID
    // '1.3.6.1.4.1.1466.115.121.1.6': undefined, // bitStringOID
    '1.3.6.1.4.1.1466.115.121.1.7': 'booleanMatch', // booleanOID
    // '1.3.6.1.4.1.1466.115.121.1.8': undefined, // certificateOID
    // '1.3.6.1.4.1.1466.115.121.1.9': undefined, // certificateListOID
    // '1.3.6.1.4.1.1466.115.121.1.10': undefined, // certificatePairOID
    '1.3.6.1.4.1.1466.115.121.1.11': 'caseIgnoreOrderingMatch', // countryStringOID
    '1.3.6.1.4.1.1466.115.121.1.12': 'caseIgnoreOrderingMatch', // distinguishedNameOID (Should this be uniqueMemberMatch?)
    '1.3.6.1.4.1.1466.115.121.1.15': 'caseIgnoreOrderingMatch', // directoryStringOID
    '1.3.6.1.4.1.1466.115.121.1.22': 'caseIgnoreOrderingMatch', // facsimileTelephoneNumberOID
    '1.3.6.1.4.1.1466.115.121.1.24': 'generalizedTimeOrderingMatch', // generalizedTimeOID
    '1.3.6.1.4.1.1466.115.121.1.26': 'caseIgnoreOrderingMatch', // iA5StringOID
    '1.3.6.1.4.1.1466.115.121.1.27': 'integerOrderingMatch', // integerOID
    // '1.3.6.1.4.1.1466.115.121.1.28': undefined, // jpegOID
    '1.3.6.1.4.1.1466.115.121.1.34': 'caseIgnoreOrderingMatch', // nameAndOptionalUIDOID
    '1.3.6.1.4.1.1466.115.121.1.36': 'numericStringOrderingMatch', // NumericStringOID
    // '1.3.6.1.4.1.1466.115.121.1.38': 'objectIdentiferMatch', // objectIdentifierOID
    '1.3.6.1.4.1.1466.115.121.1.39': 'caseIgnoreOrderingMatch', // otherMailboxOID
    '1.3.6.1.4.1.1466.115.121.1.40': 'octetStringOrderingMatch', // octetStringOID
    '1.3.6.1.4.1.1466.115.121.1.41': 'caseIgnoreOrderingMatch', // postalAddressOID
    '1.3.6.1.4.1.1466.115.121.1.44': 'caseIgnoreOrderingMatch', // printableStringOID
    // '1.3.6.1.4.1.1466.115.121.1.49': undefined, // supportedAlgorithmOID
    '1.3.6.1.4.1.1466.115.121.1.50': 'caseIgnoreOrderingMatch', // telephoneNumberOID
    '1.3.6.1.4.1.1466.115.121.1.52': 'caseIgnoreOrderingMatch', // telexNumberOID
    // '1.3.6.1.1.1.0.0': undefined, // nisNetgroupTripleOID
    // '1.3.6.1.1.1.0.1': undefined, // rfc2307BootParameterOID
    // '1.2.826.0.1.3344810.7.1': undefined, // serialNumberAndIssuerOID
};

export default orderingRules;
