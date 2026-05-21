"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstParam = firstParam;
function firstParam(value) {
    return Array.isArray(value) ? value[0] : value || '';
}
