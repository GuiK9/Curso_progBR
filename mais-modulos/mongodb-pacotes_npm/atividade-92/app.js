const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000

const LinkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: String,
    click: {type: Number, default: 0}
})

const Link = mongoose.model('Link', LinkSchema)

let link = new Link({
    title: "instagram",
    description: "Link para o instagram",
    url: "https://instagram.com",
    click: 0

})

link.save().then(doc =>{
    console.log(doc)
}).catch( err => {
    console.log(err)
})

/* const personSchema = new mongoose.Schema({
    name: String,
    age:String
})

const  Person = mongoose.model("person", personSchema)

let person = new Person({
    name:"josé", 
    age:23 
})

person.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})  */

mongoose.connect('mongodb://127.0.0.1:27017/links')

let db = mongoose.connection

db.on("error", ()=>{
    console.log("houve um erro")
})
db.once("open", ()=>{
    console.log("banco rodando")
})


/* mongoose.connect('mongodb://127.0.0.1:27017/blog').then(db => {
    console.log(db)
}).catch(err => {
    console.log(err)
}) */

/* mongoose.connect('mongodb://127.0.0.1:27017/blog', (err, db)=>{
    if(err) {
        console.log(err)
    }
    console.log(db)
}) */




app.get("/", (req, res) => {
    res.send("Hello world!!")
})

app.listen(PORT, () => {
    console.log("O servidor está rodando na porta: " + PORT)
})