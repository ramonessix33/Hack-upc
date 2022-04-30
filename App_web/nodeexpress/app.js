var express = require("express");

var app = express();

app.get('/contacto', function(peticion, respuesta) {
    respuesta.send('Ruta CONTACTO')

});

app.listen(3000, function(peticion, respuesta) {
    console.log("hola mundo");
})