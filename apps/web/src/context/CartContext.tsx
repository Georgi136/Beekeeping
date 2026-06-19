import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
  productId: number
  slug?: string
  name: string
  price: number
  quantity: number
  image: string
  stock?: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: { id: number; slug?: string; name: string; price: number; salePrice?: number | null; image: string; stock?: number }, quantity: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'saki_bee_cart'

function clampQuantity(quantity: number, stock?: number) {
  const safeQuantity = Math.max(1, Math.floor(quantity) || 1)
  return typeof stock === 'number' ? Math.min(safeQuantity, Math.max(0, stock)) : safeQuantity
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: { id: number; slug?: string; name: string; price: number; salePrice?: number | null; image: string; stock?: number }, quantity: number) => {
    const price = product.salePrice ?? product.price

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === product.id)
      
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id
            ? { ...item, quantity: clampQuantity(item.quantity + quantity, product.stock ?? item.stock), stock: product.stock ?? item.stock }
            : item
        )
      }
      
      return [
        ...prevCart,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price,
          quantity: clampQuantity(quantity, product.stock),
          image: product.image,
          stock: product.stock
        }
      ]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: clampQuantity(quantity, item.stock) }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
