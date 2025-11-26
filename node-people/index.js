const express = require("express")
const app = express()
const PORT = 3000

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

// função auxiliar
// retornar o Id
function buscarNomePorId(id) {
return nomes.filter((nome) => nome.id == id)
}

app.listen(PORT, () => {
    console.log ("Servidor rodando no endereço http://localhost:${PORT}")
})

app.get("/", (req, res) => {
    res.send("Bem-vindo à página principal!")
})

app.get("/teste", (req, res) => {
        res.send("API node-people está funcionando")
    })

    app.get("/nomes", (req, res) => {
        res.send(nomes)
    })

    // buscando Id
    app.get("/nomes/:id", (req, res) =>{
        let index = req.params.id
        res.json(buscarNomePorId)(index)
    })