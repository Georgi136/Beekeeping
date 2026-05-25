ALTER TABLE "ErpWaxTransaction"
ADD COLUMN IF NOT EXISTS "transactionType" TEXT NOT NULL DEFAULT 'BUY';

UPDATE "ErpWaxTransaction"
SET "transactionType" = CASE
  WHEN "foundationGivenKg" > 0 THEN 'SWAP'
  ELSE 'BUY'
END;

CREATE INDEX IF NOT EXISTS "ErpWaxTransaction_transactionType_idx"
ON "ErpWaxTransaction"("transactionType");

CREATE TABLE IF NOT EXISTS "ErpSetting" (
  "key" TEXT NOT NULL,
  "value" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ErpSetting_pkey" PRIMARY KEY ("key")
);

INSERT INTO "ErpSetting" ("key", "value")
VALUES ('wax.defaultBuyPriceEur', '5')
ON CONFLICT ("key") DO NOTHING;
