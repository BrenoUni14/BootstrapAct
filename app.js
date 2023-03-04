const express = require("express")
const app = express()

//---------------------------------------------------------------/
//criando uma rota para o diretório principal do domínio
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html")
})


//---------------------------------------------------------------/
//criando servidor web na porta 8081
app.listen(8081, function() {
    console.log("Servidor Ativo")
})