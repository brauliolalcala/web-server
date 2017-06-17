const express = require('express');
var app = express();
const PORT = 3000;

//Middleware
var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log(`El middleware se está ejecutando`);
    next();
  },
  logger: (req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl} ${new Date().toString()}`);
    next();
  }
}
 app.use(middleware.logger);


//Configuraciones
app.use(express.static(__dirname + '/public'));

//Rutas

app.get('/about', middleware.requireAuthentication, (req, res) =>{
  res.send('Hola Mundo desde about');
});
app.get('/help', (req, res) =>{
  res.send('Hola Mundo desde help');
});


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
