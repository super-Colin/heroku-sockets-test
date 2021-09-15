const socket = io(`${window.location}`);


function sendMessage() {
  console.log('sending socket message');
  socket.emit('client_message', document.getElementById('input').value); // A string
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
  updateOutput(data); // A string
})

socket.on('disconnect', () => {
  console.log('Disconnected from socket server');
  updateOutput("If you're seeing this the server probably went to sleep...zzzz...");
})
