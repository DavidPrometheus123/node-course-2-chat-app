const path      = require("path"),
express         = require("express"),
socketIO        = require("socket.io"),
http            = require("http");

const app = express();

const server        = http.createServer(app),
      io            = socketIO(server),
      publicPath    = path.join(__dirname, "../public");

app.use(express.static(publicPath));



//socket IO routes

io.on("connection", function(socket) {
    console.log("Connection established!");
    
//beggining of connection

//Emitting the events
    
    
    //listening for events
    
    socket.on("createMessage", function(message) {
       console.log("Here is your new message: ", message); 
       
       io.emit("newMessage", {
           from:message.from,
           text:message.text,
           createdAt: new Date().getTime()
       });
    });
    
    socket.on("disconnect", function() {
       console.log("User Disconnected"); 
    });
});

//The end of socket IO routes



server.listen(process.env.PORT, process.env.IP, () => {
   console.log("Server is listening"); 
});
