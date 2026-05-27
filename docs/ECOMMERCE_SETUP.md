# E-Commerce Setup Guide for SAKI Beekeeping

## ✅ What's Been Implemented

### Backend (Express)
- **API Endpoints**:
  - `GET /api/products` - Get all products
  - `GET /api/products/:id` - Get single product
  - `POST /api/orders` - Create order
  - `GET /api/health` - Health check

- **Data Model**:
  - 10 sample products (5 honey, 5 equipment) with prices in BGN
  - Order storage (in-memory array)
  - Full product details (name, category, price, image, description, stock)

### Frontend (React)
- **Pages**:
  - `/` - Homepage (existing content + new buttons)
  - `/products` - Product listing with category filters
  - `/products/:id` - Product detail page
  - `/cart` - Shopping cart with item management
  - `/checkout` - Order form

- **Components**:
  - `ProductCard` - Product card with "Add to cart" button
  - `CartItem` - Cart item with quantity controls
  - `CheckoutForm` - Order form (name, phone, address)
  - `CartContext` - Global cart state with localStorage persistence

- **Features**:
  - Cart persists in localStorage
  - Category filtering (🍯 Honey / 🔧 Equipment)
  - Real-time cart badge in header
  - Bulgarian language support
  - Mobile responsive design

---

## 🚀 Installation & Setup

### 1. Install Dependencies

**Frontend:**
```bash
cd apps/web
npm install react-router-dom
npm install
```

**Backend:**
```bash
cd apps/api
npm install
```

### 2. Start the Servers

**Backend (Terminal 1):**
```bash
cd apps/api
npm run dev
```
Server runs on `http://localhost:3001`

**Frontend (Terminal 2):**
```bash
cd apps/web
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## 📋 API Endpoints Reference

### Get All Products
```bash
GET http://localhost:3001/api/products
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Мед акация 1кг",
    "category": "honey",
    "price": 18,
    "image": "...",
    "description": "...",
    "stock": 50
  }
]
```

### Get Single Product
```bash
GET http://localhost:3001/api/products/1
```

### Create Order
```bash
POST http://localhost:3001/api/orders
Content-Type: application/json

{
  "customerName": "Иван Петров",
  "phone": "+359 87 123 4567",
  "address": "ул. Пример 123, град Дупница",
  "items": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 18
    }
  ],
  "totalPrice": 36
}
```

**Success Response (201):**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "1698765432100",
    "customerName": "Иван Петров",
    "phone": "+359 87 123 4567",
    "address": "ул. Пример 123, град Дупница",
    "items": [...],
    "totalPrice": 36,
    "createdAt": "2024-10-31T10:10:32.100Z"
  }
}
```

---

## 📱 Frontend Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section |
| `/products` | All products with category filters |
| `/products/:id` | Product details |
| `/cart` | Shopping cart |
| `/checkout` | Order checkout form |

---

## 🎯 Usage Flow

1. **Browse Products**: Click "🍯 Купи мед" or "🔧 За пчелари" in hero
2. **Filter**: Use category buttons on `/products`
3. **View Details**: Click product card for full details
4. **Add to Cart**: Click "Добави в количката"
5. **Review Cart**: Click cart icon in header
6. **Checkout**: Fill name, phone, address
7. **Confirm**: Order submitted successfully

---

## 🛍️ Sample Products

### Honey Products
- Мед акация 1кг - 18 лв
- Мед билков 1кг - 16 лв
- Мед гречиха 1кг - 20 лв
- Прополис 20г - 12 лв

### Equipment
- Кошер Лангстрот - 120 лв
- Пчеларски костюм М - 85 лв
- Пчеларски дим - 45 лв
- Пчеларски нож - 35 лв
- Вилица за рамки - 15 лв
- Комплект восъчни листове - 25 лв

---

## 🔧 Next Steps (Future Enhancements)

1. **Database**: Replace in-memory array with MongoDB/PostgreSQL
2. **Authentication**: Add user accounts and order history
3. **Payment**: Integrate Stripe or PayPal
4. **Email**: Send confirmation emails to customers
5. **Search**: Add product search functionality
6. **Reviews**: Allow customer reviews
7. **Admin Panel**: Manage products and orders
8. **Inventory**: Real stock management
9. **Shipping**: Calculate shipping based on address
10. **Analytics**: Track sales and customer behavior

---

## 📂 File Structure

```
apps/web/src/
├── pages/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   └── CheckoutPage.tsx
├── components/
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   ├── CheckoutForm.tsx
│   ├── Header.tsx (updated with cart link)
│   └── Hero.tsx (updated with shop buttons)
├── context/
│   └── CartContext.tsx (new)
└── App.tsx (updated with routing)

apps/api/src/
├── routes/
│   ├── products.ts (new)
│   ├── orders.ts (new)
│   └── contact.ts (existing)
├── data.ts (new - products & orders storage)
└── index.ts (updated with new routes)
```

---

## 🧪 Testing

### Test Product Listing
```bash
curl http://localhost:3001/api/products
```

### Test Order Creation
```bash
curl -X POST http://localhost:3001/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test User",
    "phone": "+359 87 123 4567",
    "address": "Test Address 123",
    "items": [{"productId": 1, "quantity": 1, "price": 18}],
    "totalPrice": 18
  }'
```

---

## 🐛 Troubleshooting

### CORS Error
Make sure backend is running on port 3001 and the frontend is making requests to the correct URL.

### Cart Not Persisting
Check browser's localStorage is enabled. CartContext saves cart to `saki_bee_cart` key.

### Products Not Loading
Verify backend is running: `curl http://localhost:3001/api/health`

### Routing Not Working
Ensure `react-router-dom` is installed: `npm install react-router-dom`

---

## ✨ Features Included

✅ Product catalog with prices  
✅ Category filtering (Honey / Equipment)  
✅ Product detail pages  
✅ Add to cart functionality  
✅ Cart persistence (localStorage)  
✅ Cart badge with item count  
✅ Quantity controls  
✅ Remove from cart  
✅ Order checkout form  
✅ Success message after order  
✅ Responsive mobile design  
✅ Bulgarian language  
✅ Clean, modern UI  
✅ No authentication required  
✅ No database setup needed  

---

## 📝 Notes

- Cart data is stored in browser's localStorage
- Orders are stored in server memory (lost on restart)
- For production: Add database, authentication, payment processing
- Images are using placeholder URLs - replace with real product images
- No email notifications configured (add nodemailer for production)

---

## 🎨 Design System

The project uses CSS custom properties defined in `index.css`:
- `--color-primary`: #f59e0b (amber)
- `--color-secondary`: #1f2937 (dark)
- `--color-text-light`: #6b7280 (gray)
- `--color-white`: #ffffff

All new components follow the existing design system for consistency.
