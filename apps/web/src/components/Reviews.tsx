import { useLanguage } from '../i18n/LanguageContext'

type StoreReview = {
  name: string
  rating: string
  quote: string
  source: string
}

const copy = {
  bg: {
    eyebrow: 'Отзиви от клиенти',
    title: 'Какво казват клиентите за САКИ',
    subtitle: 'Избрани мнения от клиенти, добавени ръчно от Google Maps.',
    rating: 'Google отзиви',
    ratingText: 'Вижте реалните оценки и коментари в Google Maps.',
    cta: 'Вижте отзивите в Google',
    empty: 'Скоро тук ще добавим избрани клиентски отзиви.'
  },
  en: {
    eyebrow: 'Customer reviews',
    title: 'What customers say about SAKI',
    subtitle: 'Selected customer feedback added manually from Google Maps.',
    rating: 'Google reviews',
    ratingText: 'See real ratings and comments on Google Maps.',
    cta: 'View reviews on Google',
    empty: 'Selected customer reviews will be added here soon.'
  }
}

function parseReviews(value: string | undefined) {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((review): StoreReview => ({
        name: typeof review.name === 'string' ? review.name : '',
        rating: typeof review.rating === 'string' || typeof review.rating === 'number' ? String(review.rating) : '5',
        quote: typeof review.quote === 'string' ? review.quote : '',
        source: typeof review.source === 'string' ? review.source : 'Google Maps'
      }))
      .filter((review) => review.quote.trim())
  } catch {
    return []
  }
}

function Stars({ rating = '5' }: { rating?: string }) {
  const safeRating = Math.min(5, Math.max(1, Number(rating) || 5))
  return (
    <span className="review-stars" aria-label={`${safeRating} stars`}>
      {'★'.repeat(safeRating)}{'☆'.repeat(5 - safeRating)}
    </span>
  )
}

export default function Reviews() {
  const { language, storefrontSettings } = useLanguage()
  const text = copy[language]
  const reviews = parseReviews(storefrontSettings.reviewsJson)
  const googleReviewsUrl = storefrontSettings.googleReviewsUrl || 'https://share.google/EwaSOYGRTzTzdyF4C'

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-heading">
          <p className="section-eyebrow">{text.eyebrow}</p>
          <h2>{text.title}</h2>
          <p>{text.subtitle}</p>
        </div>

        <div className="reviews-layout">
          <aside className="reviews-score">
            <div className="google-mark">G</div>
            <Stars />
            <h3>{text.rating}</h3>
            <p>{text.ratingText}</p>
            <a className="btn btn-primary" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              {text.cta}
            </a>
          </aside>

          <div className="review-cards">
            {reviews.length === 0 && <div className="review-empty">{text.empty}</div>}
            {reviews.map((review, index) => (
              <article className="review-card" key={`${review.name}-${index}`}>
                <Stars rating={review.rating} />
                <p>"{review.quote}"</p>
                <strong>{review.name || review.source}</strong>
                {review.name && <small>{review.source || 'Google Maps'}</small>}
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reviews-section {
          padding: 5rem 0;
          background: #fff;
        }

        .reviews-heading {
          max-width: 720px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .section-eyebrow {
          color: var(--color-primary);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          margin: 0 0 0.5rem;
          text-transform: uppercase;
        }

        .reviews-heading h2 {
          color: var(--color-secondary);
          font-size: 2.1rem;
          margin: 0 0 0.75rem;
        }

        .reviews-heading > p:last-child {
          color: var(--color-text-light);
          line-height: 1.7;
          margin: 0;
        }

        .reviews-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .reviews-score,
        .review-card,
        .review-empty {
          border: 1px solid #eee3ca;
          border-radius: 0.5rem;
          background: #fffdf8;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .reviews-score {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 1.5rem;
        }

        .google-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: var(--color-secondary);
          color: #fff;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .review-stars {
          color: var(--color-primary);
          font-size: 1rem;
          letter-spacing: 0.08em;
        }

        .reviews-score h3 {
          color: var(--color-secondary);
          margin: 0.75rem 0 0.5rem;
          font-size: 1.1rem;
        }

        .reviews-score p,
        .review-card p,
        .review-empty {
          color: var(--color-text-light);
          line-height: 1.65;
        }

        .reviews-score p {
          margin: 0 0 1.25rem;
        }

        .review-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .review-card,
        .review-empty {
          padding: 1.25rem;
        }

        .review-card p {
          margin: 0.85rem 0 1rem;
        }

        .review-card strong,
        .review-card small {
          display: block;
        }

        .review-card strong {
          color: var(--color-secondary);
          font-size: 0.95rem;
        }

        .review-card small {
          color: var(--color-text-light);
          margin-top: 0.2rem;
        }

        @media (max-width: 900px) {
          .reviews-layout,
          .review-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .reviews-section {
            padding: 3.5rem 0;
          }

          .reviews-heading h2 {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  )
}
