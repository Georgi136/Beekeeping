"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = findUserByEmail;
const prisma_1 = require("../lib/prisma");
function findUserByEmail(email) {
    return prisma_1.prisma.user.findUnique({
        where: { email: email.toLowerCase() }
    });
}
