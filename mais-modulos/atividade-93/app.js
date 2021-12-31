const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const linkrouter = require('./routes/linkRoutes')


mongoose.connect('mongodb://127.0.0.1:27017/links')

let db = mongoose.connection

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { console.log("Banco carregado") })


app.use('/', linkrouter)



app.listen(PORT, () => {
    console.log("O servidor está rodando na porta: " + PORT)
})