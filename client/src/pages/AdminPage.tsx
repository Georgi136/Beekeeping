import React, { useState } from 'react'
import { API_BASE_URL, normalizeProductImageForForm, resolveProductImage } from '../config'

interface Product {
  id: number
  name: string
  category: 'honey' | 'equipment'
  price: number
  image: string
  description: string
  stock: number
}

// Base URL for images from the server
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    category: 'honey' as 'honey' | 'equipment',
    price: '',
    image: '',
    description: '',
    stock: ''
  })
  const [products, setProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [status, setStatus] = useState({ type: '', text: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple hardcoded password for now
    if (password === 'saki2024') {
      setIsAuthenticated(true)
      fetchProducts()
    } else {
      setLoginError('Грешна парола!')
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`)
      if (response.ok) {
        const data = await response.json()
        setProducts(data.map((p: Product) => ({
          ...p,
          image: resolveProductImage(p.image)
        })))
      }
      resetForm() // Clear form after fetching products
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setImagePreview(URL.createObjectURL(file))
    } else {
      setSelectedFile(null)
      setImagePreview(null)
    }
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    const imagePathForForm = normalizeProductImageForForm(product.image)
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(), // Keep price as string for form input
      image: imagePathForForm, // Store relative path or external URL
      description: product.description,
      stock: product.stock.toString()
    })
    // Scroll to form for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Сигурни ли сте, че искате да изтриете този продукт?')) return

    try {
      const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        fetchProducts()
        if (editingId === id) resetForm()
      }
    } catch (err) {
      console.error('Delete error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', category: 'honey', price: '', image: '', description: '', stock: '' })
    setEditingId(null)
    setStatus({ type: '', text: '' })
    setSelectedFile(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', text: '' })
    
    const submitFormData = new FormData()
    submitFormData.append('name', formData.name)
    submitFormData.append('category', formData.category)
    submitFormData.append('price', formData.price)
    submitFormData.append('description', formData.description)
    submitFormData.append('stock', formData.stock)

    if (selectedFile) {
      submitFormData.append('imageFile', selectedFile) // Key 'imageFile' matches multer config
    } else if (formData.image) {
      // If no new file, but an existing image path/URL is present, send it to preserve it
      // The backend will handle if it's a full URL or a relative path
      submitFormData.append('image', formData.image) 
    }

    try {
      const url = editingId 
        ? `${API_BASE_URL}/api/products/${editingId}`
        : `${API_BASE_URL}/api/products`
      
      const method = editingId ? 'PUT' : 'POST'
      
      const response = await fetch(url, { // No 'Content-Type' header for FormData
        method,
        body: submitFormData
      })

      if (response.ok) {
        setStatus({ type: 'success', text: editingId ? 'Продуктът е обновен!' : 'Продуктът е добавен успешно!' })
        resetForm()
        fetchProducts()
      } else {
        const err = await response.json()
        throw new Error(err.message || 'Error')
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Грешка при комуникация със сървъра.' })
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="login-box">
          <h2>Вход за администратори</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Парола</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                autoFocus
              />
            </div>
            {loginError && <div className="error-msg">{loginError}</div>}
            <button type="submit" className="btn btn-primary btn-block">Влез</button>
          </form>
        </div>
        <style>{`
          .admin-login-wrapper { display: flex; height: 80vh; align-items: center; justify-content: center; background: #f4f4f4; }
          .login-box { background: white; padding: 2.5rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
          .error-msg { color: #dc3545; margin-bottom: 1rem; font-size: 0.9rem; }
          .btn-block { width: 100%; padding: 0.8rem; }
        `}</style>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <div className="container">
        <header className="admin-header">
          <h1>Управление на продукти</h1>
          <div className="header-actions">
            <button onClick={resetForm} className="btn btn-secondary">Нов продукт</button>
            <button onClick={() => setIsAuthenticated(false)} className="btn btn-link">Изход</button>
          </div>
        </header>

        <div className="admin-grid">
          <section className="admin-form-card">
            <h3>{editingId ? 'Редактиране на продукт' : 'Добави Нов Продукт'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Наименование</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Категория</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option value="honey">🍯 Мед</option>
                  <option value="equipment">🔧 Оборудване</option>
                </select>
              </div>
              <div className="form-group">
                <label>Цена (лв)</label>
                <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Изображение (URL)</label>
                <input type="file" name="imageFile" onChange={handleFileChange} accept="image/*" />
                {imagePreview && (
                  <div className="image-preview-container">
                    <img src={imagePreview} alt="Image Preview" className="image-preview" />
                    <button type="button" className="remove-image-btn" onClick={() => { setSelectedFile(null); setImagePreview(null); setFormData(prev => ({ ...prev, image: '' })) }}>X</button>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Наличност</label>
                <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Описание</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={4} required />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Зареждане...' : editingId ? 'Запази промените' : 'Добави продукт'}
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} className="btn btn-secondary">Отказ</button>
                )}
              </div>
              {status.text && <div className={`status-msg ${status.type}`}>{status.text}</div>}
            </form>
          </section>

          <section className="admin-list">
            <h3>Списък продукти</h3>
            <div className="products-table">
              {products.map(p => (
                <div key={p.id} className="p-row">
                  <img src={p.image} alt={p.name} />
                  <div className="p-info">
                    <h4>{p.name}</h4>
                    <p className="p-meta">
                      <span className="badge">{p.category === 'honey' ? '🍯 Мед' : '🔧 Оборудване'}</span>
                      <span>{p.price} лв</span>
                      <span>Склад: {p.stock}</span>
                    </p>
                  </div>
                  <div className="p-actions">
                    <button onClick={() => handleEdit(p)} className="btn-icon" title="Редактирай">✏️</button>
                    <button onClick={() => handleDelete(p.id)} className="btn-icon delete" title="Изтрий">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <style>{`
        .admin-container { padding: 3rem 0; background: #f8f9fa; min-height: 100vh; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .header-actions { display: flex; gap: 1rem; align-items: center; }
        .admin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .admin-form-card { background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .form-actions { display: flex; gap: 1rem; margin-top: 1rem; }
        .products-table { display: flex; flex-direction: column; gap: 1rem; }
        .p-row { display: flex; align-items: center; gap: 1rem; background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .p-row img { width: 60px; height: 60px; object-fit: cover; border-radius: 0.25rem; }
        .p-info { flex: 1; }
        .p-info h4 { margin: 0 0 0.25rem 0; font-size: 1rem; }
        .p-meta { margin: 0; display: flex; gap: 1rem; font-size: 0.85rem; color: #666; align-items: center; }
        .badge { background: #eee; padding: 0.1rem 0.5rem; border-radius: 1rem; font-size: 0.75rem; }
        .p-actions { display: flex; gap: 0.5rem; }
        .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 0.4rem; border-radius: 0.25rem; transition: background 0.2s; }
        .btn-icon:hover { background: #f0f0f0; }
        .btn-icon.delete:hover { background: #fee2e2; }
        .status-msg { margin-top: 1rem; padding: 0.75rem; border-radius: 0.25rem; }
        .status-msg.success { background: #d1fae5; color: #065f46; }
        .status-msg.error { background: #fee2e2; color: #991b1b; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.375rem; font-size: 1rem;
        }
        .form-group label { display: block; margin-bottom: 0.4rem; font-weight: 500; font-size: 0.9rem; }
        .image-preview-container {
          margin-top: 1rem;
          position: relative;
          width: 100px;
          height: 100px;
          border: 1px solid #eee;
          border-radius: 0.25rem;
          overflow: hidden;
        }
        .image-preview { width: 100%; height: 100%; object-fit: cover; }
        .remove-image-btn { position: absolute; top: 5px; right: 5px; background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 24px; height: 24px; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        @media (max-width: 900px) { .admin-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}