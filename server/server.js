const path = require("path");
const express = require("express");

const app = express();

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(process.env.PORT, process.env.IP, () => {
   console.log("Server is listening"); 
});
