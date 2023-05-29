var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM quizz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function consultar(idLivro) {
    var instrucao = `
        SELECT * FROM livros where id = ${idLivro}`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    consultar
};


