var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");



router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /quizz/listar
    quizzController.listar(req, res);
});

router.post("/cadastrarQuizz", function (req,res) {
    quizzController.cadastrarResultado(req, res)
})

module.exports = router;