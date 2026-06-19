import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
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
    reviews: <Reviews />,
    contact: <Contact />
  }
  const savedOrder = (homepageMeta.sectionOrder || 'hero,about,products,reviews,contact').split(',') as Array<keyof typeof sections>
  const order = savedOrder.includes('reviews')
    ? savedOrder
    : savedOrder.flatMap((key) => key === 'contact' ? ['reviews', key] : [key]) as Array<keyof typeof sections>

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
