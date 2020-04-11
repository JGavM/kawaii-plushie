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
    }

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

/**
 * -----------------------------------------
 * Manager API v1
 * -----------------------------------------
 */


 /**
 *  GET Methods
 */

 // Get sales
app.get('/api/v1/management/sales', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let page = parseInt(req.query.page);  
    // Query to the database and get the records
    request.query("SELECT	s.Sale_ID, s.Order_ID, s.Sale_Applied_Discount, s.Sale_Date, s.Delivery_ID, "+
		"o.Customer_ID, o.Order_Status, "+
		"cus.Customer_Last_Name, cus.Customer_Name,"+
		"a.Article_ID, "+
		"p.Product_Name, p.Product_Unit_Price_MXN, "+
		"cat.Category_Name, "+
		"d.Delivery_Date, d.Expected_Arrival_Date, d.Actual_Arrival_Date "+
    "FROM	(((((dbo.Sales AS s " +
		"INNER JOIN dbo.Orders AS o ON s.Order_ID = o.Order_ID) "+
		"INNER JOIN dbo.Customers AS cus ON o.Customer_ID = cus.Customer_ID) "+
		"INNER JOIN dbo.Articles AS a ON s.Article_ID = a.Article_ID) "+
		"INNER JOIN dbo.Products AS p ON a.Product_ID = p.Product_ID) "+
		"INNER JOIN dbo.Categories AS cat ON p.Category_ID = cat.Category_ID) "+
		"INNER JOIN dbo.Deliveries AS d ON s.Delivery_ID = d.Delivery_ID "+
    "ORDER BY s.Order_ID, s.Sale_ID "+
    "OFFSET 100 * " + (page-1) + " ROWS "+
    "FETCH NEXT 100 ROWS ONLY;", 
    function (err, records) {
        
      if (err){
        console.log(err);
        res.send(err);
      }

      // Send records as a response
      let sales = [];
      for(let sale of records.recordset){
        saleJSON = {
          saleId: sale.Sale_ID,
          date: sale.Sale_Date,
          discount: sale.Sale_Applied_Discount,
          order: {
            id: sale.Order_ID,
            status: sale.Order_Status,
            customer: {
              id: sale.Customer_ID,
              name: sale.Customer_Name,
              lastName: sale.Customer_Last_Name
            }
          },
          article: {
            id: sale.Article_ID,
            name: sale.Product_Name,
            price: sale.Product_Unit_Price_MXN,
            category: sale.Category_ID
          },
          delivery: {
            id: sale.Delivery_ID,
            deliveryDate: sale.Delivery_Date,
            expectedArrivalDate: sale.Expected_Arrival_Date,
            actualArrivalDate: sale.Actual_Arrival_Date
          }
        };
        sales.push(saleJSON);
      }
      res.send(sales);
    });
  });
});

// Get suppliers
app.get('/api/v1/management/suppliers/', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let page = parseInt(req.query.page);  
    // Query to the database and get the records
    request.query("SELECT	* FROM dbo.Suppliers;", 
    function (err, records) {
        
      if (err){
        console.log(err);
        res.send(err);
      }

      // Send records as a response
      res.send(records.recordset);
    });
  });
});

// Get supplier by ID
app.get('/api/v1/management/suppliers/:supplierId', function (req, res) {
  mssql.connect(dataBaseConfig, function (err) {
    
    if (err){
      console.log(err);
    }

    let request = new mssql.Request();
    let supplierId = req.params.supplierId;  

    // Query to the database and get the records
    request.query("SELECT	* FROM dbo.Suppliers WHERE Supplier_ID = '" + supplierId + "';", 
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
      let productId;
      if(records.recordset.length>0){
        let latestId = records.recordset[0]["Product_ID"];
        productId = getNextID(latestId, "p", 10);
      } else {
        productId = "p000000000";
      }  
      
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
      let supplierId;
      if(records.recordset.length>0){
        let latestId = records.recordset[0]["Supplier_ID"];
        supplierId = getNextID(latestId, "s", 10);
      } else {
        supplierId = "s000000000";
      }  
      
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