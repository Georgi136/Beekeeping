"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erpMeta = erpMeta;
exports.erpDashboard = erpDashboard;
exports.listErpProducts = listErpProducts;
exports.createErpProduct = createErpProduct;
exports.updateErpProduct = updateErpProduct;
exports.listErpSales = listErpSales;
exports.createErpSale = createErpSale;
exports.listInventoryMovements = listInventoryMovements;
exports.listExpenses = listExpenses;
exports.createExpense = createExpense;
exports.listWaxTransactions = listWaxTransactions;
exports.createWaxTransaction = createWaxTransaction;
exports.erpReports = erpReports;
exports.exportReportCsv = exportReportCsv;
const client_1 = require("@prisma/client");
const prisma_1 = require("../lib/prisma");
const AppError_1 = require("../errors/AppError");
const BGN_RATE = new client_1.Prisma.Decimal('1.95583');
function userId(req) {
    if (!req.user)
        throw new AppError_1.AppError(401, 'Необходимо е да влезете.');
    return req.user.id;
}
function role(req) {
    return req.user?.role;
}
function money(value) {
    return new client_1.Prisma.Decimal(value).toDecimalPlaces(2);
}
function qty(value) {
    return new client_1.Prisma.Decimal(value).toDecimalPlaces(3);
}
function toBgn(eur) {
    return money(new client_1.Prisma.Decimal(eur).mul(BGN_RATE));
}
function dayRange(date = new Date()) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    return { gte: start, lt: end };
}
function monthRange(date = new Date()) {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return { gte: start, lt: end };
}
function reportRange(req) {
    const from = req.query.from ? new Date(String(req.query.from)) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const to = req.query.to ? new Date(String(req.query.to)) : new Date();
    to.setHours(23, 59, 59, 999);
    return { gte: from, lte: to };
}
function decimalToNumber(value) {
    if (value instanceof client_1.Prisma.Decimal)
        return Number(value);
    if (value instanceof Date)
        return value.toISOString();
    if (Array.isArray(value))
        return value.map(decimalToNumber);
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, decimalToNumber(val)]));
    }
    return value;
}
async function audit(userIdValue, action, entityType, entityId, oldValueJson, newValueJson) {
    await prisma_1.prisma.erpAuditLog.create({
        data: {
            userId: userIdValue,
            action,
            entityType,
            entityId: String(entityId),
            oldValueJson: oldValueJson === undefined ? client_1.Prisma.JsonNull : oldValueJson,
            newValueJson: newValueJson === undefined ? client_1.Prisma.JsonNull : newValueJson
        }
    });
}
async function assertStock(productId, quantityChange, allowNegative) {
    if (quantityChange.gte(0))
        return;
    const product = await prisma_1.prisma.erpProduct.findUnique({ where: { id: productId } });
    if (!product)
        throw new AppError_1.AppError(404, 'Продуктът не е намерен.');
    const nextStock = product.stockQuantity.add(quantityChange);
    if (nextStock.lt(0) && !allowNegative) {
        throw new AppError_1.AppError(400, 'Недостатъчна наличност. Само администратор може да разреши отрицателен склад.');
    }
}
async function erpMeta(_req, res) {
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
    });
}
async function erpDashboard(_req, res) {
    const today = dayRange();
    const month = monthRange();
    const [todayAgg, monthAgg, lowStockProducts, latestSales, latestWaxTransactions] = await Promise.all([
        prisma_1.prisma.erpSale.aggregate({ where: { saleDate: today }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpSale.aggregate({ where: { saleDate: month }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpProduct.findMany({
            where: { active: true, stockQuantity: { lte: prisma_1.prisma.erpProduct.fields.minStockQuantity } },
            orderBy: { stockQuantity: 'asc' },
            take: 8
        }),
        prisma_1.prisma.erpSale.findMany({ include: { product: true, createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 }),
        prisma_1.prisma.erpWaxTransaction.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 })
    ]);
    res.json(decimalToNumber({
        todayTurnoverEur: todayAgg._sum.totalEur || 0,
        todayProfitEur: todayAgg._sum.profitEur || 0,
        monthlyTurnoverEur: monthAgg._sum.totalEur || 0,
        monthlyProfitEur: monthAgg._sum.profitEur || 0,
        lowStockProducts,
        latestSales,
        latestWaxTransactions
    }));
}
async function listErpProducts(_req, res) {
    const products = await prisma_1.prisma.erpProduct.findMany({ orderBy: [{ active: 'desc' }, { name: 'asc' }] });
    res.json(decimalToNumber(products));
}
async function createErpProduct(req, res) {
    const creatorId = userId(req);
    const product = await prisma_1.prisma.$transaction(async (tx) => {
        const created = await tx.erpProduct.create({
            data: {
                ...req.body,
                sellPriceEur: money(req.body.sellPriceEur),
                costPriceEur: money(req.body.costPriceEur),
                stockQuantity: qty(req.body.stockQuantity),
                minStockQuantity: qty(req.body.minStockQuantity)
            }
        });
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
            });
        }
        return created;
    });
    await audit(creatorId, 'created product', 'erp_product', product.id, undefined, decimalToNumber(product));
    res.status(201).json(decimalToNumber(product));
}
async function updateErpProduct(req, res) {
    const creatorId = userId(req);
    const id = Number(req.params.id);
    const oldProduct = await prisma_1.prisma.erpProduct.findUnique({ where: { id } });
    if (!oldProduct)
        throw new AppError_1.AppError(404, 'Продуктът не е намерен.');
    const product = await prisma_1.prisma.$transaction(async (tx) => {
        const stockQuantity = qty(req.body.stockQuantity);
        const diff = stockQuantity.sub(oldProduct.stockQuantity);
        const updated = await tx.erpProduct.update({
            where: { id },
            data: {
                name: req.body.name,
                category: req.body.category,
                unit: req.body.unit,
                sellPriceEur: money(req.body.sellPriceEur),
                costPriceEur: money(req.body.costPriceEur),
                stockQuantity,
                minStockQuantity: qty(req.body.minStockQuantity),
                active: req.body.active,
                notes: req.body.notes
            }
        });
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
            });
        }
        return updated;
    });
    await audit(creatorId, 'updated product', 'erp_product', id, decimalToNumber(oldProduct), decimalToNumber(product));
    res.json(decimalToNumber(product));
}
async function listErpSales(_req, res) {
    const sales = await prisma_1.prisma.erpSale.findMany({
        include: { product: true, createdBy: { select: { name: true, email: true } } },
        orderBy: { saleDate: 'desc' },
        take: 100
    });
    res.json(decimalToNumber(sales));
}
async function createErpSale(req, res) {
    const creatorId = userId(req);
    const product = await prisma_1.prisma.erpProduct.findUnique({ where: { id: req.body.productId } });
    if (!product)
        throw new AppError_1.AppError(404, 'Продуктът не е намерен.');
    const quantity = qty(req.body.quantity);
    const unitPrice = money(req.body.unitPriceEur ?? product.sellPriceEur);
    const total = money(quantity.mul(unitPrice));
    const costTotal = money(quantity.mul(product.costPriceEur));
    const profit = money(total.sub(costTotal));
    const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock);
    await assertStock(product.id, quantity.neg(), allowNegative);
    const sale = await prisma_1.prisma.$transaction(async (tx) => {
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
        });
        await tx.erpProduct.update({ where: { id: product.id }, data: { stockQuantity: { decrement: quantity } } });
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
        });
        return created;
    });
    await audit(creatorId, 'created sale', 'erp_sale', sale.id, undefined, decimalToNumber(sale));
    res.status(201).json(decimalToNumber(sale));
}
async function listInventoryMovements(_req, res) {
    const movements = await prisma_1.prisma.erpInventoryMovement.findMany({
        include: { product: true, createdBy: { select: { name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
        take: 200
    });
    res.json(decimalToNumber(movements));
}
async function listExpenses(_req, res) {
    const expenses = await prisma_1.prisma.erpExpense.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { expenseDate: 'desc' }, take: 200 });
    res.json(decimalToNumber(expenses));
}
async function createExpense(req, res) {
    const creatorId = userId(req);
    const amount = money(req.body.amountEur);
    const expense = await prisma_1.prisma.erpExpense.create({
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
    });
    await audit(creatorId, 'created expense', 'erp_expense', expense.id, undefined, decimalToNumber(expense));
    res.status(201).json(decimalToNumber(expense));
}
async function listWaxTransactions(_req, res) {
    const rows = await prisma_1.prisma.erpWaxTransaction.findMany({ include: { createdBy: { select: { name: true, email: true } } }, orderBy: { transactionDate: 'desc' }, take: 200 });
    res.json(decimalToNumber(rows));
}
async function createWaxTransaction(req, res) {
    const creatorId = userId(req);
    const waxReceivedKg = qty(req.body.waxReceivedKg);
    const foundationGivenKg = qty(req.body.foundationGivenKg);
    const waxValue = money(waxReceivedKg.mul(req.body.waxPricePerKgEur));
    const foundationValue = money(foundationGivenKg.mul(req.body.foundationPricePerKgEur));
    const extraPayment = money(req.body.extraPaymentEur || 0);
    const balance = money(waxValue.sub(foundationValue).sub(extraPayment));
    const foundationProductId = req.body.foundationProductId;
    const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock);
    if (foundationProductId && foundationGivenKg.gt(0)) {
        await assertStock(foundationProductId, foundationGivenKg.neg(), allowNegative);
    }
    const row = await prisma_1.prisma.$transaction(async (tx) => {
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
        });
        if (foundationProductId && foundationGivenKg.gt(0)) {
            await tx.erpProduct.update({ where: { id: foundationProductId }, data: { stockQuantity: { decrement: foundationGivenKg } } });
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
            });
        }
        return created;
    });
    await audit(creatorId, 'created wax transaction', 'erp_wax_transaction', row.id, undefined, decimalToNumber(row));
    res.status(201).json(decimalToNumber(row));
}
async function erpReports(req, res) {
    const range = reportRange(req);
    const [daily, monthly, salesByProduct, expensesByCategory, waxTransactions, inventoryMovements, lowStockProducts, salesAgg, expensesAgg] = await Promise.all([
        prisma_1.prisma.$queryRaw `
      SELECT date_trunc('day', "saleDate") AS day, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur
      FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1 ORDER BY 1 DESC
    `,
        prisma_1.prisma.$queryRaw `
      SELECT date_trunc('month', "saleDate") AS month, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur
      FROM "ErpSale" WHERE "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1 ORDER BY 1 DESC
    `,
        prisma_1.prisma.$queryRaw `
      SELECT p.id AS product_id, p.name AS product_name, sum(s.quantity) AS quantity, sum(s."totalEur") AS turnover_eur, sum(s."profitEur") AS profit_eur
      FROM "ErpSale" s JOIN "ErpProduct" p ON p.id = s."productId"
      WHERE s."saleDate" BETWEEN ${range.gte} AND ${range.lte}
      GROUP BY p.id, p.name ORDER BY turnover_eur DESC
    `,
        prisma_1.prisma.erpExpense.groupBy({ by: ['category'], where: { expenseDate: range }, _sum: { amountEur: true } }),
        prisma_1.prisma.erpWaxTransaction.findMany({ where: { transactionDate: range }, orderBy: { transactionDate: 'desc' } }),
        prisma_1.prisma.erpInventoryMovement.findMany({ where: { createdAt: range }, include: { product: true }, orderBy: { createdAt: 'desc' } }),
        prisma_1.prisma.erpProduct.findMany({ where: { active: true, stockQuantity: { lte: prisma_1.prisma.erpProduct.fields.minStockQuantity } }, orderBy: { stockQuantity: 'asc' } }),
        prisma_1.prisma.erpSale.aggregate({ where: { saleDate: range }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpExpense.aggregate({ where: { expenseDate: range }, _sum: { amountEur: true } })
    ]);
    const grossProfit = salesAgg._sum.profitEur || new client_1.Prisma.Decimal(0);
    const expenses = expensesAgg._sum.amountEur || new client_1.Prisma.Decimal(0);
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
    }));
}
async function exportReportCsv(req, res) {
    const range = reportRange(req);
    const sales = await prisma_1.prisma.erpSale.findMany({ where: { saleDate: range }, include: { product: true }, orderBy: { saleDate: 'asc' } });
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
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="sakimed-report.csv"');
    res.send(`\uFEFF${csv}`);
}
