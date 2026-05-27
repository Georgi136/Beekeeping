ALTER TABLE "ErpWaxTransaction"
ADD COLUMN IF NOT EXISTS "foundationProductId" INTEGER;

CREATE INDEX IF NOT EXISTS "ErpWaxTransaction_foundationProductId_idx"
ON "ErpWaxTransaction"("foundationProductId");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'ErpWaxTransaction_foundationProductId_fkey'
  ) THEN
    ALTER TABLE "ErpWaxTransaction"
    ADD CONSTRAINT "ErpWaxTransaction_foundationProductId_fkey"
    FOREIGN KEY ("foundationProductId") REFERENCES "ErpProduct"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
