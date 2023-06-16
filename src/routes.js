const { Router } = require('express');
const routes = Router();

const { produtos } = require('./mocks/produtos.json');
const { vagas } = require('./mocks/vagas.json');

routes.get("/", (request, response) =>
    response.render("home.html"));

routes.get("/produtos", (request, response) =>
    response.render("produtos.html", { produtos }));

routes.get("/produtos/:id", ({ params }, response) => {
    const { id } = params;
    const produto = produtos.find((produto) => produto.id === Number(id));

    if (!id || !Number(id) || Number(id) <= 0 || !produto) {
        response.render("not-found.html");
        return
    }

    response.render("detalhes-produto.html", { produto });
});

routes.get("/trabalhe_conosco", (request, response) => {
    response.render("trabalhe-conosco.html", { vagas: JSON.stringify(vagas) });
});

routes.get("/orcamento", (request, response) => {
    response.render("orcamento.html");
});

routes.get("/sobre_nos", (request, response) => {
    response.render("sobre-nos.html");
});

module.exports = routes;