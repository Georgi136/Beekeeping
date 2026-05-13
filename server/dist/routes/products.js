"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const upload_1 = require("../upload");
function resolveImageUrl(req, image) {
    if (!image)
        return image;
    const trimmed = image.trim();
    if (trimmed.startsWith('/uploads/')) {
        return `${req.protocol}://${req.get('host')}${trimmed}`;
    }
    if (trimmed.startsWith('uploads/')) {
        return `${req.protocol}://${req.get('host')}/${trimmed}`;
    }
    return trimmed;
}
function formatProduct(req, product) {
    return {
        ...product,
        image: resolveImageUrl(req, product.image)
    };
}
const router = (0, express_1.Router)();
// GET all products
router.get('/', (req, res) => {
    res.json(data_1.products.map((product) => formatProduct(req, product)));
});
// GET product by ID
router.get('/:id', (req, res) => {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const productId = parseInt(idParam, 10);
    const product = data_1.products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(formatProduct(req, product));
});
// POST a new product with image upload
router.post('/', upload_1.upload.single('imageFile'), (req, res) => {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    // Explicitly map and parse types to ensure data integrity
    const productData = {
        name: req.body.name,
        category: req.body.category,
        price: parseFloat(req.body.price) || 0,
        description: req.body.description,
        stock: parseInt(req.body.stock, 10) || 0,
        image: imageUrl
    };
    const newProduct = (0, data_1.addProduct)(productData);
    res.status(201).json(newProduct);
});
// PUT update a product
// Use upload.single for PUT as well, to allow updating the image
router.put('/:id', upload_1.upload.single('imageFile'), (req, res) => {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idParam, 10);
    let imageUrl = req.body.image; // Assume existing image URL if no new file
    if (req.file) {
        imageUrl = `/uploads/${req.file.filename}`; // New file uploaded
    }
    const updatedProductData = {
        name: req.body.name,
        category: req.body.category,
        price: parseFloat(req.body.price) || 0,
        description: req.body.description,
        stock: parseInt(req.body.stock, 10) || 0,
        image: imageUrl
    };
    const updated = (0, data_1.updateProduct)(id, updatedProductData);
    if (!updated)
        return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
});
// DELETE a product
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deleted = (0, data_1.deleteProduct)(id);
    if (!deleted)
        return res.status(404).json({ error: 'Product not found' });
    res.status(204).send();
});
exports.default = router;
