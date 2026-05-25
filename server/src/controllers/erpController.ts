import type { Request, Response } from 'express'
import { Prisma } from '@prisma/client'
import { prisma } from '../lib/prisma'
import { AppError } from '../errors/AppError'

const BGN_RATE = new Prisma.Decimal('1.95583')

function userId(req: Request) {
  if (!req.user) throw new AppError(401, 'Необходимо е да влезете.')
  return req.user.id
}

function role(req: Request) {
  return req.user?.role
}

function money(value: Prisma.Decimal.Value) {
  return new Prisma.Decimal(value).toDecimalPlaces(2)
}

function qty(value: Prisma.Decimal.Value) {
  return new Prisma.Decimal(value).toDecimalPlaces(3)
}

function toBgn(eur: Prisma.Decimal.Value) {
  return money(new Prisma.Decimal(eur).mul(BGN_RATE))
}

function dayRange(date = new Date()) {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  const end = new Date(start)
  end.setDate(end.getDate() + 1)
  return { gte: start, lt: end }
}

function monthRange(date = new Date()) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1)
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 1)
  return { gte: start, lt: end }
}

function reportRange(req: Request) {
  const from = req.query.from ? new Date(String(req.query.from)) : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  const to = req.query.to ? new Date(String(req.query.to)) : new Date()
  to.setHours(23, 59, 59, 999)
  return { gte: from, lte: to }
}

function decimalToNumber(value: unknown): unknown {
  if (value instanceof Prisma.Decimal) return Number(value)
  if (typeof value === 'bigint') return Number(value)
  if (value instanceof Date) return value.toISOString()
  if (Array.isArray(value)) return value.map(decimalToNumber)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, decimalToNumber(val)]))
  }
  return value
}

async function audit(userIdValue: number | undefined, action: string, entityType: string, entityId: string | number, oldValueJson: unknown, newValueJson: unknown) {
  await prisma.erpAuditLog.create({
    data: {
      userId: userIdValue,
      action,
      entityType,
      entityId: String(entityId),
      oldValueJson: oldValueJson === undefined ? Prisma.JsonNull : oldValueJson as Prisma.InputJsonValue,
      newValueJson: newValueJson === undefined ? Prisma.JsonNull : newValueJson as Prisma.InputJsonValue
    }
  })
}

async function assertStock(productId: number, quantityChange: Prisma.Decimal, allowNegative: boolean) {
  if (quantityChange.gte(0)) return
  const product = await prisma.erpProduct.findUnique({ where: { id: productId } })
  if (!product) throw new AppError(404, 'Продуктът не е намерен.')
  const nextStock = product.stockQuantity.add(quantityChange)
  if (nextStock.lt(0) && !allowNegative) {
    throw new AppError(400, 'Недостатъчна наличност. Само администратор може да разреши отрицателен склад.')
  }
}

export async function erpMeta(_req: Request, res: Response) {
  res.json({
    bgnRate: Number(BGN_RATE),
    categories: [
      ['HONEY', 'Мед'],
      ['BEE_PRODUCTS', 'Пчелни продукти'],
      ['BEEKEEPING_EQUIPMENT', 'Пчеларски инвентар'],
      ['WAX_FOUNDATIONS', 'Восъчни основи'],
      ['PACKAGING', 'Опаковки'],
      ['OTHER', 'Други']
    ],
    units: [
      ['PCS', 'бр.'],
      ['KG', 'кг'],
      ['G', 'г'],
      ['LITER', 'литър'],
      ['PACKAGE', 'пакет']
    ],
    payments: [
      ['CASH', 'в брой'],
      ['CARD', 'карта'],
      ['BANK', 'банка'],
      ['OTHER', 'друго']
    ]
  })
}

export async function erpDashboard(_req: Request, res: Response) {
  const today = dayRange()
  const month = monthRange()
  const [todayAgg, monthAgg, lowStockProducts, latestSales, latestWaxTransactions] = await Promise.all([
    prisma.erpSale.aggregate({ where: { saleDate: today }, _sum: { totalEur: true, profitEur: true } }),
    prisma.erpSale.aggregate({ where: { saleDate: month }, _sum: { totalEur: true, profitEur: true } }),
    prisma.erpProduct.findMany({
      where: { active: true, stockQuantity: { lte: prisma.erpProduct.fields.minStockQuantity } },
      orderBy: { stockQuantity: 'asc' },
      take: 8
    }),
    prisma.erpSale.findMany({ include: { product: true, createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 }),
    prisma.erpWaxTransaction.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 })
  ])

  res.json(decimalToNumber({
    todayTurnoverEur: todayAgg._sum.totalEur || 0,
    todayProfitEur: todayAgg._sum.profitEur || 0,
    monthlyTurnoverEur: monthAgg._sum.totalEur || 0,
    monthlyProfitEur: monthAgg._sum.profitEur || 0,
    lowStockProducts,
    latestSales,
    latestWaxTransactions
  }))
}

export async function listErpProducts(_req: Request, res: Response) {
  const products = await prisma.erpProduct.findMany({ orderBy: [{ active: 'desc' }, { name: 'asc' }] })
  const enriched = products.map((product) => ({
    ...product,
    inventoryValueEur: money(product.stockQuantity.mul(product.costPriceEur)),
    inventorySellValueEur: money(product.stockQuantity.mul(product.sellPriceEur)),
    unitProfitEur: money(product.sellPriceEur.sub(product.costPriceEur)),
    soldProfitEur: money(product.totalSoldQuantity.mul(product.sellPriceEur.sub(product.costPriceEur))),
    stockStatus: product.stockQuantity.lte(product.minStockQuantity) ? 'LOW' : 'OK'
  }))
  res.json(decimalToNumber(enriched))
}

export async function createErpProduct(req: Request, res: Response) {
  const creatorId = userId(req)
  const product = await prisma.$transaction(async (tx) => {
    const created = await tx.erpProduct.create({
      data: {
        sku: req.body.sku || null,
        name: req.body.name,
        category: req.body.category,
        unit: req.body.unit,
        sellPriceEur: money(req.body.sellPriceEur),
        costPriceEur: money(req.body.costPriceEur),
        stockQuantity: qty(req.body.stockQuantity),
        minStockQuantity: qty(req.body.minStockQuantity),
        totalSoldQuantity: qty(req.body.totalSoldQuantity),
        active: req.body.active,
        notes: req.body.notes
      }
    })
    if (created.stockQuantity.gt(0)) {
      await tx.erpInventoryMovement.create({
        data: {
          productId: created.id,
          movementType: 'DELIVERY',
          quantityChange: created.stockQuantity,
          referenceType: 'erp_product',
          referenceId: created.id,
          notes: 'Начална наличност',
          createdById: creatorId
        }
      })
    }
    return created
  })
  await audit(creatorId, 'created product', 'erp_product', product.id, undefined, decimalToNumber(product))
  res.status(201).json(decimalToNumber(product))
}

export async function updateErpProduct(req: Request, res: Response) {
  const creatorId = userId(req)
  const id = Number(req.params.id)
  const oldProduct = await prisma.erpProduct.findUnique({ where: { id } })
  if (!oldProduct) throw new AppError(404, 'Продуктът не е намерен.')

  const product = await prisma.$transaction(async (tx) => {
    const stockQuantity = qty(req.body.stockQuantity)
    const diff = stockQuantity.sub(oldProduct.stockQuantity)
    const updated = await tx.erpProduct.update({
      where: { id },
      data: {
        name: req.body.name,
        sku: req.body.sku || null,
        category: req.body.category,
        unit: req.body.unit,
        sellPriceEur: money(req.body.sellPriceEur),
        costPriceEur: money(req.body.costPriceEur),
        stockQuantity,
        minStockQuantity: qty(req.body.minStockQuantity),
        totalSoldQuantity: qty(req.body.totalSoldQuantity),
        active: req.body.active,
        notes: req.body.notes
      }
    })
    if (!diff.eq(0)) {
      await tx.erpInventoryMovement.create({
        data: {
          productId: id,
          movementType: 'CORRECTION',
          quantityChange: diff,
          referenceType: 'erp_product',
          referenceId: id,
          notes: 'Корекция от редакция на продукт',
          createdById: creatorId
        }
      })
    }
    return updated
  })

  await audit(creatorId, 'updated product', 'erp_product', id, decimalToNumber(oldProduct), decimalToNumber(product))
  res.json(decimalToNumber(product))
}

export async function listErpSales(_req: Request, res: Response) {
  const sales = await prisma.erpSale.findMany({
    include: { product: true, createdBy: { select: { name: true, email: true } } },
    orderBy: { saleDate: 'desc' },
    take: 100
  })
  res.json(decimalToNumber(sales))
}

export async function createErpSale(req: Request, res: Response) {
  const creatorId = userId(req)
  const product = await prisma.erpProduct.findUnique({ where: { id: req.body.productId } })
  if (!product) throw new AppError(404, 'Продуктът не е намерен.')

  const quantity = qty(req.body.quantity)
  const unitPrice = money(req.body.unitPriceEur ?? product.sellPriceEur)
  const total = money(quantity.mul(unitPrice))
  const costTotal = money(quantity.mul(product.costPriceEur))
  const profit = money(total.sub(costTotal))
  const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock)

  await assertStock(product.id, quantity.neg(), allowNegative)

  const sale = await prisma.$transaction(async (tx) => {
    const created = await tx.erpSale.create({
      data: {
        saleDate: req.body.saleDate || new Date(),
        productId: product.id,
        quantity,
        unitPriceEur: unitPrice,
        totalEur: total,
        totalBgn: toBgn(total),
        costTotalEur: costTotal,
        profitEur: profit,
        paymentMethod: req.body.paymentMethod,
        notes: req.body.notes,
        createdById: creatorId
      }
    })
    await tx.erpProduct.update({ where: { id: product.id }, data: { stockQuantity: { decrement: quantity } } })
    await tx.erpProduct.update({ where: { id: product.id }, data: { totalSoldQuantity: { increment: quantity } } })
    await tx.erpInventoryMovement.create({
      data: {
        productId: product.id,
        movementType: 'SALE',
        quantityChange: quantity.neg(),
        referenceType: 'erp_sale',
        referenceId: created.id,
        notes: req.body.notes,
        createdById: creatorId
      }
    })
    return created
  })

  await audit(creatorId, 'created sale', 'erp_sale', sale.id, undefined, decimalToNumber(sale))
  res.status(201).json(decimalToNumber(sale))
}

export async function listInventoryMovements(_req: Request, res: Response) {
  const movements = await prisma.erpInventoryMovement.findMany({
    include: { product: true, createdBy: { select: { name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
    take: 200
  })
  res.json(decimalToNumber(movements))
}

export async function listExpenses(_req: Request, res: Response) {
  const expenses = await prisma.erpExpense.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { expenseDate: 'desc' }, take: 200 })
  res.json(decimalToNumber(expenses))
}

export async function createExpense(req: Request, res: Response) {
  const creatorId = userId(req)
  const amount = money(req.body.amountEur)
  const expense = await prisma.erpExpense.create({
    data: {
      expenseDate: req.body.expenseDate || new Date(),
      category: req.body.category,
      amountEur: amount,
      amountBgn: toBgn(amount),
      paymentMethod: req.body.paymentMethod,
      supplier: req.body.supplier,
      notes: req.body.notes,
      createdById: creatorId
    }
  })
  await audit(creatorId, 'created expense', 'erp_expense', expense.id, undefined, decimalToNumber(expense))
  res.status(201).json(decimalToNumber(expense))
}

export async function listWaxTransactions(_req: Request, res: Response) {
  const rows = await prisma.erpWaxTransaction.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { transactionDate: 'desc' }, take: 200 })
  res.json(decimalToNumber(rows))
}

export async function createWaxTransaction(req: Request, res: Response) {
  const creatorId = userId(req)
  const waxReceivedKg = qty(req.body.waxReceivedKg)
  const foundationGivenKg = qty(req.body.foundationGivenKg)
  const waxValue = money(waxReceivedKg.mul(req.body.waxPricePerKgEur))
  const foundationValue = money(foundationGivenKg.mul(req.body.foundationPricePerKgEur))
  const extraPayment = money(req.body.extraPaymentEur || 0)
  const balance = money(waxValue.sub(foundationValue).sub(extraPayment))
  const foundationProductId = req.body.foundationProductId
  const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock)

  if (foundationProductId && foundationGivenKg.gt(0)) {
    await assertStock(foundationProductId, foundationGivenKg.neg(), allowNegative)
  }

  const row = await prisma.$transaction(async (tx) => {
    const created = await tx.erpWaxTransaction.create({
      data: {
        transactionDate: req.body.transactionDate || new Date(),
        customerName: req.body.customerName,
        customerPhone: req.body.customerPhone,
        waxReceivedKg,
        waxPricePerKgEur: money(req.body.waxPricePerKgEur),
        waxValueEur: waxValue,
        foundationGivenKg,
        foundationPricePerKgEur: money(req.body.foundationPricePerKgEur),
        foundationValueEur: foundationValue,
        extraPaymentEur: extraPayment,
        balanceEur: balance,
        notes: req.body.notes,
        createdById: creatorId
      }
    })

    if (foundationProductId && foundationGivenKg.gt(0)) {
      await tx.erpProduct.update({ where: { id: foundationProductId }, data: { stockQuantity: { decrement: foundationGivenKg } } })
      await tx.erpInventoryMovement.create({
        data: {
          productId: foundationProductId,
          movementType: 'WAX_EXCHANGE',
          quantityChange: foundationGivenKg.neg(),
          referenceType: 'erp_wax_transaction',
          referenceId: created.id,
          notes: req.body.notes,
          createdById: creatorId
        }
      })
    }

    return created
  })

  await audit(creatorId, 'created wax transaction', 'erp_wax_transaction', row.id, undefined, decimalToNumber(row))
  res.status(201).json(decimalToNumber(row))
}

export async function erpReports(req: Request, res: Response) {
  const range = reportRange(req)
  const [daily, monthly, salesByProduct, expensesByCategory, waxTransactions, inventoryMovements, lowStockProducts, salesAgg, expensesAgg] = await Promise.all([
    prisma.$queryRaw<Array<{ day: Date; turnover_eur: Prisma.Decimal; profit_eur: Prisma.Decimal; sold_quantity: Prisma.Decimal; sold_lines: bigint; expenses_eur: Prisma.Decimal }>>`
      SELECT
        days.day,
        coalesce(s.turnover_eur, 0) AS turnover_eur,
        coalesce(s.profit_eur, 0) AS profit_eur,
        coalesce(s.sold_quantity, 0) AS sold_quantity,
        coalesce(s.sold_lines, 0) AS sold_lines,
        coalesce(e.expenses_eur, 0) AS expenses_eur
      FROM (
        SELECT date_trunc('day', "saleDate") AS day FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte}
        UNION
        SELECT date_trunc('day', "expenseDate") AS day FROM "ErpExpense" WHERE "expenseDate" BETWEEN ${range.gte} AND ${range.lte}
      ) days
      LEFT JOIN (
        SELECT date_trunc('day', "saleDate") AS day, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur, sum(quantity) AS sold_quantity, count(*) AS sold_lines
        FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) s ON s.day = days.day
      LEFT JOIN (
        SELECT date_trunc('day', "expenseDate") AS day, sum("amountEur") AS expenses_eur
        FROM "ErpExpense" WHERE "expenseDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) e ON e.day = days.day
      ORDER BY days.day DESC
    `,
    prisma.$queryRaw<Array<{ month: Date; turnover_eur: Prisma.Decimal; profit_eur: Prisma.Decimal; sold_quantity: Prisma.Decimal; sold_lines: bigint; expenses_eur: Prisma.Decimal }>>`
      SELECT
        months.month,
        coalesce(s.turnover_eur, 0) AS turnover_eur,
        coalesce(s.profit_eur, 0) AS profit_eur,
        coalesce(s.sold_quantity, 0) AS sold_quantity,
        coalesce(s.sold_lines, 0) AS sold_lines,
        coalesce(e.expenses_eur, 0) AS expenses_eur
      FROM (
        SELECT date_trunc('month', "saleDate") AS month FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte}
        UNION
        SELECT date_trunc('month', "expenseDate") AS month FROM "ErpExpense" WHERE "expenseDate" BETWEEN ${range.gte} AND ${range.lte}
      ) months
      LEFT JOIN (
        SELECT date_trunc('month', "saleDate") AS month, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur, sum(quantity) AS sold_quantity, count(*) AS sold_lines
        FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) s ON s.month = months.month
      LEFT JOIN (
        SELECT date_trunc('month', "expenseDate") AS month, sum("amountEur") AS expenses_eur
        FROM "ErpExpense" WHERE "expenseDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) e ON e.month = months.month
      ORDER BY months.month DESC
    `,
    prisma.$queryRaw<Array<{ product_id: number; product_name: string; quantity: Prisma.Decimal; turnover_eur: Prisma.Decimal; profit_eur: Prisma.Decimal }>>`
      SELECT p.id AS product_id, p.name AS product_name, sum(s.quantity) AS quantity, sum(s."totalEur") AS turnover_eur, sum(s."profitEur") AS profit_eur
      FROM "ErpSale" s JOIN "ErpProduct" p ON p.id = s."productId"
      WHERE s."saleDate" BETWEEN ${range.gte} AND ${range.lte}
      GROUP BY p.id, p.name ORDER BY turnover_eur DESC
    `,
    prisma.erpExpense.groupBy({ by: ['category'], where: { expenseDate: range }, _sum: { amountEur: true } }),
    prisma.erpWaxTransaction.findMany({ where: { transactionDate: range }, orderBy: { transactionDate: 'desc' } }),
    prisma.erpInventoryMovement.findMany({ where: { createdAt: range }, include: { product: true }, orderBy: { createdAt: 'desc' } }),
    prisma.erpProduct.findMany({ where: { active: true, stockQuantity: { lte: prisma.erpProduct.fields.minStockQuantity } }, orderBy: { stockQuantity: 'asc' } }),
    prisma.erpSale.aggregate({ where: { saleDate: range }, _sum: { totalEur: true, profitEur: true } }),
    prisma.erpExpense.aggregate({ where: { expenseDate: range }, _sum: { amountEur: true } })
  ])

  const grossProfit = salesAgg._sum.profitEur || new Prisma.Decimal(0)
  const expenses = expensesAgg._sum.amountEur || new Prisma.Decimal(0)
  res.json(decimalToNumber({
    daily,
    monthly,
    salesByProduct,
    profitByProduct: salesByProduct,
    expensesByCategory,
    waxTransactions,
    inventoryMovements,
    lowStockProducts,
    totals: {
      turnoverEur: salesAgg._sum.totalEur || 0,
      grossProfitEur: grossProfit,
      expensesEur: expenses,
      netProfitEur: grossProfit.sub(expenses)
    }
  }))
}

export async function exportReportCsv(req: Request, res: Response) {
  const range = reportRange(req)
  const sales = await prisma.erpSale.findMany({ where: { saleDate: range }, include: { product: true }, orderBy: { saleDate: 'asc' } })
  const rows = [
    ['Дата', 'Продукт', 'Количество', 'Оборот EUR', 'Оборот BGN', 'Печалба EUR', 'Плащане'],
    ...sales.map((sale) => [
      sale.saleDate.toISOString().slice(0, 10),
      sale.product.name,
      String(sale.quantity),
      String(sale.totalEur),
      String(sale.totalBgn),
      String(sale.profitEur),
      sale.paymentMethod
    ])
  ]
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n')
  res.setHeader('Content-Type', 'text/csv; charset=utf-8')
  res.setHeader('Content-Disposition', 'attachment; filename="sakimed-report.csv"')
  res.send(`\uFEFF${csv}`)
}
