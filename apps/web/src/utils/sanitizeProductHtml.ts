import { resolveProductImage } from '../config'

const allowedTags = new Set(['A', 'B', 'BLOCKQUOTE', 'BR', 'DIV', 'EM', 'FONT', 'H3', 'H4', 'I', 'IMG', 'LI', 'OL', 'P', 'S', 'SPAN', 'STRIKE', 'STRONG', 'U', 'UL'])
const removableTags = new Set(['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'FORM'])
const allowedAlignments = new Set(['left', 'center', 'right', 'justify'])

function isSafeUrl(value: string) {
  return value.startsWith('/') || value.startsWith('#') || /^https?:\/\//i.test(value) || /^mailto:/i.test(value) || /^tel:/i.test(value)
}

function unwrapElement(element: Element) {
  const parent = element.parentNode
  if (!parent) return
  while (element.firstChild) parent.insertBefore(element.firstChild, element)
  parent.removeChild(element)
}

function isSafeColor(value: string) {
  return /^#[0-9a-f]{3,8}$/i.test(value) || /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i.test(value)
}

function sanitizeElement(element: Element) {
  if (removableTags.has(element.tagName)) {
    element.remove()
    return
  }

  if (!allowedTags.has(element.tagName)) {
    unwrapElement(element)
    return
  }

  const href = element instanceof HTMLAnchorElement ? element.getAttribute('href') || '' : ''
  const src = element instanceof HTMLImageElement ? element.getAttribute('src') || '' : ''
  const alt = element instanceof HTMLImageElement ? element.getAttribute('alt') || '' : ''
  const color = element instanceof HTMLElement ? element.style.color || element.getAttribute('color') || '' : ''
  const backgroundColor = element instanceof HTMLElement ? element.style.backgroundColor || '' : ''
  const textAlign = element instanceof HTMLElement ? element.style.textAlign || element.getAttribute('align') || '' : ''

  for (const attribute of Array.from(element.attributes)) element.removeAttribute(attribute.name)

  if (element instanceof HTMLElement) {
    const safeStyles: string[] = []
    if (isSafeColor(color)) safeStyles.push(`color: ${color}`)
    if (isSafeColor(backgroundColor)) safeStyles.push(`background-color: ${backgroundColor}`)
    if (allowedAlignments.has(textAlign)) safeStyles.push(`text-align: ${textAlign}`)
    if (safeStyles.length) element.setAttribute('style', safeStyles.join('; '))
  }

  if (element instanceof HTMLAnchorElement) {
    if (isSafeUrl(href)) {
      element.href = href
      if (/^https?:\/\//i.test(href)) {
        element.target = '_blank'
        element.rel = 'noopener noreferrer'
      }
    }
  }

  if (element instanceof HTMLImageElement) {
    if (isSafeUrl(src)) {
      element.src = resolveProductImage(src)
      element.alt = alt
      element.loading = 'lazy'
    } else {
      element.remove()
    }
  }
}

export function plainTextFromProductHtml(html: string) {
  if (typeof document === 'undefined') {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  }

  const template = document.createElement('template')
  template.innerHTML = html
  return (template.content.textContent || '').replace(/\s+/g, ' ').trim()
}

export function sanitizeProductHtml(html: string) {
  if (typeof document === 'undefined') return ''

  const template = document.createElement('template')
  template.innerHTML = html

  for (const element of Array.from(template.content.querySelectorAll('*'))) {
    sanitizeElement(element)
  }

  return template.innerHTML
}
