var quizzModel = require("../models/quizzModel");

var sessoes = [];

function listarLivroQuizz(req, res) {
    quizzModel.listarLivroQuizz()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function cadastrarResultado(res,res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkLivro = req.body.fkLivroServer;

    console.log('DENTRO DA CONTROLLER')

    quizzModel.cadastrarResultado(fkUsuario, fkLivro)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

}

module.exports = {
    cadastrarResultado,
    listarLivroQuizz,
}