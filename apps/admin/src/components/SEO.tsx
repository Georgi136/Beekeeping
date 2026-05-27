import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, DEFAULT_SEO_IMAGE, SITE_NAME } from '../seo'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'product'
  noindex?: boolean
  jsonLd?: unknown | unknown[]
}

function setMetaByName(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = name
    document.head.appendChild(tag)
  }
  tag.content = content
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.content = content
}

function setCanonical(href: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = 'canonical'
    document.head.appendChild(tag)
  }
  tag.href = href
}

function setJsonLd(value: string) {
  let tag = document.querySelector<HTMLScriptElement>('script[data-page-json-ld="true"]')
  if (!value) {
    tag?.remove()
    return
  }

  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.dataset.pageJsonLd = 'true'
    document.head.appendChild(tag)
  }
  tag.textContent = value
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_SEO_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd
}: SEOProps) {
  const location = useLocation()
  const canonical = absoluteUrl(path ?? location.pathname)
  const imageUrl = absoluteUrl(image)
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    document.title = title
    setCanonical(canonical)
    setMetaByName('description', description)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMetaByName('theme-color', '#f59e0b')

    setMetaByProperty('og:site_name', SITE_NAME)
    setMetaByProperty('og:type', type === 'product' ? 'product' : type)
    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', canonical)
    setMetaByProperty('og:image', imageUrl)
    setMetaByProperty('og:locale', 'bg_BG')

    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', imageUrl)
    setJsonLd(jsonLdString)
  }, [canonical, description, imageUrl, jsonLdString, noindex, title, type])

  return null
}
