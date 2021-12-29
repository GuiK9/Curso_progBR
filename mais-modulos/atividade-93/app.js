const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/links')

const LinkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0}
})

const Link = mongoose.model('Link', LinkSchema)
let db = mongoose.connection

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { console.log("Banco carregado") 

    app.get('/:title', async (req, res) => {

        let title = req.params.title

        try{

            let docs = await Link.findOne({title})
            console.log(docs)
            res.redirect(docs.url)

        } catch(err) {

            res.send(err)
        }

    })

})


app.get("/", (req, res) => {
    res.send("Hello world!!")
})

app.listen(PORT, () => {
    console.log("O servidor está rodando na porta: " + PORT)
})