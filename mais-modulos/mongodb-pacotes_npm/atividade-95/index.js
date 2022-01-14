const express = require('express')
const path = require('path')
const socketIO = require('socket.io')

const app = express()


app.use("/", express.static(path.join(__dirname, 'public')))

const server = app.listen(3001, () => {
    console.log("o servidor está rodando")
})




const io = socketIO(server)

io.on('connection', (socket) => {
    console.log("new connection")

    socket.broadcast.emit('hello', {msg: "chegou um novo usuário"})


})