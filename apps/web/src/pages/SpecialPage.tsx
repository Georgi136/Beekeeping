import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { apiUrl, resolveProductImage } from '../config'

interface LandingSection {
  type?: string
  title?: string
  body?: string
  image?: string
}

interface LandingPage {
  title: string
  slug: string
  heroTitle: string
  heroSubtitle?: string | null
  heroImage?: string | null
  ctaText?: string | null
  ctaLink?: string | null
  sections: LandingSection[]
  seoTitle?: string | null
  seoDescription?: string | null
}

export default function SpecialPage() {
  const { slug } = useParams<{ slug: string }>()
  const [page, setPage] = useState<LandingPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchPage() {
      try {
        const response = await fetch(apiUrl(`/api/landing-pages/${slug}`))
        if (!response.ok) throw new Error('Страницата не е намерена.')
        setPage(await response.json())
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Възникна грешка.')
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug])

  if (loading) {
    return <div className="container" style={{ padding: '3rem 0' }}>Зареждане...</div>
  }

  if (error || !page) {
    return (
      <div className="container" style={{ padding: '3rem 0' }}>
        <SEO title="Страницата не е намерена | САКИ" description="Тази специална страница не е налична." path={`/special/${slug ?? ''}`} noindex />
        <p>{error || 'Страницата не е намерена.'}</p>
        <Link to="/products" className="btn btn-primary">Към продуктите</Link>
      </div>
    )
  }

  return (
    <div className="special-page">
      <SEO
        title={page.seoTitle || `${page.title} | САКИ`}
        description={page.seoDescription || page.heroSubtitle || 'Специална страница от пчеларски магазин САКИ.'}
        path={`/special/${page.slug}`}
        image={page.heroImage || undefined}
      />
      <section className="special-hero">
        {page.heroImage && <img src={resolveProductImage(page.heroImage)} alt={page.heroTitle} />}
        <div className="container special-hero-content">
          <h1>{page.heroTitle}</h1>
          {page.heroSubtitle && <p>{page.heroSubtitle}</p>}
          {page.ctaText && page.ctaLink && <Link to={page.ctaLink} className="btn btn-primary">{page.ctaText}</Link>}
        </div>
      </section>

      <section className="container special-sections">
        {page.sections.map((section, index) => (
          <article key={`${section.title}-${index}`} className="special-section">
            {section.image && <img src={resolveProductImage(section.image)} alt={section.title || page.title} />}
            <div>
              {section.title && <h2>{section.title}</h2>}
              {section.body && <p>{section.body}</p>}
            </div>
          </article>
        ))}
      </section>

      <style>{`
        .special-page {
          background: #f9f9f9;
          min-height: 100vh;
        }

        .special-hero {
          position: relative;
          min-height: 360px;
          display: flex;
          align-items: center;
          background: #fff7ed;
          overflow: hidden;
        }

        .special-hero > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
        }

        .special-hero-content {
          position: relative;
          z-index: 1;
          padding: 4rem 0;
        }

        .special-hero h1 {
          max-width: 760px;
          font-size: 3rem;
          color: var(--color-secondary);
          margin: 0 0 1rem;
        }

        .special-hero p {
          max-width: 640px;
          font-size: 1.2rem;
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
        }

        .special-sections {
          padding-top: 3rem;
          padding-bottom: 3rem;
          display: grid;
          gap: 1.5rem;
        }

        .special-section {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: minmax(0, 240px) 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        .special-section img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 0.375rem;
        }

        .special-section h2 {
          margin: 0 0 0.5rem;
          color: var(--color-secondary);
        }

        .special-section p {
          color: var(--color-text-light);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .special-hero h1 {
            font-size: 2.2rem;
          }

          .special-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
