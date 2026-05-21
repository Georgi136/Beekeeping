"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promotionUpsertSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const nullableNumber = zod_1.z.coerce.number().int().positive().optional().nullable();
const nullableDate = zod_1.z.string().datetime().optional().nullable();
exports.promotionUpsertSchema = zod_1.z.object({
    title: zod_1.z.string().trim().min(2),
    slug: zod_1.z.string().trim().optional(),
    description: zod_1.z.string().trim().optional().nullable(),
    discountType: zod_1.z.nativeEnum(client_1.DiscountType),
    discountValue: zod_1.z.coerce.number().nonnegative(),
    startsAt: nullableDate,
    endsAt: nullableDate,
    active: zod_1.z.coerce.boolean().default(false),
    bannerText: zod_1.z.string().trim().optional().nullable(),
    productId: nullableNumber,
    categoryId: nullableNumber,
    seoTitle: zod_1.z.string().trim().optional().nullable(),
    seoDescription: zod_1.z.string().trim().optional().nullable()
});
