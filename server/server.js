const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;
const socketIO = require("socket.io");

const app = express();

// creating hhtp server
const server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.sendFile("index.html");
// });

server.listen(PORT, () => {
  console.log("Server is up on port 3000");
});
