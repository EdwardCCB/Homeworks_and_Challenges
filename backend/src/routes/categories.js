const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Crear categoría
router.post('/', async (req, res) => {
    const category = new Category(req.body);
    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
    const categories = await Category.find().populate('news');
    res.json(categories);
});

// Actualizar categoría
router.put('/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Eliminar categoría
router.delete('/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;