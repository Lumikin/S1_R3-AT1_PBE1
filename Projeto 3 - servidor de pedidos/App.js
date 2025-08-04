// Projeto 3 - servidor de pedidos/App.js
// ---
// Chamando o Express para ultilizar ele 
const express = require("express");

//Criando uma instancia do express
const porta = 80 //Variavel para ultilizar a porta padrao HTTP
const Server = express()
Server.listen(porta, () => {
    console.log(`Bem Vindo ao servidor de pedidos, o servidor iniciou na porta ${porta}`)
})
 