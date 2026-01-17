// Import Node’s built-in HTTP module
const http = require("http");

// Define the port number
const PORT = 3000;

// Create an HTTP servera
const server = http.createServer((req, res) => {
  // 根路径 "/"
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World! This is my first Node.js App!!\n");
  }
  // API 路径 "/api/hello"
  else if (req.url === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from API route!" }));
  }
  // 其他路径
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
