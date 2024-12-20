const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('error', (err) => {
    console.error('Request error:', err);
    res.statusCode = 400;
    res.end('Bad Request');
  });

  req.on('end', () => {
    try {
      console.log('Received body:', body);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Request received successfully!');
    } catch (error) {
      console.error('Error processing request:', error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});