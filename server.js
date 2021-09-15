
const http = require('http');
const express = require('express');
const {Server} = require('socket.io');

const app = express();
app.use(express.static('public'));
app.use('/scripts', express.static('node_modules'));

const server = http.createServer(app);
const io = new Server(server);

server.on('request', (req, res  )=>{
  if(req.method === 'GET'){
    if( ! req.headersSent){
      // res.setHeader('Content-Type', 'text/html; charset=utf8; application; ');
      // res.setHeader('X-Content-Type-Options', 'text/html; application');
    }
  }
})

io.on('connection', (socket)=>{
  console.log('user connected');
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
  socket.on('test', (msg)=>{
    console.log('test: ' + msg);
  });
  socket.on('client_message', (msg)=>{
    console.log('client_message: ' + msg);
    io.emit('server_message', msg);
  });
})

server.listen(process.env.PORT || 3000, ()=>{
  console.log('listening on port 3000');
});