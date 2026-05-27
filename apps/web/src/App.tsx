import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './i18n/LanguageContext'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import SpecialPage from './pages/SpecialPage'

function AdminRedirect() {
  useEffect(() => {
    const adminUrl = import.meta.env.VITE_ADMIN_URL?.replace(/\/$/, '') ?? (import.meta.env.DEV ? 'http://localhost:5174' : '/admin')
    window.location.replace(adminUrl)
  }, [])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/admin/*" element={<AdminRedirect />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/special/:slug" element={<SpecialPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </LanguageProvider>
  )
}

export default App
