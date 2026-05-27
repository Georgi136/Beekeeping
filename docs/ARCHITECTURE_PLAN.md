# Architecture Plan

This repository currently contains one product with three concerns:

- Public Saki website and shop
- ERP/admin back office
- Express/Prisma API

The target structure is:

- `apps/web` for the public website/shop
- `apps/admin` for the ERP/admin UI
- `apps/api` for the backend API
- `packages/db` for Prisma schema, migrations, and seed
- `packages/shared` for shared types, constants, and utilities
- `docs` for documentation

## Current State

The repo has already been split into the target monorepo layout:

- `apps/web` contains the public website/shop
- `apps/admin` contains the ERP/admin UI
- `apps/api` contains the backend API and business logic
- `packages/db` contains Prisma schema, migrations, and seed
- `packages/shared` contains shared helpers and types

Legacy root folders may still exist as cleanup leftovers, but the active source of truth is the monorepo structure above.

This means the public frontend and admin frontend are still coupled in the same React app, and the database layer is still embedded inside the API package.

## Recommended Migration Order

1. Extract `packages/db`
2. Extract `packages/shared`
3. Move `server/` into `apps/api`
4. Move the public website into `apps/web`
5. Move the ERP/admin UI into `apps/admin`
6. Move documentation into `docs/`

This order keeps the highest-risk frontend split separate from the backend split.

## Phase 1

Phase 1 should be backend-only and focused on the database package.

Scope:

- Create `packages/db`
- Move Prisma schema, migrations, and seed into `packages/db`
- Update Prisma paths so the API still builds and runs
- Keep behavior unchanged
- Do not move React files in this phase
- Do not rewrite business logic in this phase

Out of scope:

- Splitting `client/`
- Splitting admin/public UI
- Rebuilding the API architecture
- Changing ERP behavior

## Safety Rules

- Make small, reviewable diffs
- One phase per task
- Move files before rewriting logic
- After moving files, update imports and paths
- Do not change behavior unless explicitly asked
- Do not combine frontend split and backend split in one phase
- Stop after one implementation attempt if validation fails

## Key Risk Areas

These files and areas need extra care during cleanup and remaining extraction work:

- `apps/admin/src/pages/AdminPage.tsx`
- `apps/api/src/modules/erp/erp.controller.ts`
- `packages/db/prisma/schema.prisma`
- `apps/web/src/i18n/translations.ts`
- `api/index.js`

These are tightly coupled and should be moved only after the package boundaries are stable.

## Suggested Shared Code Candidates

Good candidates for `packages/shared` include:

- Money and parameter utilities
- Shared validation helpers
- Stable enums and constants
- Shared admin labels and types once the admin app is separated

Do not extract these too early if they would increase churn before the base package boundaries are stable.

## Post-Phase Checks

After Phase 1 or after a cleanup pass, verify:

- `npm run build`
- `cd apps/api && npm run db:generate`
- `cd apps/api && npm run dev`
- `cd apps/web && npm run dev`
- `curl http://localhost:3001/api/health`

If Prisma paths changed, also run:

- `cd apps/api && npx prisma validate`

## Principle

Keep the migration boring, narrow, and reversible. The goal is to create clean package boundaries without changing how the product behaves.
