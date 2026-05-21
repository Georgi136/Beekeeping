"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.products = void 0;
exports.addOrder = addOrder;
exports.getOrders = getOrders;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const DEFAULT_PRODUCT_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E';
// Sample products with prices
exports.products = [
    // Honey products
    {
        id: 1,
        name: 'Акациев мед 1 кг',
        category: 'honey',
        price: 18,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Светъл и нежен акациев мед от собствени пчелини, подходящ за чай, закуска и ежедневна употреба',
        stock: 50
    },
    {
        id: 2,
        name: 'Билков мед 1 кг',
        category: 'honey',
        price: 16,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Полифлорен мед от разнообразна растителност с плътен аромат и балансиран вкус',
        stock: 40
    },
    {
        id: 3,
        name: 'Мед от елда 1 кг',
        category: 'honey',
        price: 20,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Тъмен мед с характерен, наситен вкус и богат аромат',
        stock: 30
    },
    {
        id: 4,
        name: 'Прополис 20 г',
        category: 'honey',
        price: 12,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Чист прополис от пчелина - натурален продукт за домашна употреба',
        stock: 25
    },
    // Equipment products
    {
        id: 5,
        name: 'Кошер Лангстрот',
        category: 'equipment',
        price: 120,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Полиуретанов кошер Лангстрот с добра изолация, подходящ както за начинаещи, така и за опитни пчелари',
        stock: 15
    },
    {
        id: 6,
        name: 'Пчеларски костюм М',
        category: 'equipment',
        price: 85,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Удобен защитен костюм за пчеларство с було и ръкавици',
        stock: 20
    },
    {
        id: 7,
        name: 'Пчеларска дималка',
        category: 'equipment',
        price: 45,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Практична дималка за спокойно обслужване на пчелните семейства',
        stock: 18
    },
    {
        id: 8,
        name: 'Пчеларски нож',
        category: 'equipment',
        price: 35,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Остър нож за разпечатване на восъчни пити преди центрофугиране',
        stock: 25
    },
    {
        id: 9,
        name: 'Вилица за рамки',
        category: 'equipment',
        price: 15,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Специална пчеларска вилица за разпечатване и работа с рамки',
        stock: 30
    },
    {
        id: 10,
        name: 'Комплект восъчни листове',
        category: 'equipment',
        price: 25,
        image: DEFAULT_PRODUCT_IMAGE,
        description: 'Комплект от 5 восъчни основи с високо качество',
        stock: 40
    }
];
// In-memory orders storage
exports.orders = [];
function addOrder(order) {
    exports.orders.push(order);
    return order;
}
function getOrders() {
    return exports.orders;
}
function addProduct(product) {
    const id = exports.products.length > 0 ? Math.max(...exports.products.map(p => p.id)) + 1 : 1;
    const newProduct = { ...product, id };
    exports.products.push(newProduct);
    return newProduct;
}
function updateProduct(id, updatedProduct) {
    const index = exports.products.findIndex(p => p.id === id);
    if (index === -1)
        return null;
    exports.products[index] = { ...updatedProduct, id };
    return exports.products[index];
}
function deleteProduct(id) {
    const index = exports.products.findIndex(p => p.id === id);
    if (index === -1)
        return false;
    exports.products.splice(index, 1);
    return true;
}
