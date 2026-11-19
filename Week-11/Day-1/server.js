const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('Welcome to the WebSocket server!');

  ws.on('message', (data) => {
    console.log(`Received: ${data}`);
    ws.send(`Server echo: ${data}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
