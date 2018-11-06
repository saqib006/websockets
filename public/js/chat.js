'use strict';

var socket = io.connect("http://localhost:5000");

var message = document.getElementById("message"),
handle = document.getElementById("handle"),
btn = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback");



message.addEventListener('keypress', ()=>{
    socket.emit('typing', handle.value)
})

    btn.addEventListener('click', (e)=>{
        socket.emit('chat', {
            message: message.value,
            handle:handle.value
        })
})




socket.on('chat', (data)=>{
    feedback.innerHTML = "";
    output.innerHTML += `<p><b>${data.handle} : </b>${data.message}</p>`;
})


socket.on('typing', (data)=>{
    feedback.innerHTML = `<p><em> ${data} is typing </em></p>`
})