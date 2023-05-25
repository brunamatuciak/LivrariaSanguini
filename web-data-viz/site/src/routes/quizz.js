var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /quizz/cadastrar
    quizzController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /quizz/listar
    quizzController.listar(req, res);
});