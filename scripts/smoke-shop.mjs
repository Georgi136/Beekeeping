const baseUrl = (process.env.SHOP_BASE_URL || 'http://localhost:3001').replace(/\/$/, '')

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(options.headers || {})
    }
  })
  const text = await response.text()
  let body = null
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }
  return { response, body }
}

function pass(message) {
  console.log(`ok - ${message}`)
}

function fail(message) {
  throw new Error(message)
}

function assert(condition, message) {
  if (!condition) fail(message)
}

const health = await request('/api/health')
assert(health.response.ok, '/api/health should return 2xx')
assert(health.body?.status === 'ok', '/api/health should return status ok')
pass('API health')

const categories = await request('/api/categories')
assert(categories.response.ok, '/api/categories should return 2xx')
assert(Array.isArray(categories.body), '/api/categories should return an array')
pass(`categories endpoint (${categories.body.length})`)

const products = await request('/api/products')
assert(products.response.ok, '/api/products should return 2xx')
assert(Array.isArray(products.body), '/api/products should return an array')
pass(`products endpoint (${products.body.length})`)

if (products.body.length > 0) {
  const product = products.body[0]
  assert(product.slug || product.id, 'first product should include slug or id')
  const detail = await request(`/api/products/${product.slug || product.id}`)
  assert(detail.response.ok, 'first product detail should return 2xx')
  assert(detail.body?.id === product.id, 'product detail should match list item')
  pass('product detail endpoint')
}

const settings = await request('/api/site-settings')
assert(settings.response.ok, '/api/site-settings should return 2xx')
assert(settings.body?.homepage, '/api/site-settings should include homepage settings')
assert(settings.body?.storefront, '/api/site-settings should include storefront settings')
pass(`site settings endpoint (${settings.body.storefront.currency || 'currency unset'})`)

const invalidOrder = await request('/api/orders', {
  method: 'POST',
  body: JSON.stringify({
    customerName: 'Test',
    phone: '123456',
    address: 'Test address',
    items: []
  })
})
assert(invalidOrder.response.status === 400, 'invalid empty order should return 400')
pass('order validation guard')

const adminGuard = await request('/api/admin/orders')
assert(adminGuard.response.status === 401, 'admin orders should require authentication')
pass('admin auth guard')

console.log(`Smoke checks passed for ${baseUrl}`)
