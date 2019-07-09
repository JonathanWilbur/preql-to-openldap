"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// REVIEW: uuid?
var matchingRules = {
    // '1.3.6.1.4.1.1466.115.121.1.4': 'octetStringMatch', // audioOID
    // '1.3.6.1.4.1.1466.115.121.1.5': '', // binaryOID
    '1.3.6.1.4.1.1466.115.121.1.6': 'bitStringMatch',
    '1.3.6.1.4.1.1466.115.121.1.7': 'booleanMatch',
    // '1.3.6.1.4.1.1466.115.121.1.8': undefined, // certificateOID
    // '1.3.6.1.4.1.1466.115.121.1.9': undefined, // certificateListOID
    // '1.3.6.1.4.1.1466.115.121.1.10': undefined, // certificatePairOID
    '1.3.6.1.4.1.1466.115.121.1.11': 'caseIgnoreMatch',
    '1.3.6.1.4.1.1466.115.121.1.12': 'distinguishedNameMatch',
    '1.3.6.1.4.1.1466.115.121.1.15': 'caseIgnoreMatch',
    '1.3.6.1.4.1.1466.115.121.1.22': 'telephoneNumberMatch',
    '1.3.6.1.4.1.1466.115.121.1.24': 'generalizedTimeMatch',
    '1.3.6.1.4.1.1466.115.121.1.26': 'caseIgnoreIA5Match',
    '1.3.6.1.4.1.1466.115.121.1.27': 'integerMatch',
    // '1.3.6.1.4.1.1466.115.121.1.28': undefined, // jpegOID
    '1.3.6.1.4.1.1466.115.121.1.34': 'uniqueMemberMatch',
    '1.3.6.1.4.1.1466.115.121.1.36': 'numericStringMatch',
    '1.3.6.1.4.1.1466.115.121.1.38': 'objectIdentiferMatch',
    '1.3.6.1.4.1.1466.115.121.1.39': 'caseIgnoreIA5Match',
    '1.3.6.1.4.1.1466.115.121.1.40': 'octetStringMatch',
    '1.3.6.1.4.1.1466.115.121.1.41': 'caseIgnoreMatch',
    '1.3.6.1.4.1.1466.115.121.1.44': 'caseIgnoreIA5Match',
    // '1.3.6.1.4.1.1466.115.121.1.49': undefined, // supportedAlgorithmOID
    '1.3.6.1.4.1.1466.115.121.1.50': 'telephoneNumberMatch',
    '1.3.6.1.4.1.1466.115.121.1.52': 'caseIgnoreIA5Match',
    // '1.3.6.1.1.1.0.0': undefined, // nisNetgroupTripleOID
    // '1.3.6.1.1.1.0.1': undefined, // rfc2307BootParameterOID
    // '1.2.826.0.1.3344810.7.1': undefined, // serialNumberAndIssuerOID
    'booleanOID': 'booleanMatch',
    'integerOID': 'integerMatch',
    'printableStringOID': 'caseIgnoreMatch',
    'directoryStringOID': 'caseIgnoreMatch',
};
exports.default = matchingRules;
