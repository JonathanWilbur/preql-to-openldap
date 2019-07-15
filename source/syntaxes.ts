import Syntax from './Syntax';
// REVIEW: uuid?
const matchingRules: Record<string, Syntax> = {
    '1.3.6.1.4.1.1466.115.121.1.4': { // audioOID
        matchingRule: 'octetStringMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.5': { // binaryOID
    },
    '1.3.6.1.4.1.1466.115.121.1.6': { // bitStringOID
        matchingRule: 'bitStringMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.7': { // booleanOID
        matchingRule: 'booleanMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.8': { // certificateOID
    },
    '1.3.6.1.4.1.1466.115.121.1.9': { // certificateListOID
    },
    '1.3.6.1.4.1.1466.115.121.1.10': { // certificatePairOID
    },
    '1.3.6.1.4.1.1466.115.121.1.11': { // countryStringOID
        matchingRule: 'caseIgnoreMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.12': { // distinguishedNameOID (Should this be uniqueMemberMatch?)
        matchingRule: 'distinguishedNameMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.15': { // directoryStringOID
        matchingRule: 'caseIgnoreMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.22': { // facsimileTelephoneNumberOID
        matchingRule: 'telephoneNumberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.24': { // generalizedTimeOID
        matchingRule: 'generalizedTimeMatch',
        orderingRule: 'generalizedTimeOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.26': { // iA5StringOID
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.27': { // integerOID
        matchingRule: 'integerMatch',
        orderingRule: 'integerOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.28': { // jpegOID
    },
    '1.3.6.1.4.1.1466.115.121.1.34': { // nameAndOptionalUIDOID
        matchingRule: 'uniqueMemberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.36': { // NumericStringOID
        matchingRule: 'numericStringMatch',
        orderingRule: 'numericStringOrderingMatch',
        substringsRule: 'numericStringSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.38': { // objectIdentifierOID
        matchingRule: 'objectIdentiferMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.39': { // otherMailboxOID
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.40': { // octetStringOID
        matchingRule: 'octetStringMatch',
        orderingRule: 'octetStringOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.41': { // postalAddressOID
        matchingRule: 'caseIgnoreListMatch',
        // orderingRule: 'caseIgnoreOrderingMatch',
        // substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.44': { // printableStringOID
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.49': { // supportedAlgorithmOID
    },
    '1.3.6.1.4.1.1466.115.121.1.50': { // telephoneNumberOID
        matchingRule: 'telephoneNumberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'telephoneNumberSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.52': { // telexNumberOID
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
    },
    '1.3.6.1.1.1.0.0': { // nisNetgroupTripleOID
    },
    '1.3.6.1.1.1.0.1': { // rfc2307BootParameterOID
    },
    '1.2.826.0.1.3344810.7.1': { // serialNumberAndIssuerOID
    },
};

export default matchingRules;
