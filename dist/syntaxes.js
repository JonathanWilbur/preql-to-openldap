"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// REVIEW: uuid?
var matchingRules = {
    '1.3.6.1.4.1.1466.115.121.1.4': {
        matchingRule: 'octetStringMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.5': { // binaryOID
    },
    '1.3.6.1.4.1.1466.115.121.1.6': {
        matchingRule: 'bitStringMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.7': {
        matchingRule: 'booleanMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.8': { // certificateOID
    },
    '1.3.6.1.4.1.1466.115.121.1.9': { // certificateListOID
    },
    '1.3.6.1.4.1.1466.115.121.1.10': { // certificatePairOID
    },
    '1.3.6.1.4.1.1466.115.121.1.11': {
        matchingRule: 'caseIgnoreMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.12': {
        matchingRule: 'distinguishedNameMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.15': {
        matchingRule: 'caseIgnoreMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.22': {
        matchingRule: 'telephoneNumberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.24': {
        matchingRule: 'generalizedTimeMatch',
        orderingRule: 'generalizedTimeOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.26': {
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.27': {
        matchingRule: 'integerMatch',
        orderingRule: 'integerOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.28': { // jpegOID
    },
    '1.3.6.1.4.1.1466.115.121.1.34': {
        matchingRule: 'uniqueMemberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.36': {
        matchingRule: 'numericStringMatch',
        orderingRule: 'numericStringOrderingMatch',
        substringsRule: 'numericStringSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.38': {
        matchingRule: 'objectIdentiferMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.39': {
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.40': {
        matchingRule: 'octetStringMatch',
        orderingRule: 'octetStringOrderingMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.41': {
        matchingRule: 'caseIgnoreListMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.44': {
        matchingRule: 'caseIgnoreIA5Match',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'caseIgnoreIA5SubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.49': { // supportedAlgorithmOID
    },
    '1.3.6.1.4.1.1466.115.121.1.50': {
        matchingRule: 'telephoneNumberMatch',
        orderingRule: 'caseIgnoreOrderingMatch',
        substringsRule: 'telephoneNumberSubstringsMatch',
    },
    '1.3.6.1.4.1.1466.115.121.1.52': {
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
exports.default = matchingRules;
