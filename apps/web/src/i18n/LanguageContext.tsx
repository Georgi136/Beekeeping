import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language, type TranslationKey } from './translations'
import { apiUrl } from '../config'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  homepageSettings: Record<string, string>
  homepageMeta: Record<string, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language
      if (saved) return saved
    }
    return 'bg'
  })
  const [homepageSettings, setHomepageSettings] = useState<Record<Language, Record<string, string>>>({ bg: {}, en: {} })
  const [homepageMeta, setHomepageMeta] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch(apiUrl('/api/site-settings'))
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (data?.homepage) {
          setHomepageSettings({ bg: data.homepage.bg || {}, en: data.homepage.en || {} })
          setHomepageMeta(data.homepage.meta || {})
        }
      })
      .catch(() => undefined)
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: TranslationKey): string => {
    return homepageSettings[language][key] || translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, homepageSettings: homepageSettings[language], homepageMeta }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
