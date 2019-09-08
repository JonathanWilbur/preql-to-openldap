"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var matchingRules_1 = __importDefault(require("../matchingRules"));
var orderingRules_1 = __importDefault(require("../orderingRules"));
var substringRules_1 = __importDefault(require("../substringRules"));
var syntaxes_1 = __importDefault(require("../syntaxes"));
var prohibitedIdentifiers_1 = __importDefault(require("../prohibitedIdentifiers"));
var transpileAttribute = function (obj, logger, etcd) { return __awaiter(_this, void 0, void 0, function () {
    var dataType, syntaxOID, ldapSyntax, ret, comment, matchingRule, defaultMatchingRule, orderingRule, defaultOrderingRule, substringRule, defaultSubstringRule;
    return __generator(this, function (_a) {
        if (prohibitedIdentifiers_1.default.indexOf(obj.spec.name) !== -1) {
            throw new Error("Attribute name '" + obj.spec.name + "' is prohibited.");
        }
        dataType = etcd.kindNameIndex["datatype:" + obj.spec.type];
        if (!dataType) {
            throw new Error("No data type named '" + obj.spec.type + "'.");
        }
        if (dataType.spec.values) {
            syntaxOID = '1.3.6.1.4.1.1466.115.121.1.15';
        }
        else {
            if (!dataType.spec.targets.openldap) {
                throw new Error("No OpenLDAP nativeType defined for DataType '" + dataType.metadata.name + "'.");
            }
            syntaxOID = dataType.spec.targets.openldap.nativeType;
            // TODO: Check that it is a valid OID.
        }
        ldapSyntax = syntaxes_1.default[syntaxOID];
        if (!obj.spec.objectIdentifier) {
            throw new Error("No 'objectIdentifier' label for Attribute '" + obj.metadata.name + "'.");
        }
        ret = "olcAttributeTypes: ( " + obj.spec.objectIdentifier + " NAME '" + obj.spec.name + "'";
        comment = obj.metadata.annotations['comment'];
        if (comment) {
            ret += " DESC '" + comment + "'"; // FIXME: Escape
        }
        matchingRule = (obj.spec.matchingRules || [])
            .find(function (mr) { return matchingRules_1.default.indexOf(mr) !== -1; });
        if (matchingRule) {
            ret += " EQUALITY " + matchingRule; // FIXME: Escape
        }
        else {
            defaultMatchingRule = ldapSyntax.matchingRule;
            if (defaultMatchingRule) {
                ret += " EQUALITY " + defaultMatchingRule;
            }
        }
        orderingRule = (obj.spec.orderingRules || [])
            .find(function (or) { return orderingRules_1.default.indexOf(or) !== -1; });
        if (orderingRule) {
            ret += " ORDERING " + orderingRule + "\r\n"; // FIXME: Escape
        }
        else {
            defaultOrderingRule = ldapSyntax.orderingRule;
            if (defaultOrderingRule) {
                ret += " ORDERING " + defaultOrderingRule;
            }
        }
        substringRule = (obj.spec.substringRules || [])
            .find(function (sr) { return substringRules_1.default.indexOf(sr) !== -1; });
        if (substringRule) {
            ret += " SUBSTR " + substringRule; // FIXME: Escape
        }
        else {
            defaultSubstringRule = ldapSyntax.substringsRule;
            if (defaultSubstringRule) {
                ret += " SUBSTR " + defaultSubstringRule;
            }
        }
        ret += " SYNTAX " + syntaxOID;
        ret += obj.spec.length ? "{" + obj.spec.length + "}" : '';
        if (!obj.spec.multiValued) {
            ret += ' SINGLE-VALUE';
        }
        ret += ' )';
        return [2 /*return*/, ret];
    });
}); };
exports.default = transpileAttribute;
