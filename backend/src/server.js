const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categories');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

// Rutas
app.use('/api/categories', categoryRoutes);
app.use('/api/news', newsRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});