# AGENTS.md

## Project Context

This repository contains:
- a public Saki website/shop
- an ERP/admin back office
- an Express/Prisma API

Target architecture:
- `apps/web` for the public website/shop
- `apps/admin` for the ERP/admin UI
- `apps/api` for the backend API
- `packages/db` for Prisma schema, migrations, and seed
- `packages/shared` for shared types, constants, and utilities
- `docs` for documentation

## Working Rules

- Make small, reviewable diffs.
- One phase per task.
- Do not change behavior unless explicitly asked.
- Do not redesign UI unless explicitly asked.
- Do not install packages without asking.
- Do not modify Prisma schema unless the task is database-related.
- Do not edit `.env`.
- Do not commit `node_modules`, `dist`, `uploads`, `.rar`, `.7z`, or `*.tsbuildinfo`.
- Prefer moving files before rewriting logic.
- After moving files, update imports.
- Stop after one implementation attempt.
- If tests or build fail, stop and explain the error.
