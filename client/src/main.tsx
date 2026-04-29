import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import App from './App.tsx'
import ReactGA from 'react-ga4'

// Initialize Google Analytics
ReactGA.initialize('G-D9FP0ZFK1S')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)