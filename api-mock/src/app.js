import express from "express"
import conexao from "../infra/conexao.js"

const app = express()


app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!")
})

// Buscar todas as seleções
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes"

    conexao.query(sql, (erro, result) => {
        res.json(result)
    })
})

// Buscar id específico
app.get('/selecoes/:id', (req, res) => {
    const sql = "select * from selecoes where id=?"
    const id = req.params.id

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0])
    })
})

// Adicionar seleção por id
app.post('/selecoes', (req, res) => {
    const sql = "select from selecoes"

    selecoes.push(req, body)
    res.status(201), send('Cadastrado com sucesso!')
})

// Deletando ids
app.delete('/selecoes/:id', (req, res) => {
    const sql = "delete from selecoes where id=?"
    const id = req.params.id

    conexao.query(sql, id, (erro, result) => {
        res.send('Deletado com sucesso!')
    })

})

export default app