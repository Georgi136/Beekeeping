import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import SEO from '../components/SEO'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { defaultDescription, localBusinessJsonLd, websiteJsonLd } from '../seo'

export default function HomePage() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }, [])

  return (
    <>
      <SEO
        title="САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар"
        description={defaultDescription}
        path="/"
        jsonLd={[localBusinessJsonLd(), websiteJsonLd()]}
      />
      <Hero />
      <About />
      <Products />
      <Contact />
    </>
  )
}
