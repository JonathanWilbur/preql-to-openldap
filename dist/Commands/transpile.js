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
var database_1 = __importDefault(require("../Transpilers/database"));
var entry_1 = __importDefault(require("../Transpilers/entry"));
var syntaxObjectIdentifiersLDIF_1 = __importDefault(require("../syntaxObjectIdentifiersLDIF"));
var preamble_1 = __importDefault(require("../Transpilers/preamble"));
var postamble_1 = __importDefault(require("../Transpilers/postamble"));
var plainindex_1 = __importDefault(require("../Transpilers/plainindex"));
var transpile = function (etcd, logger) { return __awaiter(_this, void 0, void 0, function () {
    var transpilations, premables, _a, _b, databases, _c, _d, plainIndexes, _e, _f, entries, _g, _h, postambles, _j, _k;
    var _this = this;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                transpilations = [syntaxObjectIdentifiersLDIF_1.default];
                premables = etcd.kindIndex.preamble;
                if (!(premables && premables.length > 0)) return [3 /*break*/, 2];
                _b = (_a = transpilations).concat;
                return [4 /*yield*/, Promise.all(premables.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, preamble_1.default(obj, logger)];
                        });
                    }); }))];
            case 1:
                transpilations = _b.apply(_a, [_l.sent()]);
                _l.label = 2;
            case 2:
                databases = etcd.kindIndex.database;
                if (!(databases && databases.length > 0)) return [3 /*break*/, 4];
                _d = (_c = transpilations).concat;
                return [4 /*yield*/, Promise.all(databases.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, database_1.default(obj, logger, etcd)];
                        });
                    }); }))];
            case 3:
                transpilations = _d.apply(_c, [_l.sent()]);
                _l.label = 4;
            case 4:
                plainIndexes = etcd.kindIndex.plainindex;
                if (!(plainIndexes && plainIndexes.length > 0)) return [3 /*break*/, 6];
                _f = (_e = transpilations).concat;
                return [4 /*yield*/, Promise.all(plainIndexes.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, plainindex_1.default(obj, logger)];
                        });
                    }); }))];
            case 5:
                transpilations = _f.apply(_e, [_l.sent()]);
                _l.label = 6;
            case 6:
                entries = etcd.kindIndex.entry;
                if (!(entries && entries.length > 0)) return [3 /*break*/, 8];
                _h = (_g = transpilations).concat;
                return [4 /*yield*/, Promise.all(entries.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, entry_1.default(obj, logger)];
                        });
                    }); }))];
            case 7:
                transpilations = _h.apply(_g, [_l.sent()]);
                _l.label = 8;
            case 8:
                postambles = etcd.kindIndex.postamble;
                if (!(postambles && postambles.length > 0)) return [3 /*break*/, 10];
                _k = (_j = transpilations).concat;
                return [4 /*yield*/, Promise.all(postambles.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, postamble_1.default(obj, logger)];
                        });
                    }); }))];
            case 9:
                transpilations = _k.apply(_j, [_l.sent()]);
                _l.label = 10;
            case 10: return [2 /*return*/, transpilations.filter(function (t) { return (t !== ''); }).join('\r\n\r\n')];
        }
    });
}); };
exports.default = transpile;
