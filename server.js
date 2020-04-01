const express = require("express");
const mssql = require("mssql");
const sjcl = require("sjcl");
const app = express();

const dataBaseConfig ={
    user: "jgavitom",
    password: "NotWelcome789",
    server: "cutieplushie.database.windows.net",
    database: "cutieplushie"
};

app.use(express.static(__dirname + "/public/dist/cutie-plushie"));

/**
 * -----------------------------------------
 * Customer API v1
 * -----------------------------------------
 */

/**
 *  GET Methods
 */

 // Get avatars
app.get('/api/v1/web/avatars', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
       
    // Query to the database and get the records
    request.query("SELECT * FROM Avatars", function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset);
        
    });
  });
});

app.get('/api/v1/web/avatars/:avatarId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let avatarId = req.params.avatarId;
       
    // Query to the database and get the records
    request.query("SELECT * FROM dbo.Avatars WHERE Avatar_ID = '" + avatarId + "';", function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset);
        
    });
  });
});

// Get currency rates
app.get('/api/v1/web/currencyrates', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
       
    // Query to the database and get the records
    request.query("SELECT * FROM dbo.Currency_Rates", function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset);
        
    });
  });
});

app.get('/api/v1/web/currencyrates/:currencyId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let currencyId = req.params.currencyId;
       
    // Query to the database and get the records
    request.query("SELECT * FROM dbo.Currency_Rates WHERE Currency_ID = '" + currencyId + "';", function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset);
        
    });
  });
});

/**
 *  POST Methods
 */

 // Create new customer
 app.post('/api/v1/web/customers/:customerId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let customerId = req.params.customerId;
    let customerName = req.params.name;
    let customerLastName = req.params.lastName;
    let customerPass = req.params.pwd;
    customerPass = sjcl.encrypt("secretkey",customerPass);
    let customerDateOfBirth = req.params.dob;
    let today = new Date();
    let customerRegistrationDate = today.getFullYear() + 
                                  ((today.getMonth()+1)>9?today.getMonth()+1:"0"+(today.getMonth()+1)) +
                                  (today.getDate()>9?today.getDate():"0"+today.getDate())
       
    // Query to the database and get the records
    request.query("INSERT INTO dbo.Customers VALUES('" + 
    customerId +  "','" + 
    customerName + "','" + 
    customerLastName + "','" + 
    customerPass + "','" + 
    customerDateOfBirth + "','" + 
    customerRegistrationDate + "';", 
    function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(true);
        
    });
  });
});
  
/**
 * -----------------------------------------
 * Manager API v1
 * -----------------------------------------
 */

 /**
 * User Management API
 */

app.post('/api/v1/management/usermanagement/',function(req,res){

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
 * Server start on port 8080
 * -----------------------------------------
 */
app.listen(8080, function () {
    console.log("Escuchando el puerto 8080...");
});