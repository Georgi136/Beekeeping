"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erpMeta = erpMeta;
exports.erpDashboard = erpDashboard;
exports.listErpProducts = listErpProducts;
exports.createErpProduct = createErpProduct;
exports.updateErpProduct = updateErpProduct;
exports.previewProductImport = previewProductImport;
exports.importProducts = importProducts;
exports.listErpSales = listErpSales;
exports.listAllErpSalesLegacy = listAllErpSalesLegacy;
exports.createErpSale = createErpSale;
exports.updateErpSale = updateErpSale;
exports.deleteErpSale = deleteErpSale;
exports.listInventoryMovements = listInventoryMovements;
exports.listExpenses = listExpenses;
exports.createExpense = createExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense = deleteExpense;
exports.erpWaxSummary = erpWaxSummary;
exports.erpWaxSettings = erpWaxSettings;
exports.updateErpWaxSettings = updateErpWaxSettings;
exports.listWaxTransactions = listWaxTransactions;
exports.createWaxTransaction = createWaxTransaction;
exports.updateWaxTransaction = updateWaxTransaction;
exports.deleteWaxTransaction = deleteWaxTransaction;
exports.erpReports = erpReports;
exports.exportReportCsv = exportReportCsv;
const client_1 = require("@prisma/client");
const xlsx_1 = __importDefault(require("xlsx"));
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
function roundExchangeQuantity(value, mode) {
    const numeric = Number(value);
    switch (mode) {
        case 'ROUND':
            return qty(Math.round(numeric));
        case 'CEIL':
            return qty(Math.ceil(numeric));
        case 'NONE':
            return qty(value);
        case 'FLOOR':
        default:
            return qty(Math.floor(numeric));
    }
}
function toBgn(eur) {
    return money(new client_1.Prisma.Decimal(eur).mul(BGN_RATE));
}
async function getSetting(key, fallback) {
    const setting = await prisma_1.prisma.erpSetting.findUnique({ where: { key } });
    return setting?.value ?? fallback;
}
async function setSetting(key, value) {
    return prisma_1.prisma.erpSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value }
    });
}
async function waxDefaultBuyPrice() {
    return money(await getSetting('wax.defaultBuyPriceEur', '5'));
}
async function waxSummaryData() {
    const defaultBuyPrice = await waxDefaultBuyPrice();
    const where = { status: 'ACTIVE' };
    const [waxAgg, transactionCount] = await Promise.all([
        prisma_1.prisma.erpWaxTransaction.aggregate({
            where,
            _sum: {
                waxReceivedKg: true,
                waxValueEur: true,
                foundationGivenKg: true,
                foundationValueEur: true,
                extraPaymentEur: true,
                balanceEur: true
            }
        }),
        prisma_1.prisma.erpWaxTransaction.count({ where })
    ]);
    const waxStockKg = waxAgg._sum.waxReceivedKg || new client_1.Prisma.Decimal(0);
    return {
        defaultBuyPriceEur: defaultBuyPrice,
        waxStockKg,
        waxInventoryValueEur: money(waxStockKg.mul(defaultBuyPrice)),
        totalWaxBoughtValueEur: waxAgg._sum.waxValueEur || 0,
        totalFoundationGivenKg: waxAgg._sum.foundationGivenKg || 0,
        totalFoundationGivenValueEur: waxAgg._sum.foundationValueEur || 0,
        totalExtraPaymentEur: waxAgg._sum.extraPaymentEur || 0,
        balanceEur: waxAgg._sum.balanceEur || 0,
        transactionCount
    };
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
function pageParams(req) {
    const page = Math.max(Number(req.query.page || 1), 1);
    const pageSize = Math.min(Math.max(Number(req.query.pageSize || 50), 1), 200);
    return { page, pageSize, skip: (page - 1) * pageSize };
}
function paginated(items, total, page, pageSize) {
    return {
        items,
        pagination: {
            page,
            pageSize,
            total,
            totalPages: Math.max(Math.ceil(total / pageSize), 1)
        }
    };
}
function decimalToNumber(value) {
    if (value instanceof client_1.Prisma.Decimal)
        return Number(value);
    if (typeof value === 'bigint')
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
const productCategories = ['HONEY', 'BEE_PRODUCTS', 'BEEKEEPING_EQUIPMENT', 'WAX_FOUNDATIONS', 'PACKAGING', 'OTHER'];
const productUnits = ['PCS', 'KG', 'G', 'LITER', 'PACKAGE'];
function parseImportNumber(value, fallback = 0) {
    if (value === undefined || value === null || value === '')
        return fallback;
    const parsed = Number(String(value).replace(',', '.').trim());
    return Number.isFinite(parsed) ? parsed : Number.NaN;
}
function normalizeCategory(value) {
    const raw = String(value || '').trim().toUpperCase();
    const aliases = {
        'МЕД': 'HONEY',
        HONEY: 'HONEY',
        'ПЧЕЛНИ ПРОДУКТИ': 'BEE_PRODUCTS',
        BEE_PRODUCTS: 'BEE_PRODUCTS',
        'ПЧЕЛАРСКО ОБОРУДВАНЕ': 'BEEKEEPING_EQUIPMENT',
        BEEKEEPING_EQUIPMENT: 'BEEKEEPING_EQUIPMENT',
        'ОСНОВИ': 'WAX_FOUNDATIONS',
        'ВОСЪЧНИ ОСНОВИ': 'WAX_FOUNDATIONS',
        WAX_FOUNDATIONS: 'WAX_FOUNDATIONS',
        'ОПАКОВКИ': 'PACKAGING',
        PACKAGING: 'PACKAGING',
        OTHER: 'OTHER',
        'ДРУГО': 'OTHER'
    };
    return aliases[raw] || 'OTHER';
}
function normalizeUnit(value) {
    const raw = String(value || '').trim().toUpperCase();
    const aliases = {
        PCS: 'PCS',
        'БР': 'PCS',
        'БРОЙ': 'PCS',
        KG: 'KG',
        'КГ': 'KG',
        G: 'G',
        'Г': 'G',
        LITER: 'LITER',
        'Л': 'LITER',
        PACKAGE: 'PACKAGE',
        'ПАКЕТ': 'PACKAGE'
    };
    return aliases[raw] || 'PCS';
}
function parseProductImport(file) {
    if (!file)
        throw new AppError_1.AppError(400, 'Качете CSV или Excel файл.');
    const workbook = xlsx_1.default.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    if (!sheetName)
        throw new AppError_1.AppError(400, 'Файлът няма таблица за импорт.');
    const rows = xlsx_1.default.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: '' });
    if (!rows.length)
        return [];
    const header = rows[0].map((cell) => String(cell).trim().toLowerCase());
    const hasHeader = header.some((cell) => ['sku', 'ид', 'код', 'name', 'име', 'product', 'продукт'].includes(cell));
    const dataRows = hasHeader ? rows.slice(1) : rows;
    const headerIndex = (names, fallback) => {
        const index = header.findIndex((cell) => names.includes(cell));
        return index >= 0 ? index : fallback;
    };
    const indexes = {
        sku: headerIndex(['sku', 'ид', 'код'], 0),
        name: headerIndex(['name', 'име', 'product', 'продукт'], 1),
        category: headerIndex(['category', 'категория'], 2),
        unit: headerIndex(['unit', 'мярка'], 3),
        sell: headerIndex(['sellpriceeur', 'sell price eur', 'продажна цена', 'цена продажба'], 4),
        cost: headerIndex(['costpriceeur', 'cost price eur', 'доставна цена', 'цена доставка'], 5),
        stock: headerIndex(['stockquantity', 'stock', 'наличност', 'склад'], 6),
        minStock: headerIndex(['minstockquantity', 'min stock', 'минимум'], 7),
        notes: headerIndex(['notes', 'бележки'], 8)
    };
    return dataRows
        .filter((row) => row.some((cell) => String(cell || '').trim()))
        .map((row, index) => {
        const sellPriceEur = parseImportNumber(row[indexes.sell]);
        const costPriceEur = parseImportNumber(row[indexes.cost]);
        const stockQuantity = parseImportNumber(row[indexes.stock]);
        const minStockQuantity = parseImportNumber(row[indexes.minStock]);
        const item = {
            rowNumber: index + (hasHeader ? 2 : 1),
            sku: String(row[indexes.sku] || '').trim() || null,
            name: String(row[indexes.name] || '').trim(),
            category: normalizeCategory(row[indexes.category]),
            unit: normalizeUnit(row[indexes.unit]),
            sellPriceEur,
            costPriceEur,
            stockQuantity,
            minStockQuantity,
            notes: String(row[indexes.notes] || '').trim() || null,
            errors: []
        };
        if (!item.name)
            item.errors.push('Липсва име.');
        if (!Number.isFinite(item.sellPriceEur) || item.sellPriceEur < 0)
            item.errors.push('Невалидна продажна цена.');
        if (!Number.isFinite(item.costPriceEur) || item.costPriceEur < 0)
            item.errors.push('Невалидна доставна цена.');
        if (!Number.isFinite(item.stockQuantity) || item.stockQuantity < 0)
            item.errors.push('Невалидна наличност.');
        if (!Number.isFinite(item.minStockQuantity) || item.minStockQuantity < 0)
            item.errors.push('Невалиден минимум.');
        return item;
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
    const [todayAgg, monthAgg, lowStockProducts, latestSales, latestWaxTransactions, waxSummary] = await Promise.all([
        prisma_1.prisma.erpSale.aggregate({ where: { status: 'ACTIVE', saleDate: today }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpSale.aggregate({ where: { status: 'ACTIVE', saleDate: month }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpProduct.findMany({
            where: { active: true, stockQuantity: { lte: prisma_1.prisma.erpProduct.fields.minStockQuantity } },
            orderBy: { stockQuantity: 'asc' },
            take: 8
        }),
        prisma_1.prisma.erpSale.findMany({ where: { status: 'ACTIVE' }, include: { product: true, createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 }),
        prisma_1.prisma.erpWaxTransaction.findMany({ where: { status: 'ACTIVE' }, include: { foundationProduct: true, createdBy: { select: { name: true, email: true } } }, orderBy: { createdAt: 'desc' }, take: 8 }),
        waxSummaryData()
    ]);
    res.json(decimalToNumber({
        todayTurnoverEur: todayAgg._sum.totalEur || 0,
        todayProfitEur: todayAgg._sum.profitEur || 0,
        monthlyTurnoverEur: monthAgg._sum.totalEur || 0,
        monthlyProfitEur: monthAgg._sum.profitEur || 0,
        lowStockProducts,
        latestSales,
        latestWaxTransactions,
        waxStockKg: waxSummary.waxStockKg,
        waxInventoryValueEur: waxSummary.waxInventoryValueEur
    }));
}
async function listErpProducts(_req, res) {
    const products = await prisma_1.prisma.erpProduct.findMany({ orderBy: [{ active: 'desc' }, { name: 'asc' }] });
    const enriched = products.map((product) => ({
        ...product,
        inventoryValueEur: money(product.stockQuantity.mul(product.costPriceEur)),
        inventorySellValueEur: money(product.stockQuantity.mul(product.sellPriceEur)),
        unitProfitEur: money(product.sellPriceEur.sub(product.costPriceEur)),
        soldProfitEur: money(product.totalSoldQuantity.mul(product.sellPriceEur.sub(product.costPriceEur))),
        stockStatus: product.stockQuantity.lte(product.minStockQuantity) ? 'LOW' : 'OK'
    }));
    res.json(decimalToNumber(enriched));
}
async function createErpProduct(req, res) {
    const creatorId = userId(req);
    const product = await prisma_1.prisma.$transaction(async (tx) => {
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
                waxExchangeEnabled: req.body.category === 'WAX_FOUNDATIONS' ? Boolean(req.body.waxExchangeEnabled) : false,
                foundationUnitsPerWaxKg: req.body.category === 'WAX_FOUNDATIONS' && req.body.foundationUnitsPerWaxKg !== null && req.body.foundationUnitsPerWaxKg !== undefined ? qty(req.body.foundationUnitsPerWaxKg) : null,
                exchangeRoundingMode: req.body.exchangeRoundingMode || 'FLOOR',
                notes: req.body.notes
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
                sku: req.body.sku || null,
                category: req.body.category,
                unit: req.body.unit,
                sellPriceEur: money(req.body.sellPriceEur),
                costPriceEur: money(req.body.costPriceEur),
                stockQuantity,
                minStockQuantity: qty(req.body.minStockQuantity),
                totalSoldQuantity: qty(req.body.totalSoldQuantity),
                active: req.body.active,
                waxExchangeEnabled: req.body.category === 'WAX_FOUNDATIONS' ? Boolean(req.body.waxExchangeEnabled) : false,
                foundationUnitsPerWaxKg: req.body.category === 'WAX_FOUNDATIONS' && req.body.foundationUnitsPerWaxKg !== null && req.body.foundationUnitsPerWaxKg !== undefined ? qty(req.body.foundationUnitsPerWaxKg) : null,
                exchangeRoundingMode: req.body.exchangeRoundingMode || 'FLOOR',
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
async function previewProductImport(req, res) {
    const rows = parseProductImport(req.file);
    res.json({
        rows: rows.slice(0, 100),
        totalRows: rows.length,
        validRows: rows.filter((row) => row.errors.length === 0).length,
        invalidRows: rows.filter((row) => row.errors.length > 0).length
    });
}
async function importProducts(req, res) {
    const creatorId = userId(req);
    const rows = parseProductImport(req.file);
    const invalid = rows.filter((row) => row.errors.length > 0);
    if (invalid.length) {
        throw new AppError_1.AppError(400, `Има ${invalid.length} невалидни реда. Поправете файла и опитайте пак.`);
    }
    let created = 0;
    let updated = 0;
    const products = [];
    for (const row of rows) {
        const product = await prisma_1.prisma.$transaction(async (tx) => {
            const existing = row.sku
                ? await tx.erpProduct.findUnique({ where: { sku: row.sku } })
                : await tx.erpProduct.findFirst({ where: { name: row.name } });
            if (!existing) {
                const newProduct = await tx.erpProduct.create({
                    data: {
                        sku: row.sku,
                        name: row.name,
                        category: row.category,
                        unit: row.unit,
                        sellPriceEur: money(row.sellPriceEur),
                        costPriceEur: money(row.costPriceEur),
                        stockQuantity: qty(row.stockQuantity),
                        minStockQuantity: qty(row.minStockQuantity),
                        notes: row.notes
                    }
                });
                if (newProduct.stockQuantity.gt(0)) {
                    await tx.erpInventoryMovement.create({
                        data: {
                            productId: newProduct.id,
                            movementType: 'DELIVERY',
                            quantityChange: newProduct.stockQuantity,
                            referenceType: 'erp_product_import',
                            referenceId: newProduct.id,
                            notes: 'Начална наличност от импорт',
                            createdById: creatorId
                        }
                    });
                }
                created += 1;
                return { oldProduct: undefined, product: newProduct, action: 'created product import' };
            }
            const nextStock = qty(row.stockQuantity);
            const stockDelta = nextStock.sub(existing.stockQuantity);
            const updatedProduct = await tx.erpProduct.update({
                where: { id: existing.id },
                data: {
                    sku: row.sku,
                    name: row.name,
                    category: row.category,
                    unit: row.unit,
                    sellPriceEur: money(row.sellPriceEur),
                    costPriceEur: money(row.costPriceEur),
                    stockQuantity: nextStock,
                    minStockQuantity: qty(row.minStockQuantity),
                    notes: row.notes
                }
            });
            if (!stockDelta.eq(0)) {
                await tx.erpInventoryMovement.create({
                    data: {
                        productId: updatedProduct.id,
                        movementType: 'CORRECTION',
                        quantityChange: stockDelta,
                        referenceType: 'erp_product_import',
                        referenceId: updatedProduct.id,
                        notes: 'Корекция на наличност от импорт',
                        createdById: creatorId
                    }
                });
            }
            updated += 1;
            return { oldProduct: existing, product: updatedProduct, action: 'updated product import' };
        });
        await audit(creatorId, product.action, 'erp_product', product.product.id, decimalToNumber(product.oldProduct), decimalToNumber(product.product));
        products.push(product.product);
    }
    res.json(decimalToNumber({ created, updated, products }));
}
async function listErpSales(req, res) {
    const { page, pageSize, skip } = pageParams(req);
    const where = req.query.includeCanceled === 'true' ? {} : { status: 'ACTIVE' };
    const [items, total] = await Promise.all([
        prisma_1.prisma.erpSale.findMany({
            where,
            include: { product: true, createdBy: { select: { name: true, email: true } } },
            orderBy: { saleDate: 'desc' },
            skip,
            take: pageSize
        }),
        prisma_1.prisma.erpSale.count({ where })
    ]);
    res.json(decimalToNumber(paginated(items, total, page, pageSize)));
}
async function listAllErpSalesLegacy(_req, res) {
    const sales = await prisma_1.prisma.erpSale.findMany({
        where: { status: 'ACTIVE' },
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
        await tx.erpProduct.update({ where: { id: product.id }, data: { totalSoldQuantity: { increment: quantity } } });
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
async function updateErpSale(req, res) {
    const creatorId = userId(req);
    const saleId = Number(req.params.id);
    const oldSale = await prisma_1.prisma.erpSale.findUnique({ where: { id: saleId }, include: { product: true } });
    if (!oldSale)
        throw new AppError_1.AppError(404, 'Продажбата не е намерена.');
    if (oldSale.status === 'CANCELED')
        throw new AppError_1.AppError(400, 'Отказана продажба не може да се редактира.');
    const product = await prisma_1.prisma.erpProduct.findUnique({ where: { id: req.body.productId } });
    if (!product)
        throw new AppError_1.AppError(404, 'Продуктът не е намерен.');
    const quantity = qty(req.body.quantity);
    const unitPrice = money(req.body.unitPriceEur ?? product.sellPriceEur);
    const total = money(quantity.mul(unitPrice));
    const costTotal = money(quantity.mul(product.costPriceEur));
    const profit = money(total.sub(costTotal));
    const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock);
    if (oldSale.productId === product.id) {
        const stockDelta = oldSale.quantity.sub(quantity);
        await assertStock(product.id, stockDelta, allowNegative);
    }
    else {
        await assertStock(product.id, quantity.neg(), allowNegative);
    }
    const sale = await prisma_1.prisma.$transaction(async (tx) => {
        if (oldSale.productId === product.id) {
            const stockDelta = oldSale.quantity.sub(quantity);
            const soldDelta = quantity.sub(oldSale.quantity);
            if (!stockDelta.eq(0)) {
                await tx.erpProduct.update({
                    where: { id: product.id },
                    data: {
                        stockQuantity: { increment: stockDelta },
                        totalSoldQuantity: { increment: soldDelta }
                    }
                });
                await tx.erpInventoryMovement.create({
                    data: {
                        productId: product.id,
                        movementType: 'CORRECTION',
                        quantityChange: stockDelta,
                        referenceType: 'erp_sale',
                        referenceId: saleId,
                        notes: 'Корекция от редакция на продажба',
                        createdById: creatorId
                    }
                });
            }
        }
        else {
            await tx.erpProduct.update({
                where: { id: oldSale.productId },
                data: {
                    stockQuantity: { increment: oldSale.quantity },
                    totalSoldQuantity: { decrement: oldSale.quantity }
                }
            });
            await tx.erpInventoryMovement.create({
                data: {
                    productId: oldSale.productId,
                    movementType: 'RETURN',
                    quantityChange: oldSale.quantity,
                    referenceType: 'erp_sale',
                    referenceId: saleId,
                    notes: 'Връщане от смяна на продукт в продажба',
                    createdById: creatorId
                }
            });
            await tx.erpProduct.update({
                where: { id: product.id },
                data: {
                    stockQuantity: { decrement: quantity },
                    totalSoldQuantity: { increment: quantity }
                }
            });
            await tx.erpInventoryMovement.create({
                data: {
                    productId: product.id,
                    movementType: 'SALE',
                    quantityChange: quantity.neg(),
                    referenceType: 'erp_sale',
                    referenceId: saleId,
                    notes: 'Продажба след редакция',
                    createdById: creatorId
                }
            });
        }
        return tx.erpSale.update({
            where: { id: saleId },
            data: {
                saleDate: req.body.saleDate || oldSale.saleDate,
                productId: product.id,
                quantity,
                unitPriceEur: unitPrice,
                totalEur: total,
                totalBgn: toBgn(total),
                costTotalEur: costTotal,
                profitEur: profit,
                paymentMethod: req.body.paymentMethod,
                notes: req.body.notes
            },
            include: { product: true, createdBy: { select: { name: true, email: true } } }
        });
    });
    await audit(creatorId, 'edited sale', 'erp_sale', saleId, decimalToNumber(oldSale), decimalToNumber(sale));
    res.json(decimalToNumber(sale));
}
async function deleteErpSale(req, res) {
    const creatorId = userId(req);
    const saleId = Number(req.params.id);
    const sale = await prisma_1.prisma.erpSale.findUnique({ where: { id: saleId }, include: { product: true } });
    if (!sale)
        throw new AppError_1.AppError(404, 'Продажбата не е намерена.');
    if (sale.status === 'CANCELED') {
        res.status(204).send();
        return;
    }
    const canceled = await prisma_1.prisma.$transaction(async (tx) => {
        await tx.erpProduct.update({
            where: { id: sale.productId },
            data: {
                stockQuantity: { increment: sale.quantity },
                totalSoldQuantity: { decrement: sale.quantity }
            }
        });
        await tx.erpInventoryMovement.create({
            data: {
                productId: sale.productId,
                movementType: 'RETURN',
                quantityChange: sale.quantity,
                referenceType: 'erp_sale',
                referenceId: sale.id,
                notes: 'Връщане в склада от изтрита продажба',
                createdById: creatorId
            }
        });
        return tx.erpSale.update({
            where: { id: saleId },
            data: {
                status: 'CANCELED',
                canceledAt: new Date(),
                canceledById: creatorId
            }
        });
    });
    await audit(creatorId, 'canceled sale', 'erp_sale', saleId, decimalToNumber(sale), decimalToNumber(canceled));
    res.status(204).send();
}
async function listInventoryMovements(req, res) {
    const { page, pageSize, skip } = pageParams(req);
    const [movements, total] = await Promise.all([
        prisma_1.prisma.erpInventoryMovement.findMany({
            include: { product: true, createdBy: { select: { name: true, email: true } } },
            orderBy: { createdAt: 'desc' },
            skip,
            take: pageSize
        }),
        prisma_1.prisma.erpInventoryMovement.count()
    ]);
    res.json(decimalToNumber(paginated(movements, total, page, pageSize)));
}
async function listExpenses(req, res) {
    const { page, pageSize, skip } = pageParams(req);
    const where = req.query.includeCanceled === 'true' ? {} : { status: 'ACTIVE' };
    const [expenses, total] = await Promise.all([
        prisma_1.prisma.erpExpense.findMany({ where, include: { createdBy: { select: { name: true, email: true } } }, orderBy: { expenseDate: 'desc' }, skip, take: pageSize }),
        prisma_1.prisma.erpExpense.count({ where })
    ]);
    res.json(decimalToNumber(paginated(expenses, total, page, pageSize)));
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
async function updateExpense(req, res) {
    const creatorId = userId(req);
    const expenseId = Number(req.params.id);
    const existing = await prisma_1.prisma.erpExpense.findUnique({ where: { id: expenseId } });
    if (!existing)
        throw new AppError_1.AppError(404, 'Разходът не е намерен.');
    if (existing.status === 'CANCELED')
        throw new AppError_1.AppError(400, 'Отказан разход не може да се редактира.');
    const amount = money(req.body.amountEur);
    const updated = await prisma_1.prisma.erpExpense.update({
        where: { id: expenseId },
        data: {
            expenseDate: req.body.expenseDate || existing.expenseDate,
            category: req.body.category,
            amountEur: amount,
            amountBgn: toBgn(amount),
            paymentMethod: req.body.paymentMethod,
            supplier: req.body.supplier,
            notes: req.body.notes
        }
    });
    await audit(creatorId, 'updated expense', 'erp_expense', expenseId, decimalToNumber(existing), decimalToNumber(updated));
    res.json(decimalToNumber(updated));
}
async function deleteExpense(req, res) {
    const creatorId = userId(req);
    const expenseId = Number(req.params.id);
    const existing = await prisma_1.prisma.erpExpense.findUnique({ where: { id: expenseId } });
    if (!existing)
        throw new AppError_1.AppError(404, 'Разходът не е намерен.');
    if (existing.status === 'CANCELED') {
        res.status(204).send();
        return;
    }
    const canceled = await prisma_1.prisma.erpExpense.update({
        where: { id: expenseId },
        data: { status: 'CANCELED', canceledAt: new Date(), canceledById: creatorId }
    });
    await audit(creatorId, 'canceled expense', 'erp_expense', expenseId, decimalToNumber(existing), decimalToNumber(canceled));
    res.status(204).send();
}
async function erpWaxSummary(_req, res) {
    res.json(decimalToNumber(await waxSummaryData()));
}
async function erpWaxSettings(_req, res) {
    res.json(decimalToNumber({
        defaultBuyPriceEur: await waxDefaultBuyPrice()
    }));
}
async function updateErpWaxSettings(req, res) {
    const creatorId = userId(req);
    const defaultBuyPrice = money(req.body.defaultBuyPriceEur);
    const updated = await setSetting('wax.defaultBuyPriceEur', String(defaultBuyPrice));
    await audit(creatorId, 'updated wax settings', 'erp_setting', updated.key, undefined, decimalToNumber(updated));
    res.json(decimalToNumber({ defaultBuyPriceEur: defaultBuyPrice }));
}
async function listWaxTransactions(req, res) {
    const { page, pageSize, skip } = pageParams(req);
    const where = req.query.includeCanceled === 'true' ? {} : { status: 'ACTIVE' };
    const [rows, total] = await Promise.all([
        prisma_1.prisma.erpWaxTransaction.findMany({ where, include: { foundationProduct: true, createdBy: { select: { name: true, email: true } } }, orderBy: { transactionDate: 'desc' }, skip, take: pageSize }),
        prisma_1.prisma.erpWaxTransaction.count({ where })
    ]);
    res.json(decimalToNumber(paginated(rows, total, page, pageSize)));
}
async function createWaxTransaction(req, res) {
    const creatorId = userId(req);
    const transactionType = req.body.transactionType || 'BUY';
    const waxReceivedKg = qty(req.body.waxReceivedKg);
    const foundationGivenKg = transactionType === 'SWAP' ? qty(req.body.foundationGivenKg) : qty(0);
    const waxValue = money(waxReceivedKg.mul(req.body.waxPricePerKgEur));
    const foundationPricePerKg = transactionType === 'SWAP' ? money(req.body.foundationPricePerKgEur) : money(0);
    const foundationValue = money(foundationGivenKg.mul(foundationPricePerKg));
    const extraPayment = transactionType === 'SWAP' ? money(req.body.extraPaymentEur || 0) : money(0);
    const balance = money(waxValue.add(extraPayment).sub(foundationValue));
    const foundationProductId = transactionType === 'SWAP' && req.body.foundationProductId ? Number(req.body.foundationProductId) : null;
    const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock);
    const foundationProduct = foundationProductId ? await prisma_1.prisma.erpProduct.findUnique({ where: { id: foundationProductId } }) : null;
    const ratioUsed = transactionType === 'SWAP' && foundationProduct?.foundationUnitsPerWaxKg ? qty(foundationProduct.foundationUnitsPerWaxKg) : null;
    const roundingModeUsed = transactionType === 'SWAP' && foundationProduct ? foundationProduct.exchangeRoundingMode : null;
    const suggestedFoundationGivenKg = ratioUsed ? roundExchangeQuantity(waxReceivedKg.mul(ratioUsed), roundingModeUsed) : null;
    if (transactionType === 'SWAP' && foundationGivenKg.gt(0) && !foundationProductId) {
        throw new AppError_1.AppError(400, 'РР·Р±РµСЂРµС‚Рµ РІРѕСЃСЉС‡РЅРё РѕСЃРЅРѕРІРё РѕС‚ СЃРєР»Р°РґР°.');
    }
    if (transactionType === 'SWAP') {
        if (!foundationProduct)
            throw new AppError_1.AppError(400, 'Изберете валидни восъчни основи.');
        if (!foundationProduct.active || foundationProduct.category !== 'WAX_FOUNDATIONS' || !foundationProduct.waxExchangeEnabled || !foundationProduct.foundationUnitsPerWaxKg) {
            throw new AppError_1.AppError(400, 'Избраните основи не са настроени за размяна на восък.');
        }
    }
    if (foundationProductId && foundationGivenKg.gt(0)) {
        await assertStock(foundationProductId, foundationGivenKg.neg(), allowNegative);
    }
    const row = await prisma_1.prisma.$transaction(async (tx) => {
        const created = await tx.erpWaxTransaction.create({
            data: {
                transactionType,
                transactionDate: req.body.transactionDate || new Date(),
                customerName: req.body.customerName,
                customerPhone: req.body.customerPhone,
                waxReceivedKg,
                waxPricePerKgEur: money(req.body.waxPricePerKgEur),
                waxValueEur: waxValue,
                foundationGivenKg,
                foundationPricePerKgEur: foundationPricePerKg,
                foundationValueEur: foundationValue,
                suggestedFoundationGivenKg,
                foundationUnitsPerWaxKgUsed: ratioUsed,
                exchangeRoundingModeUsed: roundingModeUsed,
                extraPaymentEur: extraPayment,
                balanceEur: balance,
                foundationProductId,
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
        if (transactionType === 'BUY' && req.body.createExpense && waxValue.gt(0)) {
            const expense = await tx.erpExpense.create({
                data: {
                    expenseDate: req.body.transactionDate || new Date(),
                    category: 'MATERIALS',
                    amountEur: waxValue,
                    amountBgn: toBgn(waxValue),
                    paymentMethod: 'CASH',
                    supplier: req.body.customerName,
                    notes: `Покупка восък #${created.id}`,
                    createdById: creatorId
                }
            });
            await tx.erpAuditLog.create({
                data: {
                    userId: creatorId,
                    action: 'created expense from wax purchase',
                    entityType: 'erp_expense',
                    entityId: String(expense.id),
                    oldValueJson: client_1.Prisma.JsonNull,
                    newValueJson: decimalToNumber(expense)
                }
            });
        }
        return created;
    });
    await audit(creatorId, 'created wax transaction', 'erp_wax_transaction', row.id, undefined, decimalToNumber(row));
    res.status(201).json(decimalToNumber(row));
}
async function updateWaxTransaction(req, res) {
    const creatorId = userId(req);
    const transactionId = Number(req.params.id);
    const existing = await prisma_1.prisma.erpWaxTransaction.findUnique({ where: { id: transactionId } });
    if (!existing)
        throw new AppError_1.AppError(404, 'Сделката не е намерена.');
    if (existing.status === 'CANCELED')
        throw new AppError_1.AppError(400, 'Отказана сделка с восък не може да се редактира.');
    const transactionType = req.body.transactionType || 'BUY';
    const waxReceivedKg = qty(req.body.waxReceivedKg);
    const foundationGivenKg = transactionType === 'SWAP' ? qty(req.body.foundationGivenKg) : qty(0);
    const waxValue = money(waxReceivedKg.mul(req.body.waxPricePerKgEur));
    const foundationPricePerKg = transactionType === 'SWAP' ? money(req.body.foundationPricePerKgEur) : money(0);
    const foundationValue = money(foundationGivenKg.mul(foundationPricePerKg));
    const extraPayment = transactionType === 'SWAP' ? money(req.body.extraPaymentEur || 0) : money(0);
    const balance = money(waxValue.add(extraPayment).sub(foundationValue));
    const foundationProductId = transactionType === 'SWAP' && req.body.foundationProductId ? Number(req.body.foundationProductId) : null;
    const allowNegative = role(req) === 'ADMIN' && Boolean(req.body.allowNegativeStock);
    const foundationProduct = foundationProductId ? await prisma_1.prisma.erpProduct.findUnique({ where: { id: foundationProductId } }) : null;
    const ratioUsed = transactionType === 'SWAP' && foundationProduct?.foundationUnitsPerWaxKg ? qty(foundationProduct.foundationUnitsPerWaxKg) : null;
    const roundingModeUsed = transactionType === 'SWAP' && foundationProduct ? foundationProduct.exchangeRoundingMode : null;
    const suggestedFoundationGivenKg = ratioUsed ? roundExchangeQuantity(waxReceivedKg.mul(ratioUsed), roundingModeUsed) : null;
    if (transactionType === 'SWAP' && foundationGivenKg.gt(0) && !foundationProductId) {
        throw new AppError_1.AppError(400, 'РР·Р±РµСЂРµС‚Рµ РІРѕСЃСЉС‡РЅРё РѕСЃРЅРѕРІРё РѕС‚ СЃРєР»Р°РґР°.');
    }
    if (transactionType === 'SWAP') {
        if (!foundationProduct)
            throw new AppError_1.AppError(400, 'Изберете валидни восъчни основи.');
        if (!foundationProduct.active || foundationProduct.category !== 'WAX_FOUNDATIONS' || !foundationProduct.waxExchangeEnabled || !foundationProduct.foundationUnitsPerWaxKg) {
            throw new AppError_1.AppError(400, 'Избраните основи не са настроени за размяна на восък.');
        }
    }
    if (foundationProductId && foundationGivenKg.gt(0)) {
        if (foundationProductId === existing.foundationProductId) {
            const delta = foundationGivenKg.sub(existing.foundationGivenKg);
            if (delta.gt(0)) {
                await assertStock(foundationProductId, delta.neg(), allowNegative);
            }
        }
        else {
            await assertStock(foundationProductId, foundationGivenKg.neg(), allowNegative);
        }
    }
    const row = await prisma_1.prisma.$transaction(async (tx) => {
        if (existing.foundationProductId && existing.foundationGivenKg.gt(0)) {
            await tx.erpProduct.update({
                where: { id: existing.foundationProductId },
                data: { stockQuantity: { increment: existing.foundationGivenKg } }
            });
        }
        if (foundationProductId && foundationGivenKg.gt(0)) {
            await tx.erpProduct.update({
                where: { id: foundationProductId },
                data: { stockQuantity: { decrement: foundationGivenKg } }
            });
        }
        if (existing.foundationProductId && existing.foundationGivenKg.gt(0)) {
            await tx.erpInventoryMovement.create({
                data: {
                    productId: existing.foundationProductId,
                    movementType: 'RETURN',
                    quantityChange: existing.foundationGivenKg,
                    referenceType: 'erp_wax_transaction',
                    referenceId: transactionId,
                    notes: 'Върнати основи при редакция на сделка с восък',
                    createdById: creatorId
                }
            });
        }
        if (foundationProductId && foundationGivenKg.gt(0)) {
            await tx.erpInventoryMovement.create({
                data: {
                    productId: foundationProductId,
                    movementType: 'WAX_EXCHANGE',
                    quantityChange: foundationGivenKg.neg(),
                    referenceType: 'erp_wax_transaction',
                    referenceId: transactionId,
                    notes: req.body.notes,
                    createdById: creatorId
                }
            });
        }
        const updated = await tx.erpWaxTransaction.update({
            where: { id: transactionId },
            data: {
                transactionType,
                transactionDate: req.body.transactionDate || existing.transactionDate,
                customerName: req.body.customerName,
                customerPhone: req.body.customerPhone,
                waxReceivedKg,
                waxPricePerKgEur: money(req.body.waxPricePerKgEur),
                waxValueEur: waxValue,
                foundationGivenKg,
                foundationPricePerKgEur: foundationPricePerKg,
                foundationValueEur: foundationValue,
                suggestedFoundationGivenKg,
                foundationUnitsPerWaxKgUsed: ratioUsed,
                exchangeRoundingModeUsed: roundingModeUsed,
                extraPaymentEur: extraPayment,
                balanceEur: balance,
                foundationProductId,
                notes: req.body.notes
            }
        });
        return updated;
    });
    await audit(creatorId, 'updated wax transaction', 'erp_wax_transaction', transactionId, decimalToNumber(existing), decimalToNumber(row));
    res.json(decimalToNumber(row));
}
async function deleteWaxTransaction(req, res) {
    const creatorId = userId(req);
    const transactionId = Number(req.params.id);
    const existing = await prisma_1.prisma.erpWaxTransaction.findUnique({ where: { id: transactionId } });
    if (!existing)
        throw new AppError_1.AppError(404, 'Сделката не е намерена.');
    if (existing.status === 'CANCELED') {
        res.status(204).send();
        return;
    }
    const canceled = await prisma_1.prisma.$transaction(async (tx) => {
        if (existing.foundationProductId && existing.foundationGivenKg.gt(0)) {
            await tx.erpProduct.update({
                where: { id: existing.foundationProductId },
                data: { stockQuantity: { increment: existing.foundationGivenKg } }
            });
            await tx.erpInventoryMovement.create({
                data: {
                    productId: existing.foundationProductId,
                    movementType: 'RETURN',
                    quantityChange: existing.foundationGivenKg,
                    referenceType: 'erp_wax_transaction',
                    referenceId: transactionId,
                    notes: 'Върнати основи при отказана сделка с восък',
                    createdById: creatorId
                }
            });
        }
        return tx.erpWaxTransaction.update({
            where: { id: transactionId },
            data: { status: 'CANCELED', canceledAt: new Date(), canceledById: creatorId }
        });
    });
    await audit(creatorId, 'canceled wax transaction', 'erp_wax_transaction', transactionId, decimalToNumber(existing), decimalToNumber(canceled));
    res.status(204).send();
}
async function erpReports(req, res) {
    const range = reportRange(req);
    const [daily, monthly, salesByProduct, expensesByCategory, waxTransactions, inventoryMovements, lowStockProducts, salesAgg, expensesAgg] = await Promise.all([
        prisma_1.prisma.$queryRaw `
      SELECT
        days.day,
        coalesce(s.turnover_eur, 0) AS turnover_eur,
        coalesce(s.profit_eur, 0) AS profit_eur,
        coalesce(s.sold_quantity, 0) AS sold_quantity,
        coalesce(s.sold_lines, 0) AS sold_lines,
        coalesce(e.expenses_eur, 0) AS expenses_eur
      FROM (
        SELECT date_trunc('day', "saleDate") AS day FROM "ErpSale" WHERE "status" = 'ACTIVE' AND "saleDate" BETWEEN ${range.gte} AND ${range.lte}
        UNION
        SELECT date_trunc('day', "expenseDate") AS day FROM "ErpExpense" WHERE "status" = 'ACTIVE' AND "expenseDate" BETWEEN ${range.gte} AND ${range.lte}
      ) days
      LEFT JOIN (
        SELECT date_trunc('day', "saleDate") AS day, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur, sum(quantity) AS sold_quantity, count(*) AS sold_lines
        FROM "ErpSale" WHERE "status" = 'ACTIVE' AND "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) s ON s.day = days.day
      LEFT JOIN (
        SELECT date_trunc('day', "expenseDate") AS day, sum("amountEur") AS expenses_eur
        FROM "ErpExpense" WHERE "status" = 'ACTIVE' AND "expenseDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) e ON e.day = days.day
      ORDER BY days.day DESC
    `,
        prisma_1.prisma.$queryRaw `
      SELECT
        months.month,
        coalesce(s.turnover_eur, 0) AS turnover_eur,
        coalesce(s.profit_eur, 0) AS profit_eur,
        coalesce(s.sold_quantity, 0) AS sold_quantity,
        coalesce(s.sold_lines, 0) AS sold_lines,
        coalesce(e.expenses_eur, 0) AS expenses_eur
      FROM (
        SELECT date_trunc('month', "saleDate") AS month FROM "ErpSale" WHERE "status" = 'ACTIVE' AND "saleDate" BETWEEN ${range.gte} AND ${range.lte}
        UNION
        SELECT date_trunc('month', "expenseDate") AS month FROM "ErpExpense" WHERE "status" = 'ACTIVE' AND "expenseDate" BETWEEN ${range.gte} AND ${range.lte}
      ) months
      LEFT JOIN (
        SELECT date_trunc('month', "saleDate") AS month, sum("totalEur") AS turnover_eur, sum("profitEur") AS profit_eur, sum(quantity) AS sold_quantity, count(*) AS sold_lines
        FROM "ErpSale" WHERE "status" = 'ACTIVE' AND "saleDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) s ON s.month = months.month
      LEFT JOIN (
        SELECT date_trunc('month', "expenseDate") AS month, sum("amountEur") AS expenses_eur
        FROM "ErpExpense" WHERE "status" = 'ACTIVE' AND "expenseDate" BETWEEN ${range.gte} AND ${range.lte} GROUP BY 1
      ) e ON e.month = months.month
      ORDER BY months.month DESC
    `,
        prisma_1.prisma.$queryRaw `
      SELECT p.id AS product_id, p.name AS product_name, sum(s.quantity) AS quantity, sum(s."totalEur") AS turnover_eur, sum(s."profitEur") AS profit_eur
      FROM "ErpSale" s JOIN "ErpProduct" p ON p.id = s."productId"
      WHERE s."status" = 'ACTIVE' AND s."saleDate" BETWEEN ${range.gte} AND ${range.lte}
      GROUP BY p.id, p.name ORDER BY turnover_eur DESC
    `,
        prisma_1.prisma.erpExpense.groupBy({ by: ['category'], where: { status: 'ACTIVE', expenseDate: range }, _sum: { amountEur: true } }),
        prisma_1.prisma.erpWaxTransaction.findMany({ where: { status: 'ACTIVE', transactionDate: range }, orderBy: { transactionDate: 'desc' } }),
        prisma_1.prisma.erpInventoryMovement.findMany({ where: { createdAt: range }, include: { product: true }, orderBy: { createdAt: 'desc' } }),
        prisma_1.prisma.erpProduct.findMany({ where: { active: true, stockQuantity: { lte: prisma_1.prisma.erpProduct.fields.minStockQuantity } }, orderBy: { stockQuantity: 'asc' } }),
        prisma_1.prisma.erpSale.aggregate({ where: { status: 'ACTIVE', saleDate: range }, _sum: { totalEur: true, profitEur: true } }),
        prisma_1.prisma.erpExpense.aggregate({ where: { status: 'ACTIVE', expenseDate: range }, _sum: { amountEur: true } })
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
    const sales = await prisma_1.prisma.erpSale.findMany({ where: { status: 'ACTIVE', saleDate: range }, include: { product: true }, orderBy: { saleDate: 'asc' } });
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
