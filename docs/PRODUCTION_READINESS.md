# Production Readiness

Use this checklist before deploying or before making a release.

## Build And Smoke Test

Stop local dev servers before a full build on Windows, because a running API process can lock Prisma's engine DLL.

```powershell
npm.cmd run build
```

Start the API, then run the non-mutating smoke checks:

```powershell
cd apps/api
npm.cmd run dev
```

In another terminal:

```powershell
cd C:\Users\HP\Documents\Saki\Beekeeping
npm.cmd run smoke:shop
```

For a deployed site or a different local port:

```powershell
$env:SHOP_BASE_URL="https://www.sakimed.com"
npm.cmd run smoke:shop
```

The smoke test checks:

- API health
- Public categories
- Public products
- First product detail, when products exist
- Public site settings
- Empty order validation
- Admin authentication guard

It does not create orders and does not change stock.

## Database Backup

Create a backup before migrations, imports, or production releases.

PowerShell:

```powershell
New-Item -ItemType Directory -Force backups
pg_dump $env:DATABASE_URL -Fc -f "backups\sakimed-$(Get-Date -Format yyyyMMdd-HHmm).dump"
```

Restore only after testing on a staging database:

```powershell
pg_restore --clean --if-exists -d $env:DATABASE_URL backups\sakimed-YYYYMMDD-HHMM.dump
```

## Migrations

Run migrations after backup and before serving the release:

```powershell
cd apps/api
npm.cmd run db:deploy
```

For local development migrations:

```powershell
cd apps/api
npm.cmd run db:migrate
```

The API scripts load env values from `apps/api/.env` first and then `server/.env`.

## Required Environment Variables

Production needs:

- `DATABASE_URL`
- `JWT_SECRET`
- `CLIENT_ORIGIN`
- `NODE_ENV=production`

For media uploads:

- `BLOB_READ_WRITE_TOKEN`

For email notifications after `nodemailer` is installed:

- `SMTP_PASSWORD`

Admin-created settings also control:

- SMTP host, port, user, from, secure mode
- Support email
- Order notification email
- Store currency
- Delivery/payment toggles

## Product And Catalog Readiness

Before launch, verify in admin:

- Every public product has status `ACTIVE`.
- Every public product has a real image.
- Prices are correct in the selected store currency.
- Stock is correct.
- ERP-linked products point to the correct ERP inventory item.
- Archived products do not appear publicly.
- Categories are named and ordered correctly.
- Homepage featured products point to real active products.

## Import Scripts

The root `scripts` folder contains one-off import helpers:

- `scripts/import-storage-from-xlsx.js`
- `scripts/import-sales-2026-from-xlsx.js`

Use them only after a database backup. They read env values from `apps/api/.env` or `server/.env`.

## Manual Browser QA

Check desktop and mobile:

- Home page
- Product listing
- Product detail
- Cart
- Checkout validation
- Successful real checkout test
- Admin login
- Product create/edit
- Image upload
- Order status update
- Contact form

When doing the real checkout test, use a clearly named test customer and cancel the order afterward to confirm stock restoration.

