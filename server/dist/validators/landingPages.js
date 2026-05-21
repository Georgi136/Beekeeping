"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landingPageUpsertSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.landingPageUpsertSchema = zod_1.z.object({
    title: zod_1.z.string().trim().min(2),
    slug: zod_1.z.string().trim().optional(),
    heroTitle: zod_1.z.string().trim().min(2),
    heroSubtitle: zod_1.z.string().trim().optional().nullable(),
    heroImage: zod_1.z.string().trim().optional().nullable(),
    ctaText: zod_1.z.string().trim().optional().nullable(),
    ctaLink: zod_1.z.string().trim().optional().nullable(),
    sections: zod_1.z.unknown().default([]),
    status: zod_1.z.nativeEnum(client_1.PageStatus).default(client_1.PageStatus.DRAFT),
    seoTitle: zod_1.z.string().trim().optional().nullable(),
    seoDescription: zod_1.z.string().trim().optional().nullable()
});
