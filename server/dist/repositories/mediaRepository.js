"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAsset = createMediaAsset;
exports.listMediaAssets = listMediaAssets;
const prisma_1 = require("../lib/prisma");
function createMediaAsset(data) {
    return prisma_1.prisma.mediaAsset.create({ data });
}
function listMediaAssets() {
    return prisma_1.prisma.mediaAsset.findMany({
        orderBy: { createdAt: 'desc' }
    });
}
