"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatusSchema = exports.createOrderSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    customerName: zod_1.z.string().trim().min(2),
    phone: zod_1.z.string().trim().min(6),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal('')).transform((value) => value || undefined),
    address: zod_1.z.string().trim().min(5),
    notes: zod_1.z.string().trim().optional(),
    items: zod_1.z.array(zod_1.z.object({
        productId: zod_1.z.coerce.number().int().positive(),
        quantity: zod_1.z.coerce.number().int().positive()
    })).min(1)
});
exports.updateOrderStatusSchema = zod_1.z.object({
    status: zod_1.z.nativeEnum(client_1.OrderStatus)
});
