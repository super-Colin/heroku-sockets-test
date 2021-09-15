
const http = require('http');
const express = require('express');
const {Server} = require('socket.io');

const app = express();
app.use(express.static('public'));
app.use('/scripts', express.static('node_modules'));

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket)=>{
  console.log('user connected: ' + socket.id);
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
  socket.on('client_message', (msg)=>{
    console.log('client_message: ' + msg);
    io.emit('server_message', msg);
  });
})

server.listen(process.env.PORT || 3000, ()=>{
  console.log('listening on port 3000');
});