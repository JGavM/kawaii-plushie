const express = require("express");
const server = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
  });
  
app.listen(80, function () {
    console.log("Escuchando el puerto 80...");
});