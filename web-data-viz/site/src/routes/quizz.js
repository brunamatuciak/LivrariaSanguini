var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");



router.get("/listarLivroQuizz", function (req, res) {
    // função a ser chamada quando acessar /quizz/listar
    quizzController.listarLivroQuizz(req, res);
});

router.post("/cadastrarResultado", function (req,res) {
    quizzController.cadastrarResultado(req, res)
})

module.exports = router;