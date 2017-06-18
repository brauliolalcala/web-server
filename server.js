const express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

//Middleware
var middleware = require('./middleware');

//Configuraciones
app.use(express.static(__dirname + '/public'));
app.use(middleware.logger);



//Rutas

app.get('/about', middleware.requireAuthentication, (req, res) =>{
  res.send('Hola Mundo desde about');
});
app.get('/help', (req, res) =>{
  res.send('Hola Mundo desde help');
});


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
