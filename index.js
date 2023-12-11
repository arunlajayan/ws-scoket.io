const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('i am connected');
});

const wss = new websocket.WebSocketServer({ server });
wss.on('headers', (Headers, req) => {
    console.log(Headers);
   
})
wss.on('connection', (ws, req) => {
    // console.log(ws)
    ws.send('welcome to the websocket server');
    ws.on('message', data => {
        console.log(data.toString());
    })
}) 
server.listen(3000)