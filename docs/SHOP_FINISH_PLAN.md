# Shop Finish Plan

This document tracks the path from the current manual-order shop to a finished small ecommerce store.

## Current Position

The project already has the main shop structure:

- Public website/shop in `apps/web`
- Admin/ERP back office in `apps/admin`
- Express/Prisma API in `apps/api`
- Prisma schema, migrations, and seed logic in `packages/db`
- Shared frontend helpers in `packages/shared`

The shop is currently best described as a manual-order ecommerce flow:

1. Customer browses products.
2. Customer adds items to cart.
3. Customer submits checkout form.
4. Backend creates an order and decrements stock.
5. Admin confirms and handles payment/delivery manually.

## Phase 1: Make The Existing Shop Reliable

Goal: make the current manual-order shop build cleanly and work end to end.

- Stop any running API/dev process that locks Prisma files.
- Verify full production build with `npm.cmd run build`.
- Fix currency mismatch between store settings and UI.
- Decide the shop currency source of truth, likely `BGN` / `лв.` for the current UI.
- Add or verify real products, categories, images, prices, and stock.
- Verify public endpoints:
  - `/api/health`
  - `/api/products`
  - `/api/categories`
  - `/api/site-settings`
- Verify frontend flow:
  - Product listing loads.
  - Product detail loads.
  - Add to cart works.
  - Checkout creates an order.
  - Cart clears after successful order.
- Verify admin flow:
  - Admin login works.
  - Products can be created/edited.
  - Product images can be uploaded.
  - Orders appear in admin.
  - Order status can be changed.
- Verify stock behavior:
  - Webshop-only product stock decrements.
  - ERP-linked product stock decrements.
  - Cancelled orders return stock.

## Phase 2: Finish Basic Ecommerce UX

Goal: make the customer buying flow clear and trustworthy.

- Done: improve checkout fields:
  - Name
  - Phone
  - Email
  - City
  - Delivery address
  - Notes
- Done: add delivery method selection.
- Done: add payment method selection.
- Done: save delivery/payment choices into the existing order notes.
- Done: prevent cart quantities above available stock when stock is known by the frontend.
- Already present: re-check price and stock at checkout on the backend.
- Show friendly Bulgarian validation and stock errors.
- Add terms/privacy/delivery links to checkout.
- Add a required terms acceptance checkbox if needed.

## Phase 3: Admin Workflow Polish

Goal: make the shop manageable day to day.

- Done: add expandable order detail view.
- Add order status history or internal notes.
- Add a visible new-order indicator.
- Done: add category edit/delete UI.
- Done: add promotion edit/delete UI.
- Make product list easier to scan and filter.
- Make product image management clearer.
- Ensure archived products do not appear publicly.

## Phase 4: Notifications

Goal: notify the customer and shop when important events happen.

- Done: add backend notification service with safe SMTP checks.
- Done: read SMTP/admin recipient settings from site/admin configuration.
- Ready after package approval: send customer order confirmation email.
- Ready after package approval: send admin new-order notification email.
- Send optional order status update email.
- Done: contact form now calls the notification service.
- Done: add safe handling for missing SMTP config or missing mail transport.
- Pending: install `nodemailer` and `@types/nodemailer` to enable real SMTP delivery.

## Phase 5: Production Readiness

Goal: make the shop safe to deploy and maintain.

- Done: add non-mutating shop smoke test for:
  - Product visibility
  - Product detail
  - Order validation
  - Admin auth guard
- Pending: add mutating/staging-only tests for:
  - Order creation
  - Stock decrement
  - Order cancellation stock return
- Done: add product/import guidance in `docs/PRODUCTION_READINESS.md`.
- Done: document backup-before-migration workflow.
- Done: document production env variables.
- Done: document Vercel/API deployment checks.
- Pending: test desktop and mobile browser flows.
- Final content pass:
  - Terms
  - Privacy policy
  - Delivery/payment policy
  - Returns policy
  - Contact details
  - SEO metadata

## Phase 1 Starting Point

The first implementation task should be:

1. Fix or unblock the full build.
2. Fix the currency mismatch.
3. Verify the customer order flow end to end.

## Phase 1 Progress

- Done: stopped stale Beekeeping Node/dev/migration processes that were locking Prisma.
- Done: full production build passes with `npm.cmd run build`.
- Done: made `apps/api/scripts/prisma-with-env.cjs` work when run directly on Windows.
- Done: set saved `store.currency` to `BGN` so public settings match the current `лв.` UI.
- Done: verified local API endpoints after restarting API:
  - `/api/health`: ok
  - `/api/products`: 1 active product
  - `/api/categories`: 2 categories
  - `/api/site-settings`: currency `BGN`
- Pending: intentional real checkout test, because it creates an order and changes stock.
- Pending: add or verify enough real products for launch.
