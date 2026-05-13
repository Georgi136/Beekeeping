export interface Product {
  id: number
  name: string
  category: 'honey' | 'equipment'
  price: number
  image: string
  description: string
  stock: number
}

export interface OrderItem {
  productId: number
  quantity: number
  price: number
}

export interface Order {
  id: string
  customerName: string
  phone: string
  address: string
  items: OrderItem[]
  totalPrice: number
  createdAt: string
}

const DEFAULT_PRODUCT_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E'

// Sample products with prices
export const products: Product[] = [
  // Honey products
  {
    id: 1,
    name: 'Мед акация 1кг',
    category: 'honey',
    price: 18,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Чист пчелен мед от акация, богат на полезни вещества',
    stock: 50
  },
  {
    id: 2,
    name: 'Мед билков 1кг',
    category: 'honey',
    price: 16,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Поликлорен мед от разнообразни билки, уникален вкус',
    stock: 40
  },
  {
    id: 3,
    name: 'Мед гречиха 1кг',
    category: 'honey',
    price: 20,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Тъмен и интензивен мед от гречиха',
    stock: 30
  },
  {
    id: 4,
    name: 'Прополис 20г',
    category: 'honey',
    price: 12,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Чист прополис, сърцевина на пчелния кошер',
    stock: 25
  },

  // Equipment products
  {
    id: 5,
    name: 'Кошер Лангстрот',
    category: 'equipment',
    price: 120,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Полиуретанов кошер Лангстрот с кухи стени, отличен за начинаещи',
    stock: 15
  },
  {
    id: 6,
    name: 'Пчеларски костюм М',
    category: 'equipment',
    price: 85,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Защитен костюм за пчеларство, включва маска и ръкавици',
    stock: 20
  },
  {
    id: 7,
    name: 'Пчеларски дим',
    category: 'equipment',
    price: 45,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Ръчен дим за успокояване на пчелите, легла се отваря лесно',
    stock: 18
  },
  {
    id: 8,
    name: 'Пчеларски нож',
    category: 'equipment',
    price: 35,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Острозаточен нож за орязване на восъчни наставления',
    stock: 25
  },
  {
    id: 9,
    name: 'Вилица за рамки',
    category: 'equipment',
    price: 15,
    image: DEFAULT_PRODUCT_IMAGE,
    description: 'Специална вилица за безопасно изваждане на рамките',
    stock: 30
  },
  {
    id: 10,
    name: 'Комплект восъчни листове',
    category: 'equipment',
    price: 25,
    image: DEFAULT_PRODUCT_IMAGE,
    description: '5 брой восъчни листове, висока честота',
    stock: 40
  }
]

// In-memory orders storage
export let orders: Order[] = []

export function addOrder(order: Order): Order {
  orders.push(order)
  return order
}

export function getOrders(): Order[] {
  return orders
}

export function addProduct(product: Omit<Product, 'id'>): Product {
  const id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
  const newProduct = { ...product, id }
  products.push(newProduct)
  return newProduct
}

export function updateProduct(id: number, updatedProduct: Omit<Product, 'id'>): Product | null {
  const index = products.findIndex(p => p.id === id)
  if (index === -1) return null
  products[index] = { ...updatedProduct, id }
  return products[index]
}

export function deleteProduct(id: number): boolean {
  const index = products.findIndex(p => p.id === id)
  if (index === -1) return false
  products.splice(index, 1)
  return true
}
