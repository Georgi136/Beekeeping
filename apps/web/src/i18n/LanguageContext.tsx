import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language, type TranslationKey } from './translations'
import { apiUrl } from '../config'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  homepageSettings: Record<string, string>
  homepageMeta: Record<string, string>
  storefrontSettings: Record<string, string>
  storefrontCurrency: 'BGN' | 'EUR'
  formatPrice: (priceBgn: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const defaultStorefrontSettings: Record<string, string> = {
  storeName: 'SakiMed',
  enabled: 'true',
  currency: 'BGN',
  locale: 'bg-BG',
  supportEmail: 'info@sakimed.com',
  supportPhone: '089 551 7056',
  minimumOrderAmount: '0',
  flatShippingFee: '0',
  freeShippingThreshold: '',
  pickupEnabled: 'true',
  courierEnabled: 'true',
  cashOnDeliveryEnabled: 'true',
  bankTransferEnabled: 'false',
  cardPaymentEnabled: 'false',
  inventoryTrackingEnabled: 'true',
  allowOutOfStockOrders: 'false',
  orderSuccessMessage: 'Благодарим за поръчката. Ще се свържем с Вас за потвърждение.',
  announcementEnabled: 'false',
  announcementText: '',
  googleReviewsUrl: 'https://share.google/EwaSOYGRTzTzdyF4C',
  facebookUrl: 'https://facebook.com/Saki2008',
  instagramUrl: '',
  tiktokUrl: '',
  termsUrl: '',
  privacyUrl: ''
}

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
  const [storefrontSettings, setStorefrontSettings] = useState<Record<string, string>>(defaultStorefrontSettings)

  useEffect(() => {
    fetch(apiUrl('/api/site-settings'))
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (data?.homepage) {
          setHomepageSettings({ bg: data.homepage.bg || {}, en: data.homepage.en || {} })
          setHomepageMeta(data.homepage.meta || {})
        }
        if (data?.storefront) {
          setStorefrontSettings({ ...defaultStorefrontSettings, ...data.storefront })
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

  const storefrontCurrency = storefrontSettings.currency === 'EUR' ? 'EUR' : 'BGN'
  const formatPrice = (priceBgn: number) => {
    const amount = storefrontCurrency === 'EUR' ? priceBgn / 1.95583 : priceBgn
    return new Intl.NumberFormat(storefrontCurrency === 'EUR' ? 'de-DE' : 'bg-BG', {
      style: 'currency',
      currency: storefrontCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, homepageSettings: homepageSettings[language], homepageMeta, storefrontSettings, storefrontCurrency, formatPrice }}>
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
