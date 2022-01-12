const express = require('express')
const app = express()
const socketIO = require('socket.io')
const path = require('path')


app.use('/', express.static(path.join(__dirname, "public")))


const server = app.listen(3000, () => {
    console.log('Running')
})


const messages = []

const io = socketIO(server)

io.on('connection', (socket) => {
    console.log("new connection")

    console.log(io.engine.clientsCount)

    socket.on('new_message', (data)=>{
        messages.push(data.msg)
        io.emit("update_messages", messages)
    })

})

