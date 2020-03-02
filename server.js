const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/dist/cutie-plushie"));

/*app.get('/', function (req, res) {
    res.send('Hello, World!');
  });
  */
  
app.listen(8080, function () {
    console.log("Escuchando el puerto 8080...");
});