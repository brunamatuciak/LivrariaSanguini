var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM quizz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkUsuario, fkLivro) {
    var instrucao = `
        INSERT INTO quizz VALUES ('${fkUsuario}','${fkLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
};