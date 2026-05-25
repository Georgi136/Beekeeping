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
const rate = new Prisma.Decimal('1.95583')
const prisma = new PrismaClient()

function text(value) {
  return String(value || '').trim()
}

function num(value) {
  const cleaned = String(value || '')
    .replace(/[€лв,\s]/g, '')
    .replace(',', '.')
  const parsed = Number(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

function money(value) {
  return new Prisma.Decimal(value || 0).toDecimalPlaces(2)
}

function qty(value) {
  return new Prisma.Decimal(value || 0).toDecimalPlaces(3)
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
  const lower = name.toLowerCase()
  if (lower.includes('восък')) return 'KG'
  return 'PCS'
}

async function main() {
  const workbook = XLSX.readFile(workbookPath, { cellDates: true })
  const sheet = workbook.Sheets['Склад']
  if (!sheet) throw new Error('Sheet "Склад" was not found.')

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' }).slice(1)
  const admin = await prisma.user.findUnique({ where: { email: process.env.ADMIN_EMAIL || 'admin@sakimed.com' } })
  if (!admin) throw new Error('Admin user not found. Run npm run db:seed first.')

  let imported = 0
  for (const row of rows) {
    const name = text(row[0])
    if (!name) continue

    const sku = text(row[8]) || null
    const costBgn = num(row[1])
    const sellBgn = num(row[2])
    const stockQuantity = qty(num(row[3]))
    const totalSoldQuantity = qty(num(row[5]))
    const sellEur = num(row[6]) || (sellBgn ? Number(new Prisma.Decimal(sellBgn).div(rate)) : 0)
    const profitEur = num(row[7])
    const costEur = profitEur ? sellEur - profitEur : (costBgn ? Number(new Prisma.Decimal(costBgn).div(rate)) : 0)

    const existing = sku
      ? await prisma.erpProduct.findUnique({ where: { sku } })
      : await prisma.erpProduct.findFirst({ where: { name } })

    const data = {
      sku,
      name,
      category: categoryFor(name),
      unit: unitFor(name),
      sellPriceEur: money(sellEur),
      costPriceEur: money(Math.max(costEur, 0)),
      stockQuantity,
      minStockQuantity: stockQuantity.gt(0) ? new Prisma.Decimal(1) : new Prisma.Decimal(0),
      totalSoldQuantity,
      active: true,
      notes: 'Импорт от Excel: Пчеларски магазин.xlsx'
    }

    if (existing) {
      const diff = stockQuantity.sub(existing.stockQuantity)
      await prisma.$transaction(async (tx) => {
        await tx.erpProduct.update({ where: { id: existing.id }, data })
        if (!diff.eq(0)) {
          await tx.erpInventoryMovement.create({
            data: {
              productId: existing.id,
              movementType: 'CORRECTION',
              quantityChange: diff,
              referenceType: 'xlsx_storage_import',
              referenceId: existing.id,
              notes: 'Корекция от Excel импорт',
              createdById: admin.id
            }
          })
        }
      })
    } else {
      await prisma.$transaction(async (tx) => {
        const created = await tx.erpProduct.create({ data })
        if (stockQuantity.gt(0)) {
          await tx.erpInventoryMovement.create({
            data: {
              productId: created.id,
              movementType: 'DELIVERY',
              quantityChange: stockQuantity,
              referenceType: 'xlsx_storage_import',
              referenceId: created.id,
              notes: 'Начална наличност от Excel импорт',
              createdById: admin.id
            }
          })
        }
      })
    }
    imported += 1
  }

  console.log(`Imported ${imported} storage rows from ${workbookPath}`)
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })
