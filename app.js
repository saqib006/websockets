const express = require('express');
const socket = require('socket.io');
const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.static('public'))



const server = app.listen(PORT)
const io = socket(server)
io.on('connection', (socket)=>{
    console.log('socket io', socket.id)

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    })
})
