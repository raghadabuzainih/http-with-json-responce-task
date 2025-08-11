"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.method == 'GET') {
        if (req.url == '/') {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Welcome to the server' }));
        }
        else if (req.url == '/about') {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'This is the about route' }));
        }
        else
            errorResponce(res);
    }
    else {
        errorResponce(res);
    }
});
function errorResponce(res) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Route not found' }));
}
server.listen(3000);
