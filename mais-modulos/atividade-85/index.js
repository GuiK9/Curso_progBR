const express = require('express')
const path = require('path')


const app = express() //ele roda o construtor do express e coloca no app // é um objeto
const PORT = 5000



app.use("/meusite", express.static(path.join(__dirname, 'client')))


app.get("/", (req, res) => { 
    res.send("<h1>hello World froom GET</h1>")
})

app.post("/", (req, res) => {  
   res.send("<h1>hello World from POST</h1>")
})

app.put("/", (req, res) => {  
    res.send("<h1>hello World from PUT</h1>")
 })

 app.delete("/", (req, res) => {  
    res.send("<h1>hello World from DELETE</h1>")
 })

app.listen(PORT, () =>{
    console.log(`server Running on port: ${PORT}`)
})