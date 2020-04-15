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
        res.send(records.recordset[0]);
        
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
        res.send(records.recordset[0]);
        
    });
  });
});

//Get products by page
app.get('/api/v1/web/products/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let page = parseInt(req.query.page);
    let offset = parseInt(req.query.productsPerPage);
      
    // Query to the database and get the records
    request.query(
    "SELECT Product_ID, Product_Name, Product_Description, Product_Unit_Price_MXN, Product_Icon "+
    "FROM dbo.Products OFFSET " + offset + " * " + page + "ROWS FETCH NEXT " + offset + " ROWS ONLY;", 
    function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset[0]);
        
    });
  });
});

// Get product by ID
app.get('/api/v1/web/products/:productId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let productId = req.params.productId;
      
    // Query to the database and get the records
    request.query("SELECT Product_ID, Product_Name, Product_Description, Product_Unit_Price_MXN, Product_Icon FROM dbo.Products WHERE Product_ID = '" + 
    productId + "';", 
    function (err, records) {
        
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        res.send(records.recordset[0]);
        
    });
  });
});

/**
 *  POST Methods
 */

// Create new address
app.post('/api/v1/web/addresses/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    request.query("SELECT TOP 1 Address_ID FROM dbo.Addresses ORDER BY Address_ID DESC;", function (err, records) {
        
      if (err){
        console.log(err);
        res.send(err);
      }

      let request = new mssql.Request();

      let addressId;
      if(records.recordset.length>0){
        let latestId = records.recordset[0]["Address_ID"];
        addressId = getNextID(latestId, "a", 10);
      } else {
        addressId = "a000000000";
      } 
      let addressStreetName = req.body.streetName;
      let addressExteriorNumber = req.body.exteriorNumber;
      let addressInteriorNumber = req.body.interiorNumber;
      let addressResidentialArea = req.body.residentialArea;
      let addressZipCode = req.body.zipCode;
      let addressState = req.body.state;
      let addressCity = req.body.city;
      let customerId = req.body.customer;
        
      // Query to the database and get the records
      request.query("INSERT INTO dbo.Addresses VALUES('" + 
      addressId +  "','" + 
      addressStreetName + "','" + 
      addressExteriorNumber + "','" + 
      addressInteriorNumber + "','" + 
      addressResidentialArea + "','" + 
      addressZipCode + "','" + 
      addressState + "','" + 
      addressCity + "','" + 
      customerId + "');", 
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
});

 // Create new customer
app.post('/api/v1/web/customers/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let customerId = req.body.customerId;
    let customerName = req.body.name;
    let customerLastName = req.body.lastName;
    let customerPass = req.body.pwd;
    customerPass = sjcl.encrypt("secretkey",customerPass);
    let customerDateOfBirth = req.body.dob;
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
    customerRegistrationDate + "','" +
    "av00000003');", 
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
 * PUT Methods
 */

 // Update address
app.put('/api/v1/web/addresses/:addressId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {

    if (err){
      console.log(err);
      res.send(err);
    }

    let request = new mssql.Request();

    let addressId = req.params.addressId;
    let addressStreetName = req.body.streetName;
    let addressExteriorNumber = req.body.exteriorNumber;
    let addressInteriorNumber = req.body.interiorNumber;
    let addressResidentialArea = req.body.residentialArea;
    let addressZipCode = req.body.zipCode;
    let addressState = req.body.state;
    let addressCity = req.body.city;
      
    // Query to the database and get the records
    request.query("UPDATE dbo.Addresses SET " + 
    "Address_Street_Name = '" + addressStreetName + "', " + 
    "Address_Exterior_Number = '" + addressExteriorNumber + "', " + 
    "Address_Interior_Number = '" + addressInteriorNumber + "', " + 
    "Address_Residential_Area = '" + addressResidentialArea + "', " + 
    "Address_ZIP_Code = '" + addressZipCode + "', " + 
    "Address_State = '" + addressState + "', " + 
    "Address_City = '" + addressCity + "' " + 
    "WHERE Address_ID = '" + addressId + "';", 
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

 // Update avatar
 app.put('/api/v1/web/customers/:customerId/avatar/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {

    if (err){
      console.log(err);
      res.send(err);
    }

    let request = new mssql.Request();

    let customerId = req.params.customerId;
    let avatarId = req.body.avatarId;

    // Query to the database and get the records
    request.query("UPDATE dbo.Customers SET " + 
    "Avatar_ID = '" + avatarId + "' " + 
    "WHERE Customer_ID = '" + customerId + "';", 
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