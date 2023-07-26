const app = require("./app");
const http = require('http');

// const port = 8080; 

//  const server = http.createServer((req, res) => {
//    res.end('Hello this is the building/maps team!');
//  });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

