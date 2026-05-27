-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'STAFF', 'ACCOUNTANT');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('PERCENTAGE', 'FIXED');

-- CreateEnum
CREATE TYPE "PageStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ErpProductCategory" AS ENUM ('HONEY', 'BEE_PRODUCTS', 'BEEKEEPING_EQUIPMENT', 'WAX_FOUNDATIONS', 'PACKAGING', 'OTHER');

-- CreateEnum
CREATE TYPE "ErpUnit" AS ENUM ('PCS', 'KG', 'G', 'LITER', 'PACKAGE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CARD', 'BANK', 'OTHER');

-- CreateEnum
CREATE TYPE "InventoryMovementType" AS ENUM ('SALE', 'DELIVERY', 'CORRECTION', 'WASTE', 'WAX_EXCHANGE', 'RETURN');

-- CreateEnum
CREATE TYPE "ExpenseCategory" AS ENUM ('RENT', 'ELECTRICITY', 'FUEL', 'MATERIALS', 'SALARIES', 'DELIVERY', 'ADVERTISING', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "ErpProductCategory" NOT NULL,
    "unit" "ErpUnit" NOT NULL,
    "sellPriceEur" DECIMAL(12,2) NOT NULL,
    "costPriceEur" DECIMAL(12,2) NOT NULL,
    "stockQuantity" DECIMAL(12,3) NOT NULL DEFAULT 0,
    "minStockQuantity" DECIMAL(12,3) NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ErpProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpSale" (
    "id" SERIAL NOT NULL,
    "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "quantity" DECIMAL(12,3) NOT NULL,
    "unitPriceEur" DECIMAL(12,2) NOT NULL,
    "totalEur" DECIMAL(12,2) NOT NULL,
    "totalBgn" DECIMAL(12,2) NOT NULL,
    "costTotalEur" DECIMAL(12,2) NOT NULL,
    "profitEur" DECIMAL(12,2) NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "notes" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErpSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpInventoryMovement" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "movementType" "InventoryMovementType" NOT NULL,
    "quantityChange" DECIMAL(12,3) NOT NULL,
    "referenceType" TEXT,
    "referenceId" INTEGER,
    "notes" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErpInventoryMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpExpense" (
    "id" SERIAL NOT NULL,
    "expenseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" "ExpenseCategory" NOT NULL,
    "amountEur" DECIMAL(12,2) NOT NULL,
    "amountBgn" DECIMAL(12,2) NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "supplier" TEXT,
    "notes" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErpExpense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpWaxTransaction" (
    "id" SERIAL NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT,
    "waxReceivedKg" DECIMAL(12,3) NOT NULL,
    "waxPricePerKgEur" DECIMAL(12,2) NOT NULL,
    "waxValueEur" DECIMAL(12,2) NOT NULL,
    "foundationGivenKg" DECIMAL(12,3) NOT NULL,
    "foundationPricePerKgEur" DECIMAL(12,2) NOT NULL,
    "foundationValueEur" DECIMAL(12,2) NOT NULL,
    "extraPaymentEur" DECIMAL(12,2) NOT NULL,
    "balanceEur" DECIMAL(12,2) NOT NULL,
    "notes" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErpWaxTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErpAuditLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "oldValueJson" JSONB,
    "newValueJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErpAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "salePrice" DECIMAL(10,2),
    "stock" INTEGER NOT NULL DEFAULT 0,
    "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" INTEGER NOT NULL,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "notes" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" INTEGER,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "discountType" "DiscountType" NOT NULL,
    "discountValue" DECIMAL(10,2) NOT NULL,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT false,
    "bannerText" TEXT,
    "productId" INTEGER,
    "categoryId" INTEGER,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingPage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "heroTitle" TEXT NOT NULL,
    "heroSubtitle" TEXT,
    "heroImage" TEXT,
    "ctaText" TEXT,
    "ctaLink" TEXT,
    "sections" JSONB NOT NULL DEFAULT '[]',
    "status" "PageStatus" NOT NULL DEFAULT 'DRAFT',
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaAsset" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pathname" TEXT,
    "contentType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "alt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaAsset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "ErpProduct_active_category_idx" ON "ErpProduct"("active", "category");

-- CreateIndex
CREATE INDEX "ErpProduct_stockQuantity_idx" ON "ErpProduct"("stockQuantity");

-- CreateIndex
CREATE INDEX "ErpSale_saleDate_idx" ON "ErpSale"("saleDate");

-- CreateIndex
CREATE INDEX "ErpSale_productId_idx" ON "ErpSale"("productId");

-- CreateIndex
CREATE INDEX "ErpSale_createdById_idx" ON "ErpSale"("createdById");

-- CreateIndex
CREATE INDEX "ErpInventoryMovement_productId_createdAt_idx" ON "ErpInventoryMovement"("productId", "createdAt");

-- CreateIndex
CREATE INDEX "ErpInventoryMovement_movementType_idx" ON "ErpInventoryMovement"("movementType");

-- CreateIndex
CREATE INDEX "ErpInventoryMovement_referenceType_referenceId_idx" ON "ErpInventoryMovement"("referenceType", "referenceId");

-- CreateIndex
CREATE INDEX "ErpExpense_expenseDate_idx" ON "ErpExpense"("expenseDate");

-- CreateIndex
CREATE INDEX "ErpExpense_category_idx" ON "ErpExpense"("category");

-- CreateIndex
CREATE INDEX "ErpWaxTransaction_transactionDate_idx" ON "ErpWaxTransaction"("transactionDate");

-- CreateIndex
CREATE INDEX "ErpWaxTransaction_customerName_idx" ON "ErpWaxTransaction"("customerName");

-- CreateIndex
CREATE INDEX "ErpAuditLog_entityType_entityId_idx" ON "ErpAuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "ErpAuditLog_createdAt_idx" ON "ErpAuditLog"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_status_featured_idx" ON "Product"("status", "featured");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- CreateIndex
CREATE INDEX "ProductImage_productId_sortOrder_idx" ON "ProductImage"("productId", "sortOrder");

-- CreateIndex
CREATE INDEX "Order_status_createdAt_idx" ON "Order"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Promotion_slug_key" ON "Promotion"("slug");

-- CreateIndex
CREATE INDEX "Promotion_active_startsAt_endsAt_idx" ON "Promotion"("active", "startsAt", "endsAt");

-- CreateIndex
CREATE UNIQUE INDEX "LandingPage_slug_key" ON "LandingPage"("slug");

-- CreateIndex
CREATE INDEX "LandingPage_status_idx" ON "LandingPage"("status");

-- AddForeignKey
ALTER TABLE "ErpSale" ADD CONSTRAINT "ErpSale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ErpProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpSale" ADD CONSTRAINT "ErpSale_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpInventoryMovement" ADD CONSTRAINT "ErpInventoryMovement_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ErpProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpInventoryMovement" ADD CONSTRAINT "ErpInventoryMovement_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpExpense" ADD CONSTRAINT "ErpExpense_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpWaxTransaction" ADD CONSTRAINT "ErpWaxTransaction_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErpAuditLog" ADD CONSTRAINT "ErpAuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

