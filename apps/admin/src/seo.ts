export const SITE_URL = 'https://www.sakimed.com'
export const SITE_NAME = 'САКИ - пчеларски магазин в Дупница'
export const DEFAULT_SEO_IMAGE = `${SITE_URL}/saki-logo.png`

export const defaultDescription =
  'САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.'

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path
  if (path.startsWith('data:')) return DEFAULT_SEO_IMAGE
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'САКИ - пчеларски магазин',
    alternateName: 'SAKI Beekeeping Shop',
    description: defaultDescription,
    url: SITE_URL,
    telephone: '+359895517056',
    email: 'info@sakimed.com',
    image: DEFAULT_SEO_IMAGE,
    priceRange: '$$',
    foundingDate: '2006',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Кооперативен пазар, павилион 5',
      addressLocality: 'Дупница',
      postalCode: '2600',
      addressCountry: 'BG'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ],
    sameAs: ['https://facebook.com/Saki2008'],
    areaServed: {
      '@type': 'Country',
      name: 'Bulgaria'
    },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Натурален пчелен мед' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Пчеларски инвентар' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Кошери и рамки' } }
    ]
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'bg-BG',
    publisher: {
      '@type': 'Organization',
      name: 'САКИ'
    }
  }
}
