var livrosModel = require("../models/livrosModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    livrosModel.listar()
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



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var genero = req.body.generoserver;
    var subGenero = req.body.subGneroServer;
    var trechoDoLivro = req.body.trechoDoLivroServer;
    var comentario1 = req.body.comentario1Server;
    var comentario2 = req.body.comentario2Server;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (subGenero == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (trechoDoLivro == undefined) {
        res.status(400).send("Seu gênro está undefined!");
    } else if (comentario1 == undefined) {
        res.status(400).send("Seu subGênro está undefined!");
    }  else if (comentario2 == undefined) {
        res.status(400).send("Seu subGênro está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(titulo, genero, subgenero, trechoDoLivro, comentario1, comentario2)
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
}

module.exports = {
    cadastrar,
    listar,
    testar
}