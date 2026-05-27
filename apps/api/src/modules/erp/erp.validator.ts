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
  waxExchangeEnabled: z.coerce.boolean().default(false),
  foundationUnitsPerWaxKg: nonNegative.optional().nullable(),
  paidWaxExchangeEnabled: z.coerce.boolean().default(false),
  paidFoundationUnitsPerWaxKg: nonNegative.optional().nullable(),
  paidExchangeExtraPricePerUnitEur: nonNegative.optional().nullable(),
  exchangeRoundingMode: z.enum(['FLOOR', 'ROUND', 'CEIL', 'NONE']).default('FLOOR'),
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

export const erpSaleUpdateSchema = erpSaleSchema

export const erpExpenseSchema = z.object({
  expenseDate: optionalDate,
  category: z.enum(['RENT', 'ELECTRICITY', 'FUEL', 'MATERIALS', 'SALARIES', 'DELIVERY', 'ADVERTISING', 'OTHER']),
  amountEur: positive,
  paymentMethod: z.enum(['CASH', 'CARD', 'BANK', 'OTHER']),
  supplier: z.string().trim().optional().nullable(),
  notes: z.string().trim().optional().nullable()
})

export const erpWaxTransactionSchema = z.object({
  transactionType: z.enum(['BUY', 'SWAP']).default('BUY'),
  swapCalculationMode: z.enum(['STANDARD_SWAP', 'PAID_SWAP', 'SWAP_WITH_EXTRA_PAYMENT']).default('STANDARD_SWAP'),
  transactionDate: optionalDate,
  customerName: z.string().trim().optional().nullable(),
  customerPhone: z.string().trim().optional().nullable(),
  waxReceivedKg: nonNegative,
  waxPricePerKgEur: nonNegative,
  foundationGivenKg: nonNegative.default(0),
  foundationPricePerKgEur: nonNegative.default(0),
  extraPaymentEur: nonNegative.default(0),
  foundationProductId: z.coerce.number().int().positive().optional().nullable(),
  createExpense: z.coerce.boolean().optional(),
  notes: z.string().trim().optional().nullable(),
  allowNegativeStock: z.coerce.boolean().optional()
})

export const erpWaxSettingsSchema = z.object({
  defaultBuyPriceEur: nonNegative
})

export const erpReportQuerySchema = z.object({
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional()
})
