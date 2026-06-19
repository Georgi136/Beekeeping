const { existsSync, readFileSync } = require('fs')
const { resolve } = require('path')
const { spawnSync } = require('child_process')

const envFiles = [resolve(__dirname, '..', '.env'), resolve(__dirname, '..', '..', '..', 'server', '.env')]

for (const envFile of envFiles) {
  if (!existsSync(envFile)) continue

  const lines = readFileSync(envFile, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const separator = trimmed.indexOf('=')
    if (separator === -1) continue

    const key = trimmed.slice(0, separator).trim()
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

const prismaBin = resolve(__dirname, '..', 'node_modules', '.bin', process.platform === 'win32' ? 'prisma.cmd' : 'prisma')

const result = spawnSync(prismaBin, process.argv.slice(2), {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env
})

if (result.error) {
  console.error(result.error.message)
}

process.exit(result.status ?? 1)
