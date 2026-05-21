"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromotions = getPromotions;
exports.createPromotionRecord = createPromotionRecord;
exports.updatePromotionRecord = updatePromotionRecord;
exports.deletePromotionRecord = deletePromotionRecord;
const promotionRepository_1 = require("../repositories/promotionRepository");
const slug_1 = require("../utils/slug");
const money_1 = require("../utils/money");
function toDto(promotion) {
    return {
        ...promotion,
        discountValue: (0, money_1.toNumber)(promotion.discountValue)
    };
}
function mapInput(input) {
    return {
        title: input.title,
        slug: input.slug ? (0, slug_1.makeSlug)(input.slug) : (0, slug_1.makeSlug)(input.title),
        description: input.description || null,
        discountType: input.discountType,
        discountValue: (0, money_1.toDecimal)(input.discountValue) ?? 0,
        startsAt: input.startsAt ? new Date(input.startsAt) : null,
        endsAt: input.endsAt ? new Date(input.endsAt) : null,
        active: input.active,
        bannerText: input.bannerText || null,
        seoTitle: input.seoTitle || input.title,
        seoDescription: input.seoDescription || input.description || null,
        product: input.productId ? { connect: { id: input.productId } } : undefined,
        category: input.categoryId ? { connect: { id: input.categoryId } } : undefined
    };
}
async function getPromotions(includeInactive = false) {
    const promotions = await (0, promotionRepository_1.listPromotions)(includeInactive);
    return promotions.map((promotion) => ({
        ...promotion,
        discountValue: (0, money_1.toNumber)(promotion.discountValue)
    }));
}
async function createPromotionRecord(input) {
    return toDto(await (0, promotionRepository_1.createPromotion)(mapInput(input)));
}
async function updatePromotionRecord(id, input) {
    return toDto(await (0, promotionRepository_1.updatePromotion)(id, mapInput(input)));
}
function deletePromotionRecord(id) {
    return (0, promotionRepository_1.deletePromotion)(id);
}
