// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8400
server.listen(8400);
console.log("Server listening on port 8400 :  http://127.0.0.1:8400/");
