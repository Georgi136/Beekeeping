import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiUrl, resolveProductImage } from '../config'
import { useLanguage } from '../i18n/LanguageContext'
import ProductCard from './ProductCard'

interface Product {
  id: number
  slug: string
  name: string
  price: number
  salePrice?: number | null
  image: string
  featured?: boolean
}

export default function Products() {
  const navigate = useNavigate()
  const { t, homepageSettings, homepageMeta } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(apiUrl('/api/products'))
      .then((response) => response.ok ? response.json() : [])
      .then((rows) => setProducts((Array.isArray(rows) ? rows : []).map((product: Product) => ({
        ...product,
        image: resolveProductImage(product.image)
      }))))
      .catch(() => setProducts([]))
  }, [])

  const featuredProducts = useMemo(() => {
    const ids = (homepageMeta['products.featuredIds'] || '').split(',').filter(Boolean)
    const limit = Math.max(1, Math.min(12, Number(homepageMeta['products.limit'] || 6)))
    const selected = ids.length
      ? ids.map((id) => products.find((product) => String(product.id) === id)).filter((product): product is Product => Boolean(product))
      : products.filter((product) => product.featured)
    return (selected.length ? selected : products).slice(0, limit)
  }, [homepageMeta, products])

  return (
    <section id="products" className="section homepage-products">
      <div className="container">
        <h2 className="section-title">{t('productsTitle')}</h2>
        <p className="section-subtitle">{t('productsSubtitle')}</p>

        {featuredProducts.length > 0 && (
          <div className="homepage-products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.image}
                onViewDetails={(idOrSlug) => navigate(`/products/${idOrSlug}`)}
              />
            ))}
          </div>
        )}

        <div className="homepage-products-cta">
          <p>{t('productsCta')}</p>
          <Link to={homepageSettings.productsCtaLink || '/products'} className="btn btn-primary">{t('productsCtaButton')}</Link>
        </div>
      </div>

      <style>{`
        .homepage-products {
          background: var(--color-background);
        }

        .homepage-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          margin: 2rem 0;
        }

        .homepage-products-cta {
          display: grid;
          justify-items: center;
          gap: 0.9rem;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background: #fff;
          text-align: center;
        }

        .homepage-products-cta p {
          margin: 0;
          color: var(--color-text-light);
          font-size: 1.05rem;
        }

        .homepage-products-cta a {
          text-decoration: none;
        }

        @media (max-width: 560px) {
          .homepage-products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
