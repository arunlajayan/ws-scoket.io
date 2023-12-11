const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('i am connected');
});
const io = socketio(server)
io.on('connection', (socket, req) => {
    // console.log(ws)
    socket.emit('welcome','welcome to the websocket server');
    socket.on('message', data => {
        console.log(data);
    }) 
}) 
server.listen(3000)