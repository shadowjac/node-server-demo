var http = require('http'),
    url = require('url');
var saludador = require('./models/saludador');

var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>" + saludador.saludar(query.nombre) + "</h1>");
});
server.listen(8000);
console.log("Esperando request en el puerto 8000");