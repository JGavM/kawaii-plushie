/**
 * -----------------------------------------
 * Customer API v1
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

 // Get addresses
  app.get('/api/v1/web/addresses/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      let customerId = req.customer.customerId;
        
      // Query to the database and get the records
      request.query("SELECT * FROM Adresses "+
      "WHERE Customer_ID = '" + customerId+ "';", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        let addresses = [];
        for(let address of records.recordset){
          addressJSON = {
            addressId: address.Address_ID,
            addressStreetName: address.Address_Street_Name,
            addressExteriorNumber: address.Address_Exterior_Number,
            addressInteriorNumber: address.Address_Interior_Number,
            addressResidentialArea: address.Address_Residential_Area,
            addressZipCode: address.Address_ZIP_Code,
            addressState: address.Address_State,
            addressCity: address.Address_City
          }
          addresses.push(addressJSON);
        }
        res.send(addresses);
      });
    });
  });

  app.get('/api/v1/web/addresses/:addressId', passport.authenticate('jwt', { session: false }), function (req, res) {
      mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      let customerId = req.customer.customerId;
      let addressId = req.params.addressId;
        
      if(addressId.includes("=")){
        res.status(403).send("Forbidden");
      }

      // Query to the database and get the records
      request.query("SELECT * FROM Adresses "+
      "WHERE Address_ID = '"+ addressId +"' AND Customer_ID = '" + customerId + "';", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        let addresses = [];
        for(let address of records.recordset){
          addressJSON = {
            addressId: address.Address_ID,
            addressStreetName: address.Address_Street_Name,
            addressExteriorNumber: address.Address_Exterior_Number,
            addressInteriorNumber: address.Address_Interior_Number,
            addressResidentialArea: address.Address_Residential_Area,
            addressZipCode: address.Address_ZIP_Code,
            addressState: address.Address_State,
            addressCity: address.Address_City
          }
          addresses.push(addressJSON);
        }
        res.send(addresses);         
      });
    });
  });

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
        let avatars = [];
        for(let avatar of records.recordset){
          avatarJSON = {
            avatarId: avatar.Avatar_ID,
            avatarStreetName: avatar.Avatar_Description,
            avatarExteriorNumber: avatar.Avatar_Path
          }
          avatars.push(avatarJSON);
        }
        res.send(avatars);
        
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
        let avatars = [];
        for(let avatar of records.recordset){
          avatarJSON = {
            avatarId: avatar.Avatar_ID,
            avatarStreetName: avatar.Avatar_Description,
            avatarExteriorNumber: avatar.Avatar_Path
          }
          avatars.push(avatarJSON);
        }
        res.send(avatars);
      });
    });
  });

   // Get cards
   app.get('/api/v1/web/cards/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      let customerId = req.customer.customerId;
        
      // Query to the database and get the records
      request.query("SELECT * FROM Cards "+
      "WHERE Customer_ID = '" + customerId+ "';", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        // Send records as a response
        let cards = [];
        for(let cards of records.recordset){
          cardsJSON = {
            cardId: cards.Cards_ID,
            cardholderName: cards.Cardholder_Name,
            cardExpirationDate: cards.Card_Expiration_Date,
            billingAddressStreetName: address.Address_Street_Name,
            billingAddressExteriorNumber: address.Address_Exterior_Number,
            billingAddressInteriorNumber: address.Address_Interior_Number,
            billingAddressResidentialArea: address.Address_Residential_Area,
            billingAddressZipCode: address.Address_ZIP_Code,
            billingAddressState: address.Address_State,
            billingAddressCity: address.Address_City
          }
          cards.push(cardJSON);
        }
        res.send(cards); 
      });
    });
  });

  app.get('/api/v1/web/cards/:cardId', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      let cardId = req.params.cardId;
      let customerId = req.customer.customerId;

      if(cardId.includes("=")){
        res.status(403).send("Forbidden");
      }
        
      // Query to the database and get the records
      request.query("SELECT * FROM Cards "+
      "WHERE Card_ID = '"+ cardsId +"' AND Customer_ID = '" + customerId + "';", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        // Send records as a response
        let cards = [];
        for(let cards of records.recordset){
          cardsJSON = {
            cardId: cards.Cards_ID,
            cardholderName: cards.Cardholder_Name,
            cardExpirationDate: cards.Card_Expiration_Date,
            billingAddressStreetName: address.Address_Street_Name,
            billingAddressExteriorNumber: address.Address_Exterior_Number,
            billingAddressInteriorNumber: address.Address_Interior_Number,
            billingAddressResidentialArea: address.Address_Residential_Area,
            billingAddressZipCode: address.Address_ZIP_Code,
            billingAddressState: address.Address_State,
            billingAddressCity: address.Address_City
          }
          cards.push(cardJSON);
        }
        res.send(cards); 
      });
    });
  });

  // Get categories
  app.get('/api/v1/web/categories/',  function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      // Query to the database and get the records
      request.query("SELECT	* FROM dbo.Categories;", 
      function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        // Send records as a response
        let categories = [];
        for(let category of records.recordset){
          categoryJSON = {
            categoryId: category.Category_ID,
            categoryName: category.Category_Name
          };
          categories.push(categoryJSON);
        }
        res.send(categories);
      });
    });
  });

  //Get coupons by customer
  app.get('/api/v1/web/coupons/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }

      let request = new mssql.Request();
      let customerId = req.customer.customerId;

      // Query to the database and get the records
      request.query("SELECT cp.Coupon_ID, c.Coupon_Description, c.Coupon_Discount_MXN, "+
      "cp.Expiration_Date " +
      "FROM dbo.Coupons_Per_Customer AS cp INNER JOIN dbo.Coupons AS c ON cp.Coupon_ID = c.Coupon_ID " +
      "WHERE cp.Applied = 0 AND cp.Customer_ID = '" + customerId + "';", 
      function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        // Send records as a response
        let coupons = [];
        for(let category of records.recordset){
          couponJSON = {
            couponId: category.Category_ID,
            couponName: category.Category_Name
          };
          coupons.push(categoryJSON);
        }
        res.send(coupons);
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
        let currencyRates = [];
        for(let currency of records.recordset){
          currencyJSON = {
            currencyId: currency.Currency_ID,
            mxnRate: currency.MXN_Rate
          };
          currencyRates.push(currencyJSON);
        }
        res.send(currencyRates);
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
        let currencyRates = [];
        for(let currency of records.recordset){
          currencyJSON = {
            currencyId: currency.Currency_ID,
            mxnRate: currency.MXN_Rate
          };
          currencyRates.push(currencyJSON);
        }
        res.send(currencyRates);
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
        let products = [];
        for(let product of records.recordset){
          let productJSON = {
            productId: product.Product_ID,
            productName: product.Product_Name,
            productDescription: product.Product_Description,
            productUnitPriceMXN: product.Product_Unit_Price_MXN,
            productIcon: product.Product_Icon
          }
          products.push(productJSON);
        }
        res.send(products); 
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
        let products = [];
        for(let product of records.recordset){
          let productJSON = {
            productId: product.Product_ID,
            productName: product.Product_Name,
            productDescription: product.Product_Description,
            productUnitPriceMXN: product.Product_Unit_Price_MXN,
            productIcon: product.Product_Icon
          }
          products.push(productJSON);
        }
        res.send(products);     
      });
    });
  });

  // Get orders by customer
  app.get('/api/v1/web/orders/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }
  
      let request = new mssql.Request();
      let customerId = req.customer.customerId;
        
      // Query to the database and get the records
      request.query("SELECT o.Order_ID, o.Order_Status, o.Address_ID,"+
          "a.Address_Street_Name, a.Address_Exterior_Number, a.Address_Interior_Number, a.Address_Residential_Area, a.Address_ZIP_Code, a.Address_State, a.Address_City,"+
          "i.Payment_Date "+
      "FROM ((dbo.Orders AS o INNER JOIN dbo.Addresses AS a ON o.Address_ID = a.Address_ID) "+
       " INNER JOIN dbo.Invoices AS i ON o.Invoice_ID = i.Invoice_ID) "+
      "WHERE o.Customer_ID = '" + customerId + "' "+
      "ORDER BY o.Order_ID DESC;", 
      function (err, records) {
          
          if (err){
            console.log(err);
            res.send(err);
          }
  
        var orders = [];
        var deliveries = [];
        var products = [];
        for(let order of records.recordset){
          request.query("SELECT d.Delivery_ID, d.Delivery_Date, d.Expected_Arrival_Date, d.Actual_Arrival_Date, d.Distributor_ID, dist.Distributor_Name ",
          "FROM dbo.Deliveries AS d INNER JOIN dbo.Distributors AS dist ON d.Distributor_ID = dist.Distributor_ID ",
          "WHERE d.Order_ID = '" + order.Order_ID + "' ",
          "ORDER BY d.Delivery_ID;", 
          function (err, records) {
            if (err){
              console.log(err);
              res.send(err);
            }
    
            deliveries = [];
            for(let delivery of records.recordset){
              request.query("SELECT p.Product_ID, p.Product_Name, p.Product_Icon, pp.Articles "+
              "FROM (SELECT COUNT(s.Sale_ID) AS Articles, ar.Product_ID "+
              "FROM (dbo.Sales AS s INNER JOIN dbo.Articles AS ar ON s.Article_ID = ar.Article_ID) "+
                "INNER JOIN dbo.Products AS p ON ar.Product_ID = p.Product_ID "+
              "WHERE s.Delivery_ID = '" + delivery.Delivery_ID + "' "+
              "GROUP BY ar.Product_ID, s.Delivery_ID) AS pp INNER JOIN dbo.Products AS p ON pp.Product_ID = p.Product_ID;", 
              function (err, records) {
                if (err){
                  console.log(err);
                  res.send(err);
                }

                products = []
                for(let product of records.recordset){
                  let productJSON = {
                    productId: product.Product_ID,
                    productName: product.Product_Name,
                    productIcon: productProduct_Icon,
                    count: product.Articles
                  }
                  product.push(productJSON);
                }
              });

              let deliveryJSON = {
                deliveryId: delivery.Delivery_ID,
                deliveryDate: delivery.Delivery_Date,
                expectedArrivalDate: delivery.Expected_Arrival_Date,
                actualArrivalDate: delivery.Actual_Arrival_Date,
                distributor: {
                  distributorId: delivery.Distributor_ID,
                  distributorName: delivery.Distributor_Name
                },
                products: products
              }
              deliveries.push(deliveryJSON);
            }
          });

          let orderJSON = {
            orderId = order.Order_ID,
            orderStatus = order.Order_Status,
            paymentDate = order.Payment_Date,
            address: {
              addressId: order.Address_ID,
              addressStreetName: order.Address_Street_Name,
              addressExteriorNumber: order.Address_Exterior_Number,
              addressInteriorNumber: order.Address_Interior_Number,
              addressResidentialArea: order.Address_Residential_Area,
              addressZipCode: order.Address_ZIP_Code,
              addressState: order.Address_State,
              addressCity: order.address_City
            },
            deliveries: deliveries
          }
          orders.push(orderJSON)
        }

        res.send(orders);
      });
    });
  });
  

  // Get reviews by product
  app.get('/api/v1/web/reviews/:productId', function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
      }
  
      let request = new mssql.Request();
      let productId = req.params.productId;
        
      // Query to the database and get the records
      request.query("SELECT r.Review_ID, r.Review_Value, r.Review_Comment, r.Review_Date, "+
          "r.Customer_ID, c.Customer_Name, c.Customer_Last_Name, "+
          " c.Avatar_ID, a.Avatar_Path "+
      "FROM (dbo.Reviews AS r INNER JOIN dbo.Customers AS c ON r.Customer_ID = c.Customer_ID) "+
          "INNER JOIN dbo.Avatars AS a ON c.Avatar_ID = a.Avatar_ID "+
      "WHERE r.Product_ID = '" + productId + "';"+
      "ORDER BY r.Review_Date DESC;", 
      function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
        }

        // Send records as a response
        let reviews = [];
        for(let review of records.recordset){
          let reviewJSON = {
            reviewId: review.Review_ID,
            reviewValue: review.Review_Value,
            reviewComment: review.Review_Comment,
            reviewDate: review.Review_Date,
            customer: {
              customerId: review.Customer_ID,
              customerName: review.Customer_Name,
              customerLastName: review.Customer_Last_Name,
              avatar: {
                avatarId: review.Avatar_ID,
                avatarPath: review.Avatar_Path
              }
            }
          }
          reviews.push(reviewJSON);
        }
        res.send(reviews);     
      });
    });
  });

  /**
   *  POST Methods
   */
  
  // Create new address
  app.post('/api/v1/web/addresses/', passport.authenticate('jwt', { session: false }), function (req, res) {
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
        let customerId = req.customer.customerId;
          
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
  
   // Create new customer (Register)
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
            return
          }
  
          // Send records as a response
          res.send(true);
      });
    });
  });

  // Login
  app.post('/api/v1/web/login', function(req, res){
    mssql.connect(dataBaseConfig, function(err){
  
      if (err){
        console.log(err);
      }
  
      let customerMail = req.body.key;
      let inputPass = req.body.pwd;   // Previously encoded
  
      let request = new mssql.Request();
      request.query("SELECT Customer_Name, Customer_Last_Name, Customer_Password FROM dbo.Customers WHERE Customer_ID = '" + customerMail + "';",
      function (err, records) {
        if (err){
          console.log(err);
          res.send(err);
        }
  
        if(records.recordset.length === 1){
  
          let customerPass = sjcl.decrypt("secretkey",records.recordset[0].Customer_Password);
  
          if(customerPass != inputPass){
            res.status(401).send("Unauthorized");
            return;
          }
  
          let customerName = records.recordset[0].Customer_Name;
          let customerLastName = records.recordset[0].Customer_Last_Name;
  
          let options = {};
          options.expiresIn = 1800;
          let secret = "SECRET_KEY"
          let token = jwt.sign({ customerKey }, secret, options);
          res.send({
            customerMail: customerMail,
            customerName: customerName,
            customerLastName:  customerLastName,
            token
          });
        }
      });
    });
  });
    
  /**
   * PUT Methods
   */
  
   // Update address
  app.put('/api/v1/web/addresses/:addressId', passport.authenticate('jwt', { session: false }), function (req, res) {
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
      let customerId = req.customer.customerId;
        
      // Query to the database and get the records
      request.query("UPDATE dbo.Addresses SET " + 
      "Address_Street_Name = '" + addressStreetName + "', " + 
      "Address_Exterior_Number = '" + addressExteriorNumber + "', " + 
      "Address_Interior_Number = '" + addressInteriorNumber + "', " + 
      "Address_Residential_Area = '" + addressResidentialArea + "', " + 
      "Address_ZIP_Code = '" + addressZipCode + "', " + 
      "Address_State = '" + addressState + "', " + 
      "Address_City = '" + addressCity + "' " + 
      "WHERE Address_ID = '" + addressId + "' AND Customer_ID = '" + customerId +"';", 
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
   app.put('/api/v1/web/avatar/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
  
      if (err){
        console.log(err);
        res.send(err);
      }
  
      let request = new mssql.Request();
  
      let customerId = req.customer.customerId;
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

  // Update card details
  app.put('/api/v1/web/cards/:cardId', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
  
      if (err){
        console.log(err);
        res.send(err);
      }

      if(cardId.includes("=")){
        res.status(403).send("Forbidden");
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
      let active = req.body.active
      let customerId = req.customer.customerId;
        
      // Query to the database and get the records
      request.query("UPDATE dbo.Cards SET " + 
      "Billing_Address_Street_Name = '" + addressStreetName + "', " + 
      "Billing_Address_Exterior_Number = '" + addressExteriorNumber + "', " + 
      "Billing_Address_Interior_Number = '" + addressInteriorNumber + "', " + 
      "Billing_Address_Residential_Area = '" + addressResidentialArea + "', " + 
      "Billing_Address_ZIP_Code = '" + addressZipCode + "', " + 
      "Billing_Address_State = '" + addressState + "', " + 
      "Billing_Address_City = '" + addressCity + "' " + 
      "WHERE Address_ID = '" + addressId + "' AND Customer_ID = '" + customerId +"';", 
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
  
}