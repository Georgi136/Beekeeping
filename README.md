# 🐝 Пчеларски Магазин САКИ - Дупница

Професионален пчеларски магазин с пълен набор от оборудване и консумативи за пчелари.

## 📋 Описание

Това е уеб приложение за пчеларски магазин "САКИ" в Дупница, България. Проектът включва:

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript

## 🛠️ Технологии

### Frontend
- React 18
- TypeScript
- Vite
- CSS Modules (вградени)

### Backend
- Node.js
- Express
- TypeScript
- CORS

## 🚀 Инсталация

1. Клонирайте репозиторитота
2. Инсталирайте зависимостите:

```bash
# Инсталиране на всички зависимости
npm run install:all

# Или инсталирайте отделно:
cd client && npm install
cd ../server && npm install
```

## ▶️ Стартиране

### Режим на разработка
```bash
npm run dev
```

Това стартира:
- Frontend на http://localhost:5173
- Backend на http://localhost:3001

### Продукционна версия
```bash
npm run build
npm start
```

## 📁 Структура на проекта

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React компоненти
│   │   ├── App.tsx        # Главен компонент
│   │   ├── main.tsx       # Точка на вход
│   │   └── index.css      # Глобални стилове
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/       # API маршрути
│   │   └── index.ts      # Сървър
│   ├── tsconfig.json
│   └── package.json
│
└── package.json           # Root package.json
```

## 📞 Контакти

- **Адрес**: гр. Дупница, България
- **Телефон**: +359 88 123 4567
- **Имейл**: info@saki-bee.bg

## 📄 Лиценз

MIT License