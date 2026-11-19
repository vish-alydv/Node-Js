const express = require('express');
const app = express();

const { Server } = require('socket.io');
const http = require('http');

const httpserver = http.createServer(app);

const io = new Server(httpserver);

let count = 0;


io.on('connection', (socket) => {
    count++;
    console.log("Active User:", count);
    socket.emit('active', count);
    console.log('Connection Establish');

    socket.emit('chat', "Hello from Server");

    socket.broadcast.emit("join","New User Joined");

    socket.on("msg",(cb) => {
        console.log(cb);
    })

    socket.on('disconnect', () => {
        count--;
        console.log("Active User:", count);
    });

    io.emit("announce","Only 5hr class left")
});

// Must be httpserver.listen (not app.listen) because io is attached to httpserver
httpserver.listen(3000, () => {
    console.log("Server Is Running on Port");
});
