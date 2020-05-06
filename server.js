const express = require("express");
const mssql = require("mssql");
const sjcl = require("sjcl");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt");
const app = express();

const dataBaseConfig ={
    user: "jgavitom",
    password: "NotWelcome789",
    server: "cutieplushie.database.windows.net",
    database: "cutieplushie"
};

app.use(express.static(__dirname + "/public/dist/cutie-plushie"));
app.use( bodyParser.json() );

passport.use(jwtStrategry);

const management = require("./apis/management")(app,mssql,sjcl,jwt,passport,dataBaseConfig);
const web = require("./apis/web")(app,mssql,sjcl,jwt,passport,dataBaseConfig);

/**
 * -----------------------------------------
 * Useful functions
 * -----------------------------------------
 */

// This function gets the next available ID for a new record using a specific prefix.
function getNextID(latestId, prefix, totalLength){
  var targetId = latestId.substring(1);
  let IdNumber = parseInt(targetId);
  IdNumber +=  1;
  targetId = IdNumber.toString();
  while(targetId.length != (totalLength - prefix.length)){
    targetId = "0" + targetId;
  }
  targetId = prefix + targetId;
  return targetId;
}

/**
 * -----------------------------------------
 * Distributor API v1
 * -----------------------------------------
 */

  //Get Avatars
app.get('/api/v1/distributor/getavatars', function (req, res) {
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
   * -----------------------------------------
   * Supplier API v1
   * -----------------------------------------
   */
  
    //Get Avatars
    app.get('/api/v1/supplier/getavatars', function (req, res) {
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
 * -----------------------------------------
 * Server start on port 8080
 * -----------------------------------------
 */
app.listen(8080, function () {
    console.log("Escuchando el puerto 8080...");
});