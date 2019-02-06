var socket = io();


//Connect and disconnect events listening
        
socket.on("connect", function() {
    console.log("Connected to the Server");
});
        
socket.on("disconnect", function() {
    console.log("Disconnected from the server"); 
});



//listening for other events

socket.on("newMessage", function(message) {
    console.log("Here is your new message: ");
    console.log(message);
});


