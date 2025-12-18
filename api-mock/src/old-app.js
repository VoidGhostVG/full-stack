import express from "express"
import conexao from "../infra/conexao.js"

const app = express()

app.use(express.json())

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
app.post('/selecoes/', (req, res) => {
   const selecao = req.body
   const sql = "INSERT INTO selecoes SET?;"

   conexao.query(sql, selecao, () => {
    res.json({ mensagem: "Cadastrado(s) com sucesso" })
   })
})

// Deletando ids
app.delete('/selecoes/:id', (req, res) => {
    const sql = "delete from selecoes where id=?"
    const id = req.params.id

    conexao.query(sql, id, (erro, result) => {
        res.send('Deletado com sucesso!')
    })

})

// Editando ids
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const selecao = req.body
    const sql = "update selecoes set ? where id=?"

    conexao.query(sql, [selecao, id], () => {
        res.json({ mensagem: 'Alterado com sucesso' })
    })
})

export default app