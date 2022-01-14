const express = require('express')
const bodyParser = require('body-parser')
const app = express() 
const PORT = 3000

let consoleBody = (req, res, next) => {
    console.log(req.body)
    next()
}




let hello = (req, res) => { 
    res.send("Hello world")
}

app.use("/", bodyParser.json())
app.use("/", consoleBody)
app.get("/", hello)

app.post("/", hello)


app.listen(PORT, () =>{
    console.log(`server Running on port: ${PORT}`)
})