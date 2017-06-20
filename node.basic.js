const http = require('http');
// import http from "http";

const port = 8412;
const ip = '127.0.0.1';

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello World...!</h1>');
}).listen(port, () => {
  console.log(`Server running at http://${ip}:${port}`);
});
