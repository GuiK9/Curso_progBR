const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var aluno = require('./routes/script')

const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/aluno", aluno)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
 