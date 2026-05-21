const app = require('../server/dist/app').default

function normalizePathParam(value) {
  if (Array.isArray(value)) return value.join('/')
  return typeof value === 'string' ? value : ''
}

function rebuildUrl(req, prefix, paramName) {
  const routedPath = normalizePathParam(req.query?.[paramName])
  if (!routedPath) return

  const query = new URLSearchParams()
  for (const [key, value] of Object.entries(req.query || {})) {
    if (key === paramName) continue
    if (Array.isArray(value)) {
      value.forEach((entry) => query.append(key, entry))
    } else if (value !== undefined) {
      query.set(key, value)
    }
  }

  const search = query.toString()
  req.url = `${prefix}/${routedPath}${search ? `?${search}` : ''}`
}

module.exports = (req, res) => {
  rebuildUrl(req, '/api', 'path')
  rebuildUrl(req, '/uploads', 'uploadPath')
  return app(req, res)
}
