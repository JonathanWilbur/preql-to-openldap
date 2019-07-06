"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// REVIEW: uuid?
var orderingRules = {
    // '1.3.6.1.4.1.1466.115.121.1.4': 'octetStringOrderingMatch', // audioOID
    // '1.3.6.1.4.1.1466.115.121.1.5': '', // binaryOID
    // '1.3.6.1.4.1.1466.115.121.1.6': undefined, // bitStringOID
    '1.3.6.1.4.1.1466.115.121.1.7': 'booleanMatch',
    // '1.3.6.1.4.1.1466.115.121.1.8': undefined, // certificateOID
    // '1.3.6.1.4.1.1466.115.121.1.9': undefined, // certificateListOID
    // '1.3.6.1.4.1.1466.115.121.1.10': undefined, // certificatePairOID
    '1.3.6.1.4.1.1466.115.121.1.11': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.12': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.15': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.22': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.24': 'generalizedTimeOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.26': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.27': 'integerOrderingMatch',
    // '1.3.6.1.4.1.1466.115.121.1.28': undefined, // jpegOID
    '1.3.6.1.4.1.1466.115.121.1.34': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.36': 'numericStringOrderingMatch',
    // '1.3.6.1.4.1.1466.115.121.1.38': 'objectIdentiferMatch', // objectIdentifierOID
    '1.3.6.1.4.1.1466.115.121.1.39': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.40': 'octetStringOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.41': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.44': 'caseIgnoreOrderingMatch',
    // '1.3.6.1.4.1.1466.115.121.1.49': undefined, // supportedAlgorithmOID
    '1.3.6.1.4.1.1466.115.121.1.50': 'caseIgnoreOrderingMatch',
    '1.3.6.1.4.1.1466.115.121.1.52': 'caseIgnoreOrderingMatch',
};
exports.default = orderingRules;
