import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import ReactGA from 'react-ga4'

// Initialize Google Analytics
ReactGA.initialize('G-D9FP0ZFK1S')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)