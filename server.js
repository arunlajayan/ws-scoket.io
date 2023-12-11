const express = require('express');
const app = express();
const socketio = require('socket.io');


app.use(express.static(__dirname + '/public')); 
const expressServer = app.listen(5000);

const io = socketio(expressServer);

io.on('connection', (socket, req) => {
    socket.emit('messageFromServer', { data: 'welcome to server side' });
    socket.on('messageToServer', data => {
        console.log(data);
    })
})