// Projeto 2 - Servidor de Produtos/app.js
// ---
// Chamando o Express para ultilizar ele 
const express = require("express");

//Criando uma instancia do express
const porta = 80 //Variavel para ultilizar a porta padrao HTTP
const Server = express()
Server.listen(porta, () => {
    console.log(`Bem Vindo ao Servidor de Produtos, o servidor iniciou na porta ${porta}`)
})
 