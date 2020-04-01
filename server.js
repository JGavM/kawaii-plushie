const express = require("express");
const mssql = require("mssql");
const sjcl = require("sjcl");
const bodyParser = require("body-parser");
const app = express();

const dataBaseConfig ={
    user: "jgavitom",
    password: "NotWelcome789",
    server: "cutieplushie.database.windows.net",
    database: "cutieplushie"
};

app.use(express.static(__dirname + "/public/dist/cutie-plushie"));
app.use( bodyParser.json() );

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
    console.log(customerPass);
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
 * -----------------------------------------
 * Manager API v1
 * -----------------------------------------
 */


// Create new product
app.post('/api/v1/management/products/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    request.query("SELECT TOP 1 Product_ID FROM dbo.Products ORDER BY Product_ID DESC;", function (err, records) {
        
      if (err){
        console.log(err);
        res.send(err);
      }

      // Get next available ID
      let latestId = records.recordset[0]["Product_ID"];
      let productId = getNextID(latestId, "p", 10);
      
      let productName = req.body.name;
      let productDescription = req.body.description;
      let productUnitPrice = req.body.unitPrice;
      let productIcon = req.body.icon;
      let supplierId = req.body.supplier;
      let categoryId = req.body.category;
        
      // Query to the database and get the records
      request = new mssql.Request();
      request.query("INSERT INTO dbo.Products VALUES('" + 
      productId +  "','" + 
      productName + "','" + 
      productDescription + "'," + 
      productUnitPrice + ",'" + 
      productIcon + "'," + 
      "1,'" + 
      supplierId + "','" + 
      categoryId + "'," + 
      "0);", 
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

// Add new supplier
app.post('/api/v1/management/suppliers/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    request.query("SELECT TOP 1 Supplier_ID FROM dbo.Suppliers ORDER BY Supplier_ID DESC;", function (err, records) {
        
      if (err){
        console.log(err);
        res.send(err);
      }

      // Get next available ID
      let latestId = records.recordset[0]["Supplier_ID"];
      let supplierId = getNextID(latestId, "s", 10);
      
      // Parse the JSON body of the request
      let supplierName = req.body.name;
      let supplierContactName = req.body.contactName;
      let supplierPhoneNumber = req.body.phoneNumber;
      let supplierEmail = req.body.email;
        
      // Query to the database and get the records
      request = new mssql.Request();
      request.query("INSERT INTO dbo.Suppliers VALUES('" + 
      supplierId +  "','" + 
      supplierName + "','" + 
      supplierContactName + "','" + 
      supplierPhoneNumber + "','" + 
      supplierEmail + "'," + 
      "1);", 
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