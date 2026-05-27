export type Tab = 'dashboard' | 'sales' | 'products' | 'reports' | 'expenses' | 'wax' | 'wax-ledger' | 'settings'
export type ReportTab = 'monthly' | 'daily' | 'products' | 'expenses' | 'low-stock'

export interface ErpProduct {
  id: number
  sku?: string | null
  name: string
  category: string
  unit: string
  sellPriceEur: number
  costPriceEur: number
  stockQuantity: number
  minStockQuantity: number
  totalSoldQuantity: number
  inventoryValueEur?: number
  inventorySellValueEur?: number
  unitProfitEur?: number
  soldProfitEur?: number
  stockStatus?: 'LOW' | 'OK'
  active: boolean
  waxExchangeEnabled?: boolean
  foundationUnitsPerWaxKg?: number | null
  paidWaxExchangeEnabled?: boolean
  paidFoundationUnitsPerWaxKg?: number | null
  paidExchangeExtraPricePerUnitEur?: number | null
  exchangeRoundingMode?: 'FLOOR' | 'ROUND' | 'CEIL' | 'NONE'
  notes?: string | null
}

export interface ErpSale {
  id: number
  saleDate: string
  product: ErpProduct
  quantity: number
  unitPriceEur: number
  totalEur: number
  totalBgn: number
  profitEur: number
  paymentMethod: string
  notes?: string | null
}

export interface Dashboard {
  todayTurnoverEur: number
  todayProfitEur: number
  monthlyTurnoverEur: number
  monthlyProfitEur: number
  lowStockProducts: ErpProduct[]
  latestSales: ErpSale[]
  latestWaxTransactions: WaxTransaction[]
  waxStockKg: number
  waxInventoryValueEur?: number
}

export interface WaxTransaction {
  id: number
  transactionType?: 'BUY' | 'SWAP'
  swapCalculationMode?: 'STANDARD_SWAP' | 'PAID_SWAP' | 'SWAP_WITH_EXTRA_PAYMENT'
  transactionDate: string
  customerName?: string | null
  customerPhone?: string | null
  waxReceivedKg: number
  waxPricePerKgEur: number
  waxValueEur: number
  foundationGivenKg: number
  foundationPricePerKgEur: number
  foundationValueEur: number
  suggestedFoundationGivenKg?: number | null
  foundationUnitsPerWaxKgUsed?: number | null
  exchangeRoundingModeUsed?: string | null
  extraPaymentPerFoundationEur?: number | null
  foundationProductId?: number | null
  foundationProduct?: ErpProduct | null
  extraPaymentEur: number
  balanceEur: number
  notes?: string | null
}

export interface WaxSummary {
  defaultBuyPriceEur: number
  waxStockKg: number
  waxInventoryValueEur: number
  totalWaxBoughtValueEur: number
  totalFoundationGivenKg: number
  totalFoundationGivenValueEur: number
  totalExtraPaymentEur: number
  balanceEur: number
  transactionCount: number
}

export interface WaxSettings {
  defaultBuyPriceEur: number
}

export interface Reports {
  daily: Array<{ day: string; turnover_eur: number; profit_eur: number; sold_quantity: number; sold_lines: number; expenses_eur: number }>
  monthly: Array<{ month: string; turnover_eur: number; profit_eur: number; sold_quantity: number; sold_lines: number; expenses_eur: number }>
  salesByProduct: Array<{ product_id: number; product_name: string; quantity: number; turnover_eur: number; profit_eur: number }>
  expensesByCategory: Array<{ category: string; _sum: { amountEur: number | null } }>
  lowStockProducts: ErpProduct[]
  totals: { turnoverEur: number; grossProfitEur: number; expensesEur: number; waxSwapExtraPaymentEur?: number; netProfitEur: number }
}

export interface ProductImportRow {
  rowNumber: number
  sku: string | null
  name: string
  category: string
  unit: string
  sellPriceEur: number
  costPriceEur: number
  stockQuantity: number
  minStockQuantity: number
  errors: string[]
}

export interface PaginatedResult<T> {
  items?: T[]
}
