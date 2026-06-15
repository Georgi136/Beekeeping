import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import SEO from '../components/SEO'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { defaultDescription, localBusinessJsonLd, websiteJsonLd } from '../seo'
import { useLanguage } from '../i18n/LanguageContext'

export default function HomePage() {
  const { homepageMeta } = useLanguage()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }, [])
  const sections = {
    hero: <Hero />,
    products: <Products />,
    about: <About />,
    contact: <Contact />
  }
  const order = (homepageMeta.sectionOrder || 'hero,about,products,contact').split(',') as Array<keyof typeof sections>

  return (
    <>
      <SEO
        title="САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар"
        description={defaultDescription}
        path="/"
        jsonLd={[localBusinessJsonLd(), websiteJsonLd()]}
      />
      {order.filter((key) => sections[key] && homepageMeta[`${key}.visible`] !== 'false').map((key) => <div key={key}>{sections[key]}</div>)}
    </>
  )
}
