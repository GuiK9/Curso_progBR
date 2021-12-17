const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')

let users = [{
        id: 0,
        name: "guilherme",
        phone: "(00) 0000 "
    },
    {
        id: 1,
        name: "thiago",
        phone: "(00) 0000 "
    }, {
        id: 2,
        name: "letícia",
        phone: "(00) 0000 "
    },
]

app.set("views", path.join(__dirname, 'views')) //app.set("viwes") o ejs sempre procurra essa chave
app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render('user', {
        users
    })

})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})