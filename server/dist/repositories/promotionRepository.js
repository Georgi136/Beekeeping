"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promotionInclude = void 0;
exports.listPromotions = listPromotions;
exports.createPromotion = createPromotion;
exports.updatePromotion = updatePromotion;
exports.deletePromotion = deletePromotion;
const prisma_1 = require("../lib/prisma");
exports.promotionInclude = {
    product: true,
    category: true
};
function listPromotions(includeInactive = false) {
    const now = new Date();
    return prisma_1.prisma.promotion.findMany({
        where: includeInactive
            ? undefined
            : {
                active: true,
                OR: [{ startsAt: null }, { startsAt: { lte: now } }],
                AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }]
            },
        include: exports.promotionInclude,
        orderBy: { updatedAt: 'desc' }
    });
}
function createPromotion(data) {
    return prisma_1.prisma.promotion.create({
        data,
        include: exports.promotionInclude
    });
}
function updatePromotion(id, data) {
    return prisma_1.prisma.promotion.update({
        where: { id },
        data,
        include: exports.promotionInclude
    });
}
function deletePromotion(id) {
    return prisma_1.prisma.promotion.delete({ where: { id } });
}
