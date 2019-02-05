const path = require("path");
const express = require("express"),
socketIO      = require("socket.io"),
http          = require("http");

const app = express();

const server    = http.createServer(app);







const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

server.listen(process.env.PORT, process.env.IP, () => {
   console.log("Server is listening"); 
});
