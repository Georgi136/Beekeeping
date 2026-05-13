import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export default function HomePage() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Contact />
    </>
  )
}
