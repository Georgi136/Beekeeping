import { z } from 'zod'

const numeric = z.coerce.number().finite()
const positive = numeric.positive()
const nonNegative = numeric.min(0)
const optionalDate = z.coerce.date().optional()

export const erpProductSchema = z.object({
  sku: z.string().trim().optional().nullable(),
  name: z.string().trim().min(1),
  category: z.enum(['HONEY', 'BEE_PRODUCTS', 'BEEKEEPING_EQUIPMENT', 'WAX_FOUNDATIONS', 'PACKAGING', 'OTHER']),
  unit: z.enum(['PCS', 'KG', 'G', 'LITER', 'PACKAGE']),
  sellPriceEur: nonNegative,
  costPriceEur: nonNegative,
  stockQuantity: nonNegative.default(0),
  minStockQuantity: nonNegative.default(0),
  totalSoldQuantity: nonNegative.default(0),
  active: z.coerce.boolean().default(true),
  notes: z.string().trim().optional().nullable()
})

export const erpSaleSchema = z.object({
  saleDate: optionalDate,
  productId: z.coerce.number().int().positive(),
  quantity: positive,
  unitPriceEur: nonNegative.optional(),
  paymentMethod: z.enum(['CASH', 'CARD', 'BANK', 'OTHER']),
  notes: z.string().trim().optional().nullable(),
  allowNegativeStock: z.coerce.boolean().optional()
})

export const erpExpenseSchema = z.object({
  expenseDate: optionalDate,
  category: z.enum(['RENT', 'ELECTRICITY', 'FUEL', 'MATERIALS', 'SALARIES', 'DELIVERY', 'ADVERTISING', 'OTHER']),
  amountEur: positive,
  paymentMethod: z.enum(['CASH', 'CARD', 'BANK', 'OTHER']),
  supplier: z.string().trim().optional().nullable(),
  notes: z.string().trim().optional().nullable()
})

export const erpWaxTransactionSchema = z.object({
  transactionDate: optionalDate,
  customerName: z.string().trim().min(1),
  customerPhone: z.string().trim().optional().nullable(),
  waxReceivedKg: nonNegative,
  waxPricePerKgEur: nonNegative,
  foundationGivenKg: nonNegative,
  foundationPricePerKgEur: nonNegative,
  extraPaymentEur: nonNegative.default(0),
  foundationProductId: z.coerce.number().int().positive().optional().nullable(),
  notes: z.string().trim().optional().nullable(),
  allowNegativeStock: z.coerce.boolean().optional()
})

export const erpReportQuerySchema = z.object({
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional()
})
