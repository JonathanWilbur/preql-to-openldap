"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var syntaxes_1 = __importDefault(require("./syntaxes"));
var orderingRules = Object.entries(syntaxes_1.default)
    .filter(function (syntax) { return !!syntax[1].orderingRule; })
    .map(function (syntax) { return syntax[1].orderingRule; });
exports.default = orderingRules;
