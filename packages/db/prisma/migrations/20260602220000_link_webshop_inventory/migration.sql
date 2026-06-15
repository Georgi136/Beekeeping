-- AlterTable
ALTER TABLE "ErpInventoryMovement" ADD COLUMN "referenceKey" TEXT;
ALTER TABLE "ErpInventoryMovement" ALTER COLUMN "createdById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN "erpProductId" INTEGER;

-- CreateIndex
CREATE INDEX "ErpInventoryMovement_referenceType_referenceKey_idx" ON "ErpInventoryMovement"("referenceType", "referenceKey");

-- CreateIndex
CREATE INDEX "Product_erpProductId_idx" ON "Product"("erpProductId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_erpProductId_fkey" FOREIGN KEY ("erpProductId") REFERENCES "ErpProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
