const express = require('express');
const bodyParser = require('body-parser');
const familyRoutes = require('./routes/family');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Usar las rutas
app.use('/api/family', familyRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});