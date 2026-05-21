"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpsertSchema = exports.productUpsertSchema = exports.productImageSchema = exports.productQuerySchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const optionalString = zod_1.z.string().trim().optional().nullable();
exports.productQuerySchema = zod_1.z.object({
    category: zod_1.z.string().trim().optional(),
    featured: zod_1.z.coerce.boolean().optional(),
    status: zod_1.z.nativeEnum(client_1.ProductStatus).optional()
});
exports.productImageSchema = zod_1.z.object({
    url: zod_1.z.string().min(1),
    alt: optionalString,
    sortOrder: zod_1.z.coerce.number().int().min(0).default(0)
});
exports.productUpsertSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2),
    slug: zod_1.z.string().trim().optional(),
    shortDescription: optionalString,
    description: zod_1.z.string().trim().min(5),
    price: zod_1.z.coerce.number().nonnegative(),
    salePrice: zod_1.z.coerce.number().nonnegative().optional().nullable(),
    stock: zod_1.z.coerce.number().int().min(0).default(0),
    status: zod_1.z.nativeEnum(client_1.ProductStatus).default(client_1.ProductStatus.DRAFT),
    featured: zod_1.z.coerce.boolean().default(false),
    categoryId: zod_1.z.coerce.number().int().positive(),
    seoTitle: optionalString,
    seoDescription: optionalString,
    images: zod_1.z.array(exports.productImageSchema).default([])
});
exports.categoryUpsertSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2),
    slug: zod_1.z.string().trim().optional(),
    description: optionalString,
    sortOrder: zod_1.z.coerce.number().int().default(0)
});
