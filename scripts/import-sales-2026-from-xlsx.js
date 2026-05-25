const fs = require('fs')
const path = require('path')
const XLSX = require('xlsx')
const { PrismaClient, Prisma } = require('../server/node_modules/@prisma/client')

const serverDir = path.resolve(__dirname, '..', 'server')
const envPath = path.join(serverDir, '.env')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const separator = trimmed.indexOf('=')
    if (separator === -1) continue
    const key = trimmed.slice(0, separator).trim()
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

const workbookPath = process.argv[2] || 'C:\\Users\\HP\\Downloads\\Пчеларски магазин.xlsx'
const prisma = new PrismaClient()
const rate = new Prisma.Decimal('1.95583')
const yearStart = new Date('2026-01-01T00:00:00')
const today = new Date()
today.setHours(23, 59, 59, 999)

function text(value) {
  return String(value || '').trim()
}

function key(value) {
  return text(value).toLowerCase().replace(/\s+/g, ' ')
}

function num(value) {
  const cleaned = String(value || '')
    .replace(/[€лв\s]/g, '')
    .replace(/,/g, '')
  const parsed = Number(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

function money(value) {
  return new Prisma.Decimal(value || 0).toDecimalPlaces(2)
}

function qty(value) {
  return new Prisma.Decimal(value || 0).toDecimalPlaces(3)
}

function parseDate(value) {
  if (value instanceof Date) return value
  const raw = text(value).replace(/,/g, '/')
  const parts = raw.split('/').map((part) => Number(part))
  if (parts.length >= 3) {
    const year = parts[2] < 100 ? 2000 + parts[2] : parts[2]
    return new Date(year, parts[0] - 1, parts[1])
  }
  return null
}

function categoryFor(name) {
  const lower = name.toLowerCase()
  if (lower.includes('мед')) return 'HONEY'
  if (lower.includes('прашец') || lower.includes('проп') || lower.includes('мехлем') || lower.includes('восък')) return 'BEE_PRODUCTS'
  if (lower.includes('основ')) return 'WAX_FOUNDATIONS'
  if (lower.includes('буркан') || lower.includes('торб') || lower.includes('диск')) return 'PACKAGING'
  return 'BEEKEEPING_EQUIPMENT'
}

function unitFor(name) {
  return name.toLowerCase().includes('восък') ? 'KG' : 'PCS'
}

function readStorageRows(workbook) {
  const sheet = workbook.Sheets['Склад']
  if (!sheet) return new Map()
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' }).slice(1)
  const storage = new Map()
  for (const row of rows) {
    const name = text(row[0])
    if (!name) continue
    const sellEur = num(row[6]) || Number(new Prisma.Decimal(num(row[2])).div(rate))
    const profitEur = num(row[7])
    storage.set(key(name), {
      sku: text(row[8]) || null,
      name,
      stockQuantity: qty(num(row[3])),
      sellPriceEur: money(sellEur),
      costPriceEur: money(Math.max(profitEur ? sellEur - profitEur : Number(new Prisma.Decimal(num(row[1])).div(rate)), 0)),
      category: categoryFor(name),
      unit: unitFor(name)
    })
  }
  return storage
}

async function main() {
  const workbook = XLSX.readFile(workbookPath, { cellDates: true })
  const salesSheet = workbook.Sheets['Продажби  2026']
  if (!salesSheet) throw new Error('Sheet "Продажби  2026" was not found.')

  const admin = await prisma.user.findUnique({ where: { email: process.env.ADMIN_EMAIL || 'admin@sakimed.com' } })
  if (!admin) throw new Error('Admin user not found. Run npm run db:seed first.')

  const storageRows = readStorageRows(workbook)
  const rawRows = XLSX.utils.sheet_to_json(salesSheet, { header: 1, raw: false, defval: '' }).slice(1)
  const rows = rawRows
    .map((row) => {
      const saleDate = parseDate(row[0])
      const productName = text(row[1])
      const quantity = qty(num(row[2]))
      const totalEur = money(num(row[3]))
      const profitEur = money(num(row[5]) || Number(new Prisma.Decimal(num(row[4])).div(rate)))
      return {
        saleDate,
        productName,
        productKey: key(productName),
        quantity,
        totalEur,
        totalBgn: money(num(row[6]) || Number(totalEur.mul(rate))),
        profitEur
      }
    })
    .filter((row) => row.saleDate && row.saleDate >= yearStart && row.saleDate <= today && row.productName && row.quantity.gt(0))

  const products = await prisma.erpProduct.findMany()
  const productsByName = new Map(products.map((product) => [key(product.name), product]))
  const productIds = new Map()

  for (const row of rows) {
    let product = productsByName.get(row.productKey)
    if (!product) {
      const storage = storageRows.get(row.productKey)
      const unitPrice = row.totalEur.div(row.quantity).toDecimalPlaces(2)
      const unitProfit = row.profitEur.div(row.quantity).toDecimalPlaces(2)
      product = await prisma.erpProduct.create({
        data: {
          sku: storage?.sku || null,
          name: row.productName,
          category: storage?.category || categoryFor(row.productName),
          unit: storage?.unit || unitFor(row.productName),
          sellPriceEur: storage?.sellPriceEur || unitPrice,
          costPriceEur: storage?.costPriceEur || money(unitPrice.sub(unitProfit)),
          stockQuantity: storage?.stockQuantity || new Prisma.Decimal(0),
          minStockQuantity: new Prisma.Decimal(0),
          totalSoldQuantity: new Prisma.Decimal(0),
          active: true,
          notes: 'Създадено при импорт на продажби 2026'
        }
      })
      productsByName.set(row.productKey, product)
    }
    productIds.set(row.productKey, product.id)
  }

  await prisma.$transaction(async (tx) => {
    const oldSales = await tx.erpSale.findMany({
      where: { saleDate: { gte: yearStart, lte: today } },
      select: { id: true }
    })
    const oldSaleIds = oldSales.map((sale) => sale.id)
    await tx.erpInventoryMovement.deleteMany({
      where: {
        OR: [
          { referenceType: 'xlsx_sales_opening' },
          { referenceType: 'erp_sale', referenceId: { in: oldSaleIds.length ? oldSaleIds : [-1] } }
        ]
      }
    })
    await tx.erpSale.deleteMany({ where: { saleDate: { gte: yearStart, lte: today } } })

    for (const [productKey, productId] of productIds) {
      const storage = storageRows.get(productKey)
      if (storage) {
        await tx.erpProduct.update({
          where: { id: productId },
          data: {
            stockQuantity: storage.stockQuantity,
            totalSoldQuantity: new Prisma.Decimal(0),
            sellPriceEur: storage.sellPriceEur,
            costPriceEur: storage.costPriceEur,
            category: storage.category,
            unit: storage.unit
          }
        })
      } else {
        await tx.erpProduct.update({
          where: { id: productId },
          data: { totalSoldQuantity: new Prisma.Decimal(0) }
        })
      }
    }

    const soldByProduct = new Map()
    for (const row of rows) {
      const productId = productIds.get(row.productKey)
      soldByProduct.set(productId, (soldByProduct.get(productId) || new Prisma.Decimal(0)).add(row.quantity))
    }

    for (const [productId, soldQuantity] of soldByProduct) {
      await tx.erpProduct.update({
        where: { id: productId },
        data: { stockQuantity: { increment: soldQuantity } }
      })
      await tx.erpInventoryMovement.create({
        data: {
          productId,
          movementType: 'DELIVERY',
          quantityChange: soldQuantity,
          referenceType: 'xlsx_sales_opening',
          referenceId: productId,
          notes: 'Начална наличност преди импорт на продажби 2026',
          createdById: admin.id
        }
      })
    }

    for (const row of rows) {
      const productId = productIds.get(row.productKey)
      const product = await tx.erpProduct.findUniqueOrThrow({ where: { id: productId } })
      const unitPriceEur = row.totalEur.div(row.quantity).toDecimalPlaces(2)
      const costTotalEur = row.totalEur.sub(row.profitEur).toDecimalPlaces(2)
      const sale = await tx.erpSale.create({
        data: {
          saleDate: row.saleDate,
          productId,
          quantity: row.quantity,
          unitPriceEur,
          totalEur: row.totalEur,
          totalBgn: row.totalBgn,
          costTotalEur,
          profitEur: row.profitEur,
          paymentMethod: 'CASH',
          notes: 'Импорт от Excel: Продажби 2026',
          createdById: admin.id
        }
      })
      await tx.erpProduct.update({
        where: { id: product.id },
        data: {
          stockQuantity: { decrement: row.quantity },
          totalSoldQuantity: { increment: row.quantity }
        }
      })
      await tx.erpInventoryMovement.create({
        data: {
          productId,
          movementType: 'SALE',
          quantityChange: row.quantity.neg(),
          referenceType: 'erp_sale',
          referenceId: sale.id,
          notes: 'Импорт от Excel: Продажби 2026',
          createdById: admin.id
        }
      })
    }
  }, { timeout: 30000 })

  console.log(`Imported ${rows.length} sales from ${workbookPath}`)
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })
