// atribuiu o express a uma variavel
const express = require('express');

// inicializando o express e um servidor web
const app = express();

app.set("view engine","ejs");
//app.set("views","view");

app.use(express.static("public"));

// recebe a rota e uma função
app.get('/', (req,res) => {
    res.render('home');   
});


// app.listen() recebe a porta e uma função de callback
app.listen(3000,() => {
    console.log('Rodando na porta 3000!');
});