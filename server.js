var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url === '/') {
        fs.readFile('./html_files/index.html', function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
    else if (req.url === '/dinho.jpg') {
        fs.readFile('./html_files/dinho.jpg', function (err, data) {
            res.writeHead(200, { "Content-Type": "omage/jpeg" });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Page not found");
    }
});
server.listen(8000);
console.log("Esperando request en el puerto 8000");