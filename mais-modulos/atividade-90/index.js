const express = require('express')
const fs = require('fs')
const app = express()

let user = {
    id: 0,
    name:"Guilherme",
    phone: "(99) 98448-8392"
}

function render(data, obj) {
    for (let key in obj){
        data = data.replace(`{{${key}}}`, obj[key])
        console.log(key)
    }
    return data
}

app.get("/", (req, res) => {
    fs.readFile('./templates/user.Titan', 'UTF8', (err, data) => {
        if(!err){
            render(data, user)
            res.send(render(data, user))

        }
    })
})

app.listen(3000, () => {
    console.log('Server running na porta 3000')
})