import type { Tab } from './types'

export const categoryLabels: Record<string, string> = {
  HONEY: 'Мед',
  BEE_PRODUCTS: 'Пчелни продукти',
  BEEKEEPING_EQUIPMENT: 'Пчеларско оборудване',
  WAX_FOUNDATIONS: 'Восъчни основи',
  PACKAGING: 'Опаковки',
  OTHER: 'Друго'
}

export const unitLabels: Record<string, string> = {
  PCS: 'бр.',
  KG: 'кг',
  G: 'г',
  LITER: 'литър',
  PACKAGE: 'пакет'
}

export const paymentLabels: Record<string, string> = {
  CASH: 'В брой',
  CARD: 'Карта',
  BANK: 'Банка',
  OTHER: 'Друго'
}

export const expenseLabels: Record<string, string> = {
  RENT: 'Наем',
  ELECTRICITY: 'Ток',
  FUEL: 'Гориво',
  MATERIALS: 'Материали',
  SALARIES: 'Заплати',
  DELIVERY: 'Доставка',
  ADVERTISING: 'Реклама',
  OTHER: 'Друго'
}

export const tabLabels: Array<[Tab, string]> = [
  ['dashboard', 'Табло'],
  ['sales', 'Продажби'],
  ['products', 'Склад'],
  ['inventory-logs', 'Дневник склад'],
  ['reports', 'Справки'],
  ['expenses', 'Разходи'],
  ['wax', 'Восък'],
  ['wax-ledger', 'Восъчен отчет'],
  ['store', 'Онлайн магазин'],
  ['store-settings', 'Настройки магазин'],
  ['homepage', 'Начална страница'],
  ['configuration', 'Конфигурация'],
  ['settings', 'Настройки']
]

export const erpTabLabels = tabLabels.filter(([key]) => ['dashboard', 'sales', 'products', 'inventory-logs', 'reports', 'expenses', 'wax', 'wax-ledger', 'settings'].includes(key))
export const storeTabLabels = tabLabels.filter(([key]) => ['store', 'homepage', 'store-settings', 'configuration'].includes(key))

export const commonText = {
  requestFailed: 'Заявката не беше успешна.',
  operationFailed: 'Операцията не беше успешна.',
  fileFailed: 'Файлът не беше обработен.',
  noRows: 'Няма данни за избрания период.',
  edit: 'Редакция',
  cancel: 'Отказ',
  close: 'Затвори',
  save: 'Запази',
  delete: 'Откажи',
  date: 'Дата',
  product: 'Продукт',
  quantity: 'Количество',
  price: 'Цена',
  total: 'Общо',
  profit: 'Печалба',
  payment: 'Плащане',
  actions: 'Действия',
  note: 'Бележка'
}
