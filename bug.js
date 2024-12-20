const http = require('http');

const server = http.createServer((req, res) => {
  // The problem is here.  We're not handling the 'end' event properly.
  req.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk}`);
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});