const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta principal que sirve el HTML para React
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Capturar todas las demás rutas para SPA (Single Page Application)
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = server;