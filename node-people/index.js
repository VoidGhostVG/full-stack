const express = require("express")
const app = express()
const PORT = 3000

// indicar para express ler body com json
app.use(express.json())

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
]

// função auxiliar
// retornar o Id
function buscarNomePorId(id) {
return nomes.filter((nome) => nome.id == id)
}

function buscarTimePorId(id) {
return times.filter((time) => time.id == id)
}

// pegar a posição do elemento do array por id
function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id)
}

function buscarIdTimes(id) {
    return times.findIndex((time) => time.id == id)
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
        res.json(buscarNomePorId(index))
    })

    // criando rota para excluir
    app.delete("/nomes/:id", (req, res) => {
        let index = buscarIdNomes(req.params.id)

        if(index === -1) {
            return res.status(404).send('Nome não encontrado!')
        }

        nomes.splice(index, 1)

        res.send('Nomes com id ${req.params.id} excluídos com sucesso!')
    })

    // criando rota para cadastrar
    app.post("/nomes", (req, res) => {
        nomes.push(req.body)
        res.status(201).send('Nome cadastrado com sucesso')
    })

    app.get("/times", (req, res) => {
        res.send(times)
    })

    app.get("/times/:id", (req, res) =>{
        let index = req.params.id
        res.json(buscarTimePorId(index))
    })

    app.delete("/times/:id", (req, res) => {
        let index = buscarIdTimes(req.params.id)

        if(index === -1) {
            return res.status(404).send('Time não encontrado!')
        }

        times.splice(index, 1)

        res.send('Time(s) com id ${req.params.id} excluído(s) com sucesso!')
    })

    app.post("/times", (req, res) => {
        times.push(req.body)
        res.status(201).send('Seus times foram cadastrados!')
    })