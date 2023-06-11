var database = require("../database/config")


function listarLivroQuizz() {
    var instrucao = `
        SELECT fkLivro, count(fkLivro) as 'numero_de_fav' from quizz GROUP BY fkLivro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrarResultado(fkUsuario, fkLivro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, fkLivro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados
    var instrucao = `
        INSERT INTO quizz (fkUsuario, fkLivro) VALUES ('${fkUsuario}', '${fkLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


module.exports = {
    cadastrarResultado,
    listarLivroQuizz
};