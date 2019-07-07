"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function commentOut(uncommentedText) {
    return ('# ' + uncommentedText.replace(/\r?\n/g, '\r\n# '));
}
exports.default = commentOut;
;
