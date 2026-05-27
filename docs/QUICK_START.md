# Quick Start

## Install

```bash
npm run install:all
```

## Run the Project

```bash
npm run dev
```

This starts:
- the public website
- the admin ERP
- the API server

## Check the Apps

1. Open the public site in your browser.
2. Open the admin app.
3. Sign in with an admin account.
4. Confirm the dashboard loads.
5. Confirm products, sales, reports, expenses, and wax screens load.

## Common Issues

- If the API is unavailable, check port `3001`.
- If the frontend does not load, check the Vite port shown in the terminal.
- If admin build scripts complain about TypeScript, make sure `apps/admin` dependencies are installed.

## Notes

- The monorepo now uses separate folders for the web app, admin app, API, shared code, and database package.
- Keep backups before database changes or imports.
