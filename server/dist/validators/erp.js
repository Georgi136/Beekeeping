"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erpReportQuerySchema = exports.erpWaxTransactionSchema = exports.erpExpenseSchema = exports.erpSaleSchema = exports.erpProductSchema = void 0;
const zod_1 = require("zod");
const numeric = zod_1.z.coerce.number().finite();
const positive = numeric.positive();
const nonNegative = numeric.min(0);
const optionalDate = zod_1.z.coerce.date().optional();
exports.erpProductSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(1),
    category: zod_1.z.enum(['HONEY', 'BEE_PRODUCTS', 'BEEKEEPING_EQUIPMENT', 'WAX_FOUNDATIONS', 'PACKAGING', 'OTHER']),
    unit: zod_1.z.enum(['PCS', 'KG', 'G', 'LITER', 'PACKAGE']),
    sellPriceEur: nonNegative,
    costPriceEur: nonNegative,
    stockQuantity: nonNegative.default(0),
    minStockQuantity: nonNegative.default(0),
    active: zod_1.z.coerce.boolean().default(true),
    notes: zod_1.z.string().trim().optional().nullable()
});
exports.erpSaleSchema = zod_1.z.object({
    saleDate: optionalDate,
    productId: zod_1.z.coerce.number().int().positive(),
    quantity: positive,
    unitPriceEur: nonNegative.optional(),
    paymentMethod: zod_1.z.enum(['CASH', 'CARD', 'BANK', 'OTHER']),
    notes: zod_1.z.string().trim().optional().nullable(),
    allowNegativeStock: zod_1.z.coerce.boolean().optional()
});
exports.erpExpenseSchema = zod_1.z.object({
    expenseDate: optionalDate,
    category: zod_1.z.enum(['RENT', 'ELECTRICITY', 'FUEL', 'MATERIALS', 'SALARIES', 'DELIVERY', 'ADVERTISING', 'OTHER']),
    amountEur: positive,
    paymentMethod: zod_1.z.enum(['CASH', 'CARD', 'BANK', 'OTHER']),
    supplier: zod_1.z.string().trim().optional().nullable(),
    notes: zod_1.z.string().trim().optional().nullable()
});
exports.erpWaxTransactionSchema = zod_1.z.object({
    transactionDate: optionalDate,
    customerName: zod_1.z.string().trim().min(1),
    customerPhone: zod_1.z.string().trim().optional().nullable(),
    waxReceivedKg: nonNegative,
    waxPricePerKgEur: nonNegative,
    foundationGivenKg: nonNegative,
    foundationPricePerKgEur: nonNegative,
    extraPaymentEur: nonNegative.default(0),
    foundationProductId: zod_1.z.coerce.number().int().positive().optional().nullable(),
    notes: zod_1.z.string().trim().optional().nullable(),
    allowNegativeStock: zod_1.z.coerce.boolean().optional()
});
exports.erpReportQuerySchema = zod_1.z.object({
    from: zod_1.z.coerce.date().optional(),
    to: zod_1.z.coerce.date().optional()
});
