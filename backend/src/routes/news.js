const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Crear noticia
router.post('/', async (req, res) => {
    const news = new News(req.body);
    try {
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Obtener todas las noticias
router.get('/', async (req, res) => {
    const news = await News.find().populate('category');
    res.json(news);
});

// Actualizar noticia
router.put('/:id', async (req, res) => {
    try {
        const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedNews);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Eliminar noticia
router.delete('/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;