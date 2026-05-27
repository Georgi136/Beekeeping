ALTER TABLE "ErpProduct" ADD COLUMN "sku" TEXT;
ALTER TABLE "ErpProduct" ADD COLUMN "totalSoldQuantity" DECIMAL(12,3) NOT NULL DEFAULT 0;
CREATE UNIQUE INDEX "ErpProduct_sku_key" ON "ErpProduct"("sku");
