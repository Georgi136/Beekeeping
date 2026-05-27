# Saki Bee Store

React/Vite public website and admin ERP with Express, Prisma, and PostgreSQL.

## Stack

- Frontend: React, TypeScript, Vite
- Backend: Express, TypeScript
- Database: PostgreSQL with Prisma
- ERP areas: dashboard, storage, sales, expenses, reports, wax transactions

## Development

```bash
npm run install:all
npm run dev
```

If port `3001` is already busy, stop the old server process before starting the app again.

## Production Build

```bash
npm run build
```

Run database migrations before serving a production build:

```bash
cd apps/api
npm run db:deploy
```

## Database Backups

Create backups before migrations, imports, or production releases.

PowerShell:

```powershell
New-Item -ItemType Directory -Force backups
pg_dump $env:DATABASE_URL -Fc -f "backups\sakimed-$(Get-Date -Format yyyyMMdd-HHmm).dump"
```

Bash:

```bash
mkdir -p backups
pg_dump "$DATABASE_URL" -Fc -f "backups/sakimed-$(date +%Y%m%d-%H%M).dump"
```

Restore:

```bash
pg_restore --clean --if-exists -d "$DATABASE_URL" backups/sakimed-YYYYMMDD-HHMM.dump
```

Always test a restore on a staging database before relying on a backup procedure in production.
