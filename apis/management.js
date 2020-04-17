
/**
 * -----------------------------------------
 * Manager API v1
 * -----------------------------------------
 */

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

module.exports = function(app,mssql,sjcl,jwt,passport,dataBaseConfig){
 
/**
 *  GET Methods
 */

 //Get products by page
 app.get('/api/v1/management/products/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }
  
      let request = new mssql.Request();
      let page = parseInt(req.query.page);
      let offset = parseInt(req.query.productsPerPage);
        
      // Query to the database and get the records
      request.query(
      "SELECT p.Product_ID, p.Product_Name, p.Product_Description, p.Product_Unit_Price_MXN, p.Product_Icon, p.Active, p.Product_Active_Discount, p.Supplier_ID, p.Category_ID,"+
      "s.Supplier_Name, c.Category_Name "+
      "FROM (dbo.Products AS p INNER JOIN dbo.Suppliers AS s ON p.Supplier_ID = s.Supplier_ID) "+
      "INNER JOIN dbo.Categories AS c ON p.Category_ID = c.Category_ID "+
      "ORDER BY p.Product_ID " +
      "OFFSET " + offset + " * " + (page-1) + " ROWS FETCH NEXT " + offset + " ROWS ONLY;", 
      function (err, records) {
          
          if (err){
            console.log(err);
            res.send(err);
          }
  
          // Send records as a response
          let products = [];
        for(let product of records.recordset){
          productJSON = {
            productId: product.Product_ID,
            productName: product.Product_Name,
            productDescription: product.Product_Description,
            productUnitPriceMXN: product.Product_Unit_Price_MXN,
            productIcon: product.Product_Icon,
            active: product.Active,
            productActiveDiscount: product.Product_Active_Discount,
            supplier: {
              supplierId: product.Supplier_ID,
              supplierName: product.Supplier_Name,
            },
            category: {
              categoryId: product.Category_ID,
              categoryName: product.Category_Name,
            }
          };
          products.push(productJSON);
        }
        res.send(products);
          
      });
    });
  });

  app.get('/api/v1/management/products/:productId', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }
  
      let request = new mssql.Request();
      let productId = req.params.productId;
        
      // Query to the database and get the records
      request.query(
      "SELECT p.Product_ID, p.Product_Name, p.Product_Description, p.Product_Unit_Price_MXN, p.Product_Icon, p.Active, p.Product_Active_Discount, p.Supplier_ID, p.Category_ID, "+
      "s.Supplier_Name, c.Category_Name "+
      "FROM (dbo.Products AS p INNER JOIN dbo.Suppliers AS s ON p.Supplier_ID = s.Supplier_ID) "+
      "INNER JOIN dbo.Categories AS c ON p.Category_ID = c.Category_ID WHERE Product_ID = '" + productId + "';", 
      function (err, records) {
          
          if (err){
            console.log(err);
            res.send(err);
          }
  
          let products = [];
        for(let product of records.recordset){
          productJSON = {
            productId: product.Product_ID,
            productName: product.Product_Name,
            productDescription: product.Product_Description,
            productUnitPriceMXN: product.Product_Unit_Price_MXN,
            productIcon: product.Product_Icon,
            active: product.Active,
            productActiveDiscount: product.Product_Active_Discount,
            supplier: {
              supplierId: product.Supplier_ID,
              supplierName: product.Supplier_Name,
            },
            category: {
              categoryId: product.Category_ID,
              categoryName: product.Category_Name,
            }
          };
          products.push(productJSON);
        }
        res.send(products);
      });
    });
  });

  //Get top n most sold products
 app.get('/api/v1/management/mostsoldproducts/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }
  
      let request = new mssql.Request();
      let top = parseInt(req.query.top);
        
      // Query to the database and get the records
      request.query(
      "SELECT q.Product_ID, pp.Product_Name, c.Category_Name, q.Sales FROM "+
      "((SELECT TOP " + top + " p.Product_ID, COUNT(s.Sale_ID) AS Sales "+
      "FROM ((dbo.Products AS p INNER JOIN dbo.Articles AS a on p.Product_ID = a.Product_ID) "+
      "INNER JOIN dbo.Sales AS s ON a.Article_ID = s.Article_ID) "+
      "WHERE p.Active = 1 "+
      "GROUP BY p.Product_ID "+
      "ORDER BY sales) AS q INNER JOIN dbo.Products AS pp ON q.Product_ID = pp.Product_ID) "+
      "INNER JOIN dbo.Categories AS c ON c.Category_ID = pp.Category_ID;", 
      function (err, records) {
          
          if (err){
            console.log(err);
            res.send(err);
          }
  
          // Send records as a response
          let products = [];
        for(let product of records.recordset){
          productJSON = {
            productId: product.Product_ID,
            productName: product.Product_Name,
            productDescription: product.Product_Description,
            productUnitPriceMXN: product.Product_Unit_Price_MXN,
            productIcon: product.Product_Icon,
            active: product.Active,
            productActiveDiscount: product.Product_Active_Discount,
            supplier: {
              supplierId: product.Supplier_ID,
              supplierName: product.Supplier_Name,
            },
            category: {
              categoryId: product.Category_ID,
              categoryName: product.Category_Name,
            }
          };
          products.push(productJSON);
        }
          
      });
    });
  });
  
   // Get sales
  app.get('/api/v1/management/sales', passport.authenticate('jwt', { session: false }), function (req, res) {
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
          "a.Article_ID, a.Product_ID, "+
          "p.Product_Name, p.Product_Unit_Price_MXN, p.Category_ID, "+
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
            saleDate: sale.Sale_Date,
            saleAppliedDiscount: sale.Sale_Applied_Discount,
            order: {
              orderId: sale.Order_ID,
              orderStatus: sale.Order_Status,
              customer: {
                customerId: sale.Customer_ID,
                customerName: sale.Customer_Name,
                customerLastName: sale.Customer_Last_Name
              }
            },
            article: {
              articleId: sale.Article_ID,
              product: {
                productId: sale.Product_ID,
                productName: sale.Product_Name,
                productPrice: sale.Product_Unit_Price_MXN,
                category: {
                    categoryId: sale.Category_ID,
                    categoryName: sale.Category_Name
                }
              }
            },
            delivery: {
              deliveryId: sale.Delivery_ID,
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
  app.get('/api/v1/management/suppliers/', passport.authenticate('jwt', { session: false }), function (req, res) {
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
        let suppliers = [];
        for(let supplier of records.recordset){
          supplierJSON = {
            supplierId: supplier.Supplier_ID,
            supplierName: supplier.Supplier_Name,
            supplierContactName: supplier.Supplier_Contact_Name,
            supplierPhoneNumber: supplier.Supplier_Phone_Number,
            supplierMail: supplier.Supplier_Mail,
            active: supplier.Active
          };
          suppliers.push(supplierJSON);
        }
        res.send(suppliers);
      });
    });
  });
  
  // Get supplier by ID
  app.get('/api/v1/management/suppliers/:supplierId', passport.authenticate('jwt', { session: false }), function (req, res) {
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
        let suppliers = [];
        for(let supplier of records.recordset){
          supplierJSON = {
            supplierId: supplier.Supplier_ID,
            supplierName: supplier.Supplier_Name,
            supplierContactName: supplier.Supplier_Contact_Name,
            supplierPhoneNumber: supplier.Supplier_Phone_Number,
            supplierMail: supplier.Supplier_Mail,
            active: supplier.Active
          };
          suppliers.push(supplierJSON);
        }
        res.send(suppliers);
      });
    });
  });
  
  /**
   *  POST Methods
   */
  
  // Login
  app.post('/api/v1/management/login', function(req, res){
    mssql.connect(dataBaseConfig, function(err){
  
      if (err){
        console.log(err);
      }
  
      let userKey = req.body.key;
      let inputPass = req.body.pwd;   // Previously encoded
  
      let request = new mssql.Request();
      request.query("SELECT User_Name, User_Last_Name, User_Group, User_Password FROM dbo.Users WHERE User_ID = '" + userKey + "';",
      function (err, records) {
        if (err){
          console.log(err);
          res.send(err);
        }
  
        if(records.recordset.length === 1){
  
          let userPass = sjcl.decrypt("secretkey",records.recordset[0].User_Password);
  
          if(userPass != inputPass){
            res.status(401).send("Access denied");
            return;
          }
  
          let userName = records.recordset[0].User_Name;
          let userLastName = records.recordset[0].User_Last_Name;
          let userGroup = records.recordset[0].User_Group;
  
          let options = {};
          options.expiresIn = 1800;
          let secret = "SECRET_KEY"
          let token = jwt.sign({ userKey }, secret, options);
          res.send({
            userName: userName,
            userLastName:  userLastName,
            userGroup: userGroup,
            token
          });
        }
      });
    });
  
  });
  
  // Create new product
  app.post('/api/v1/management/products/', passport.authenticate('jwt', { session: false }), function (req, res) {
    
    if(req.user.userGroup != "ADMIN"){
      res.status(401).send("Unauthorized");
      return;
    }
  
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
        
        let productName = req.body.productName;
        let productDescription = req.body.productDescription;
        let productUnitPrice = req.body.productUnitPriceMXN;
        let productIcon = req.body.productIcon;
        let supplierId = req.body.supplierId;
        let categoryId = req.body.categoryId;
          
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
  app.post('/api/v1/management/suppliers/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if(req.user.userGroup != "ADMIN"){
        res.status(401).send("Unauthorized");
        return;
      }
  
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
        let supplierName = req.body.supplierNname;
        let supplierContactName = req.body.supplierContactName;
        let supplierPhoneNumber = req.body.supplierPhoneNumber;
        let supplierEmail = req.body.supplierEmail;
          
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
  
  // Create new user (No public use intended)
  app.post('/api/v1/management/users/:userId', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
        if(req.user.userGroup != "ADMIN"){
            res.status(401).send("Unauthorized");
            return;
        }

        if (err){
            console.log(err);
        }
    
        let request = new mssql.Request();
    
        let userId = req.params.userId;
        let userName = req.body.userName;
        let userLastName = req.body.userLastName;
        let userGroup = req.body.userGroup;
        let userPass = req.body.pwd;
        userPass = sjcl.encrypt("secretkey",userPass);
            
        // Query to the database and get the records
        request = new mssql.Request();
        request.query("INSERT INTO dbo.Users VALUES('" + 
        userId +  "','" + 
        userName + "','" + 
        userLastName + "','" + 
        userGroup + "','" + 
        userPass + "');", 
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

  /*
  *  PUT Methods
  */

    // Update a product
    app.put('/api/v1/management/products/:productId', passport.authenticate('jwt', { session: false }), function (req, res) {
        mssql.connect(dataBaseConfig, function (err) {
    
        if(req.user.userGroup != "ADMIN"){
            res.status(401).send("Unauthorized");
            return;
        }

        if (err){
            console.log(err);
            res.send(err);
        }
  
        let request = new mssql.Request();
    
        let productId = req.params.productId;
        let productName = req.body.productName;
        let productDescription = req.body.productDescription;
        let productUnitPrice = req.body.productUnitPrice;
        let productIcon = req.body.productIcon;
        let active = req.body.active;
        let supplierId = req.body.supplierId;
        let productActiveDiscount = req.body.productActiveDiscount;
            
        // Query to the database and get the records
        request.query("UPDATE dbo.Products SET " + 
        "Product_Name = '" + productName + "', " + 
        "Product_Description = '" + productDescription + "', " + 
        "Product_Unit_Price_MXN = " + productUnitPrice + ", " + 
        "Product_Icon = '" + productIcon + "', " + 
        "Active = '" + active + "', " + 
        "Supplier_ID = '" + supplierId + "', " + 
        "Product_Active_Discount = " + productActiveDiscount + " " + 
        "WHERE Product_ID = '" + productId + "';", 
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

    // Update a supplier
    app.put('/api/v1/management/suppliers/:supplierId', passport.authenticate('jwt', { session: false }), function (req, res) {
        mssql.connect(dataBaseConfig, function (err) {
    
        if(req.user.userGroup != "ADMIN"){
            res.status(401).send("Unauthorized");
            return;
        }

        if (err){
            console.log(err);
            res.send(err);
        }
  
        let request = new mssql.Request();
    
        let supplierId = req.params.supplierId;
        let supplierName = req.body.supplierName;
        let supplierContactName = req.body.supplierContactName;
        let supplierPhoneNumber = req.body.supplierPhoneNumber;
        let supplierMail = req.body.supplierMail;
        let active = req.body.active;
            
        // Query to the database and get the records
        request.query("UPDATE dbo.Suppliers SET " + 
        "Supplier_Name = '" + supplierName + "', " + 
        "Supplier_Contact_Name = '" + supplierContactName + "', " + 
        "Supplier_Phone_Number = '" + supplierPhoneNumber + "', " + 
        "Supplier_Mail = '" + supplierMail + "', " + 
        "Active = '" + active + "' " +
        "WHERE Supplier_ID = '" + supplierId + "';", 
        function (err, records) {
            
            if (err){
                console.log(err);
                res.send(err);
            }
    
            // Send response if successful
            res.send(true);
          
            });
        });
    });
}