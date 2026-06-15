import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import PropolisMehlemFeature from '../components/PropolisMehlemFeature'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'
import { localBusinessJsonLd, propolisMehlemJsonLd } from '../seo'

const pageCopy = {
  bg: {
    title: 'Прополисов мехлем САКИ | Натурална грижа за кожа',
    description:
      'Прополисов мехлем САКИ по семейна рецепта - локална натурална грижа за суха, раздразнена и проблемна кожа.'
  },
  en: {
    title: 'SAKI Propolis Ointment | Natural skin care',
    description:
      'SAKI Propolis Ointment from a family recipe - local natural care for dry, irritated, and problematic skin.'
  }
}

export default function PropolisMehlemPage() {
  const { language } = useLanguage()
  const locale = language === 'en' ? 'en' : 'bg'
  const copy = pageCopy[locale]

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }, [])

  return (
    <>
      <SEO
        title={copy.title}
        description={copy.description}
        path="/propolisov-mehlem"
        image="/assets/photos/propolisov-mehlem-hero.jpg"
        type="product"
        jsonLd={[localBusinessJsonLd(), propolisMehlemJsonLd()]}
      />
      <div className="propolis-page">
        <div className="container">
          <PropolisMehlemFeature />
        </div>
      </div>

      <style>{`
        .propolis-page {
          min-height: 100vh;
          padding: 2.5rem 0 4rem;
          background: var(--color-background);
        }

        @media (max-width: 720px) {
          .propolis-page {
            padding: 1.25rem 0 3rem;
          }
        }
      `}</style>
    </>
  )
}
