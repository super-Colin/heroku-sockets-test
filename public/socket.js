// const io = require('socket.io-client');
// import io from '/scripts/socket.io-client.js';
// import { io } from "/scripts/socket.io-client/dist/socket.io.js"; //works sort of,


console.log('Socket JS here');
const socket = io(`${window.location}`);



function sendMessage() {
  console.log('sending socket message');
  socket.emit('client_message', document.getElementById('input').value);
}
function updateOutput(message) {
  console.log('updating output');
  document.getElementById('output').innerHTML = message;
}


socket.on('connect', () => {
  console.log('Connected to socket server and upgraded connection');
})

socket.on('server_message', (data)=>{
  console.log('got message from socket server');
  updateOutput(data);
})