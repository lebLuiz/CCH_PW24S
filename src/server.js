const express = require("express");
const nunjucks = require("nunjucks");

const routes = require('./routes');
const server = express();

//Configurar pasta publica
server.use(express.static("public"));

//Habilitar o server para usar as rotas
server.use(routes);

// Utilizando `Template Engine`
nunjucks.configure("src/views/", {
    express: server,
    noCache: true,
});

// 404 - NOT FOUND
server.use((req, res, next) => {
    res.render("not-found.html");
    next(false);
});

// Ligar o servidor:
server.listen(5500, () => console.log('🔥 Está rodando em: http://localhost:5500'));