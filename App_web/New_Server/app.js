var http = require ('http');

var servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    respuesta.write('<h3>SERVER BÁSICO CON NODE.JS</h3>');
    console.log('peticion web');
    respuesta.end();
});

servidor.listen(3000);
console.log('Ejecutando un server local en node.js');
