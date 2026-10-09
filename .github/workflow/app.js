
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Application deployed successfully!\n");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 3000");
});
  
