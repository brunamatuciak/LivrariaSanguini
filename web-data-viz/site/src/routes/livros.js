var express = require("express");
var router = express.Router();


var livrosController = require("../controllers/livrosController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /livros/listar
    livrosController.listar(req, res);
});

router.get("/consultar/:idLivro", function (req, res) {
    // função a ser chamada quando acessar /livros/listar
    livrosController.consultar(req, res);
});



module.exports = router;