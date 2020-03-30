const express = require("express");
const mssql = require("mssql");
const app = express();

const dataBaseConfig ={
    user: "jgavitom",
    password: "NotWelcome789",
    server: "cutieplushie.database.windows.net",
    database: "cutieplushie"
};

app.use(express.static(__dirname + "/public/dist/cutie-plushie"));

/**
 * Data View API
 */

app.get('/api/v1/web/dataview/getavatars', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
       
    // query to the database and get the records
    request.query('SELECT * FROM Avatars', function (err, records) {
        
        if (err){
          console.log(err);
        }

        // send records as a response
        res.send(records);
        
    });
  });
});

/**
 * User Management API
 */

app.post('/api/v1/web/usermanagement/',function(req,res){

});
  
app.listen(8080, function () {
    console.log("Escuchando el puerto 8080...");
});