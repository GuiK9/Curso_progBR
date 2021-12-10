const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

let alunos = [
    {id: 0,nome: "Jose"},
    {id: 1,nome: "Maria"},
    {id: 2,nome: "Joao"},
    {id: 3,nome: "Marcos"}]

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body)
    let aluno = alunos[req.body.id]
    res.json(aluno)
})

 app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
 