"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = toNumber;
exports.toDecimal = toDecimal;
const client_1 = require("@prisma/client");
function toNumber(value) {
    if (value === null || value === undefined)
        return null;
    if (typeof value === 'number')
        return value;
    if (typeof value === 'string')
        return Number(value);
    return value.toNumber();
}
function toDecimal(value) {
    if (value === null || value === undefined || value === '')
        return null;
    return new client_1.Prisma.Decimal(value);
}
