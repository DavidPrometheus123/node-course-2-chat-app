var socket = io();


//Connect and disconnect events listening
        
socket.on("connect", function() {
    console.log("Connected to the Server");
    
    socket.emit("createMessage", {
        from: "Natalie",
        text: "I forgot to flash the toilet!"
    });
});
        
socket.on("disconnect", function() {
    console.log("Disconnected from the server"); 
});



//listening for other events

socket.on("newMessage", function(message) {
    console.log("Here is your new message: ");
    console.log(message);
});


