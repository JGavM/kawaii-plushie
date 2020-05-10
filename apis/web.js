/**
 * -----------------------------------------
 * Customer API v1
 * -----------------------------------------
 */

 /**
  * Setup for e-mail
  */
const nodemailer = require('nodemailer');
const encoding = 'base64';

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: 'azure_a214e14ba8753985d09407c99b042fc1@azure.com',
    pass: console.log(Buffer.from('', encoding).toString())
  }
});

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
      let customerId = req.user.customerId;;
        
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
      let customerId = req.user.customerId;;
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
      let customerId = req.user.customerId;;
        
      // Query to the database and get the records
      request.query("SELECT * FROM Cards "+
      "WHERE Customer_ID = '" + customerId+ "' AND Active = 1;", function (err, records) {
          
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
      let customerId = req.user.customerId;;

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
      let customerId = req.user.customerId;;

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
        for(let coupon of records.recordset){
          couponJSON = {
            couponId: coupon.Coupon_ID,
            couponDescription: coupon.Coupon_Description,
            couponDiscountMXN: coupon.Coupon_Discount_MXN
          };
          coupons.push(couponJSON);
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
      "SELECT Product_ID, Product_Name, Product_Description, Product_Unit_Price_MXN, Product_Active_Discount, Product_Icon "+
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
            productActiveDiscount: product.Product_Active_Discount,
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

  /**
   * 
   * SERVICE: Get orders by customer
   * 
   */
  app.get('/api/v1/web/orders/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let request = new mssql.Request();
      getOrders(req, res, request)
    });
  });

  function getProducts(res, request, delivery){
    return new Promise(function(resolve){
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
            productIcon: product.Product_Icon,
            count: product.Articles
          }
          products.push(productJSON);
        }
        resolve(products);
      });
    });   
  }

  async function getDeliveries(res, request, order) {
    return new Promise(function(resolve){
      request.query("SELECT d.Delivery_ID, d.Delivery_Date, d.Expected_Arrival_Date, d.Actual_Arrival_Date, d.Distributor_ID, dist.Distributor_Name "+
      "FROM dbo.Deliveries AS d INNER JOIN dbo.Distributors AS dist ON d.Distributor_ID = dist.Distributor_ID "+
      "WHERE d.Order_ID = '" + order.Order_ID + "' "+
      "ORDER BY d.Delivery_ID;", 
      async function(err, deliveryRecords){
        if (err){
          console.log(err);
          res.send(err);
        }
    
        let deliveries = [];
        let products = [];
        for(let delivery of deliveryRecords.recordset){
          await getProducts(res, request, delivery).then(function(res){products = res});
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
        resolve(deliveries);
      });
    });
  }
  
  async function getOrders(req, res, request) {

    let customerId = req.user.customerId;
      
    // Query to the database and get the records
    request.query("SELECT o.Order_ID, o.Order_Status, o.Address_ID,"+
        "a.Address_Street_Name, a.Address_Exterior_Number, a.Address_Interior_Number, a.Address_Residential_Area, a.Address_ZIP_Code, a.Address_State, a.Address_City,"+
        "i.Payment_Date "+
    "FROM ((dbo.Orders AS o INNER JOIN dbo.Addresses AS a ON o.Address_ID = a.Address_ID) "+
      " INNER JOIN dbo.Invoices AS i ON o.Invoice_ID = i.Invoice_ID) "+
    "WHERE o.Customer_ID = '" + customerId + "' "+
    "ORDER BY o.Order_ID DESC;", 
    async function(err, orderRecords){
      if (err){
        console.log(err);
        res.send(err);
        return;
      }
  
      var orders = [];
      var deliveries = [];
      for(let order of orderRecords.recordset){
        await getDeliveries(res, request, order).then(function(res){deliveries = res});
        let orderJSON = {
          orderId: order.Order_ID,
          orderStatus: order.Order_Status,
          paymentDate: order.Payment_Date,
          address: {
            addressId: order.Address_ID,
            addressStreetName: order.Address_Street_Name,
            addressExteriorNumber: order.Address_Exterior_Number,
            addressInteriorNumber: order.Address_Interior_Number,
            addressResidentialArea: order.Address_Residential_Area,
            addressZipCode: order.Address_ZIP_Code,
            addressState: order.Address_State,
            addressCity: order.Address_City
          },
          deliveries: deliveries
        }
        orders.push(orderJSON)
      } 
      res.send(orders);
    });
  }


  /**
   * 
   * END OF SERVICE
   * 
   */


  // Get reviews by product
  app.get('/api/v1/web/reviews/:productId', function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        res.send(err);
        return;
      }
  
      let request = new mssql.Request();
      let productId = req.params.productId;
        
      // Query to the database and get the records
      request.query("SELECT r.Review_ID, r.Review_Value, r.Review_Comment, r.Review_Date, "+
          "r.Customer_ID, c.Customer_Name, c.Customer_Last_Name, "+
          " c.Avatar_ID, a.Avatar_Path "+
      "FROM (dbo.Reviews AS r INNER JOIN dbo.Customers AS c ON r.Customer_ID = c.Customer_ID) "+
          "INNER JOIN dbo.Avatars AS a ON c.Avatar_ID = a.Avatar_ID "+
      "WHERE r.Product_ID = '" + productId + "' AND r.Active = 1 "+
      "ORDER BY r.Review_Date DESC;", 
      function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
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
        res.send(err);
        return;
      }

      let request = new mssql.Request();
  
      request.query("SELECT TOP 1 Address_ID FROM dbo.Addresses ORDER BY Address_ID DESC;", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }
  
        request = new mssql.Request();
  
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
        let customerId = req.user.customerId;;
          
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
              return;
            }
  
            // Send records as a response
            res.send(true);
            
        });
      });
    });
  });

  // Create new card
  app.post('/api/v1/web/cards/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let request = new mssql.Request();
      let cardId = req.body.cardNumber;
      let cardholderName = req.body.cardholderName;
      let cardExpirationDate = req.body.cardExpirationDate;
      let addressStreetName = req.body.streetName;
      let addressExteriorNumber = req.body.exteriorNumber;
      let addressInteriorNumber = req.body.interiorNumber;
      let addressResidentialArea = req.body.residentialArea;
      let addressZipCode = req.body.zipCode;
      let addressState = req.body.state;
      let addressCity = req.body.city;
      let customerId = req.user.customerId;
        
      // Query to the database and get the records
      request.query("INSERT INTO dbo.Cards VALUES('" + 
      cardId +  "','" + 
      cardholderName +  "','" + 
      cardExpirationDate +  "','" + 
      addressStreetName + "','" + 
      addressExteriorNumber + "','" + 
      addressInteriorNumber + "','" + 
      addressResidentialArea + "','" + 
      addressZipCode + "','" + 
      addressState + "','" + 
      addressCity + "','" + 
      customerId + "',1);", 
      function (err, records) {
          
          if (err){
            console.log(err);
            res.send(err);
            return;
          }

          // Send records as a response
          res.send(true);
          
      });;
    });
  });
  
   // Create new customer (Register)
  app.post('/api/v1/web/customers/', function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        return;
      }
  
      let request = new mssql.Request();
      let customerId = req.body.customerId;
      let customerName = req.body.customerName;
      let customerLastName = req.body.customerLastName;
      let customerPass = req.body.pwd;
      customerPass = sjcl.encrypt("secretkey",customerPass);
      let customerDateOfBirth = req.body.customerDateOfBirth;
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

          let welcomeEmail = 
            "<h1>¡Hola "+ customerName +"!</h1>"+
            "<br>"+
            "<h2>¡Muchas gracias por unirte a Cutie Plushie, nos da mucho gusto que estés aquí!</h2>"+
            "<h2>Haz clic <a href='cutieplushie.azurewebsites.net'>aquí</a> para ver nuestros más nuevos productos. ¡Te van a encantar!</h2>"+
            "<br>"+
            "<h3>El equipo de Cutie Plushie</h3>"+
            "<img src='http://cutieplushie.azurewebsites.net/assets/images/cutie_plushie_logo.png' width='100'/>"+
            "<br>"+
            "<br>"+
            "<h5>Este correo se envía exclusivamente al destinatario de la cuenta " + customerId + " desde una cuenta no monitoreada."+
            " Ningún correo recibido en esta cuenta podrá ser respondido. Si tienes dudas, contáctanos a través de redes sociales o a través de"+
            " contactocutieplushie@gmail.com.</h5>";


          let mailResult = transporter.sendMail({
            from: '"Cutie Plushie" <cutieplushie@gmail.com>', // sender address
            to: customerId, // list of receivers
            subject: "¡Bienvenido a Cutie Plushie! 🐼🦝🐱", // Subject line
            html: welcomeEmail // html body
          });
  
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
        res.send(err);
        return;
      }
  
      let customerId = req.body.key;
      let inputPass = req.body.pwd;   // Previously encoded
  
      let request = new mssql.Request();
      request.query("SELECT Customer_Name, Customer_Last_Name, Customer_Pass FROM dbo.Customers WHERE Customer_ID = '" + customerId + "';",
      function (err, records) {
        if (err){
          console.log(err);
          res.send(err);
          return;
        }
  
        if(records.recordset.length === 1){
  
          let customerPass = sjcl.decrypt("secretkey",records.recordset[0].Customer_Pass);
  
          if(customerPass != inputPass){
            res.status(401).send("Unauthorized");
            return;
          }
  
          let customerName = records.recordset[0].Customer_Name;
          let customerLastName = records.recordset[0].Customer_Last_Name;
  
          let options = {};
          options.expiresIn = 1800;
          let secret = "SECRET_KEY"
          let token = jwt.sign({ customerId }, secret, options);
          res.send({
            customerId: customerId,
            customerName: customerName,
            customerLastName:  customerLastName,
            token
          });
        }
      });
    });
  });

  // Create new refund
  app.post('/api/v1/web/refunds/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let request = new mssql.Request();
  
      request.query("SELECT TOP 1 Refund_ID FROM dbo.Refunds ORDER BY Refund_ID DESC;", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }
  
        let refundId;
        if(records.recordset.length>0){
          let latestId = records.recordset[0]["Refund_ID"];
          refundId = getNextID(latestId, "re", 10);
        } else {
          refundId = "re00000000";
        } 
        let today = new Date();
        let refundDate = today.getFullYear() + 
                            ((today.getMonth()+1)>9?today.getMonth()+1:"0"+(today.getMonth()+1)) +
                            (today.getDate()>9?today.getDate():"0"+today.getDate());
        let articleId = req.body.articleId;
        let addressId = req.body.addressId;
        let customerId = req.user.customerId;

        // Look for the distributor with less active deliveries
        request.query("SELECT TOP 1 di.Distributor_ID, COUNT(de.Delivery_ID) AS total "+
        "FROM dbo.Distributors AS di LEFT JOIN dbo.Deliveries AS de ON di.Distributor_ID = de.Distributor_ID "+
        "WHERE de.Actual_Arrival_Date IS NULL "+
        "GROUP BY di.Distributor_ID "+
        "ORDER BY total", function(err, records){

          let distributorId;
          if(records.recordset.length > 0){
            distributorId = records.recordset[0]["Distributor_ID"];
          } else {
            distributorId = "d000000000";
          }

          // Query to the database and get the records
          request.query("INSERT INTO dbo.Refunds VALUES('" + 
          refundId +  "','" + 
          "OPEN','" + 
          refundDate + "'," + 
          "null,'" + 
          customerId + "','" + 
          articleId + "','" + 
          addressId + "','" + 
          distributorId + "');", 
          function (err, records) {
              
            if (err){
              console.log(err);
              res.send(err);
              return;
            }

            // Send records as a response
            res.send(true);              
          });
        })  
      });
    });
  });

  // Create new review
  app.post('/api/v1/web/reviews/:productId', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let request = new mssql.Request();
  
      request.query("SELECT TOP 1 Review_ID FROM dbo.Reviews ORDER BY Review_ID DESC;", function (err, records) {
          
        if (err){
          console.log(err);
          res.send(err);
          return;
        }
  
        request = new mssql.Request();
  
        let reviewId;
        if(records.recordset.length>0){
          let latestId = records.recordset[0]["Review_ID"];
          reviewId = getNextID(latestId, "r", 10);
        } else {
          reviewId = "r000000000";
        } 
        let reviewValue = req.body.reviewValue;
        let reviewComment = req.body.reviewComment;
        let today = new Date();
        let reviewDate = today.getFullYear() + 
                            ((today.getMonth()+1)>9?today.getMonth()+1:"0"+(today.getMonth()+1)) +
                            (today.getDate()>9?today.getDate():"0"+today.getDate());
        let productId = req.params.productId;
        let customerId = req.user.customerId;
          
        // Query to the database and get the records
        request.query("INSERT INTO dbo.Reviews VALUES('" + 
        reviewId +  "'," + 
        reviewValue + ",'" + 
        reviewComment + "','" + 
        reviewDate + "','" + 
        productId + "','" + 
        customerId + "',1);", 
        function (err, records) {
            
          if (err){
            console.log(err);
            res.send(err);
            return;
          }

          // Send records as a response
          res.send(true);           
        });
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
      let customerId = req.user.customerId;;
        
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
  
      let customerId = req.user.customerId;;
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
      let customerId = req.user.customerId;
        
      // Query to the database and get the records
      request.query("UPDATE dbo.Cards SET " + 
      "Billing_Address_Street_Name = '" + addressStreetName + "', " + 
      "Billing_Address_Exterior_Number = '" + addressExteriorNumber + "', " + 
      "Billing_Address_Interior_Number = '" + addressInteriorNumber + "', " + 
      "Billing_Address_Residential_Area = '" + addressResidentialArea + "', " + 
      "Billing_Address_ZIP_Code = '" + addressZipCode + "', " + 
      "Billing_Address_State = '" + addressState + "', " + 
      "Billing_Address_City = '" + addressCity + "', " + 
      "Active = '" + active + "' "+
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

  // Update user (Password)
  app.put('/api/v1/web/customers/', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, function (err) {
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let customerId = req.user.customerId;;
      let customerName = req.customer.customerName;
      let pwdOld = req.body.pwdOld;
      let pwdNew = req.body.pwdNew;

      let request = new mssql.Request();

      let query = "SELECT Customer_ID, Customer_Pass FROM dbo.Customers WHERE Customer_ID = '" + customerId + "';";
      request.query(query,
        function (err, records) {
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        let pwdCurrent = sjcl.decrypt("secretkey",records.recordset[0].Customer_Pass);

        if(pwdCurrent != pwdOld){
            res.status(403).send("Forbidden");
            return;
        }

        pwdNew = sjcl.encrypt("secretkey",pwdNew);

        // Request password change
        request.query("UPDATE dbo.Customers SET " + 
        "Customer_Pass = '" + pwdNew + "' " +
        "WHERE Customer_ID = '" + customerId + "';", 
        function (err, records) {
          if (err){
              console.log(err);
              res.send(err);
              return;
          }

          let welcomeEmail = 
            "<h1>¡Hola " + customerName + "!</h1>"+
            "<br>"+
            "<h2>Tu contraseña de Cutie Plushie se ha cambiado con éxito.</h2>"+
            "<h2>Haz clic <a href='cutieplushie.azurewebsites.net'>aquí</a> para ir a la tienda.</h2>"+
            "<h2>Si no fuiste tú quien cambió la contraseña, por favor ponte en contacto inmediatamente con Cutie Plushie a través de contactocutieplushie@gmail.com</h2>"+
            "<br>"+
            "<h3>El equipo de Cutie Plushie</h3>"+
            "<img src='http://cutieplushie.azurewebsites.net/assets/images/cutie_plushie_logo.png' width='100'/>"+
            "<br>"+
            "<br>"+
            "<h5>Este correo se envía exclusivamente al destinatario de la cuenta " + customerId + " desde una cuenta no monitoreada."+
            " Ningún correo recibido en esta cuenta podrá ser respondido. Si tienes dudas, contáctanos a través de redes sociales o a través de"+
            " contactocutieplushie@gmail.com.</h5>";


          let mailResult = transporter.sendMail({
            from: '"Cutie Plushie" <cutieplushie@gmail.com>', // sender address
            to: customerId, // list of receivers
            subject: "¡Bienvenido a Cutie Plushie! 🐼🦝", // Subject line
            html: welcomeEmail // html body
          });
  
          // Send response if successful
          let options = {};
          options.expiresIn = 3600;
          let secret = "SECRET_KEY"
          let token = jwt.sign({ customerId }, secret, options);
          res.send({
              customerId: customerId,
              token
          });
        });
      });
    });
  });


  /**
   * 
   * 
   * SERVICE: Process a new purchase
   * 
   * This is left at the very end to place all the pieces in the same portion of the file. This is one hell of a service.
   * 
   * 
   * 
   */

  app.post('/api/v1/web/order', passport.authenticate('jwt', { session: false }), function (req, res) {
    mssql.connect(dataBaseConfig, async function (err) {
      if (err){
        console.log(err);
        res.send(err);
        return;
      }

      let customerId = req.user.customerId;
      let cardId = req.body.cardId;
      let addressId = req.body.addressId;
      let products = req.body.products;
      let couponId = req.body.couponId;

      let billingAddress;

      let today = new Date();
      let orderDate = today.getFullYear() + "-" +
                          ((today.getMonth()+1)>9?today.getMonth()+1:"0"+(today.getMonth()+1)) + "-" +
                          (today.getDate()>9?today.getDate():"0"+today.getDate());

      // Wait to validate the card details
      await getCardData(res,new mssql.Request(),cardId,customerId,today).then(function(address){
        billingAddress = address;
      });

      // Wait to get the full information of all products
      await getProductData(new mssql.Request(), products).then(function(fullProducts){products = fullProducts});

      //Create invoice asynchronously
      createInvoice(new mssql.Request(),req.user,products,cardId,couponId,addressId,billingAddress,orderDate);
      
      res.send(true);
    });
  })
  
  function getCardData(res,request,cardId,customerId,date){
    return new Promise(function(resolve){
      let query = "SELECT * FROM dbo.Cards WHERE Card_ID = '" + cardId + "' AND Customer_ID = '" + customerId + "';";
      request.query(query,
        function(err,records){
          let cardExpirationDate = records.recordset[0]["Card_Expiration_Date"];
          let billingAddress = {
            addressStreetName: records.recordset[0]["Billing_Address_Street_Name"],
            addressExteriorNumber: records.recordset[0]["Billing_Address_Exterior_Number"],
            addressInteriorNumber: records.recordset[0]["Billing_Address_Interior_Number"],
            addressResidentialArea: records.recordset[0]["Billing_Address_Residential_Area"],
            addressZipCode: records.recordset[0]["Billing_Address_ZIP_Code"],
            addressState: records.recordset[0]["Billing_Address_State"],
            addressCity: records.recordset[0]["Billing_Address_City"]
          }
          if(cardExpirationDate == ''){
            res.status(403).send('Forbidden');
            return;
          }
          let month = cardExpirationDate.split('/')[0]
          let year = cardExpirationDate.split('/')[1]
          if(parseInt(date.getFullYear().toString().substring(2))>=parseInt(year)){
            if(parseInt((date.getMonth()+1)>=parseInt(month))){
              res.status(409).send('Expired card');
              return;
            }
          }
          resolve(billingAddress);
        }
      ); 
    });  
  }

  function getProductData(request, products){
    return new Promise(function(resolve){
      let query = "SELECT Product_ID, Product_Name, Product_Unit_Price_MXN, Product_Active_Discount FROM dbo.Products WHERE Product_ID = '";
      for(let product of products){
        query += product.productId + "' OR Product_ID = '";
      }
      query += "';";
      request.query(query,
        function(err,records){
          let fullProducts = [];
          for(let product of records.recordset){
            let productQuantity;
            for(let oProduct of products){
              if(product.Product_ID == oProduct.productId){
                productQuantity = oProduct.quantity;
                break;
              }
            }

            let productJSON = {
              productId: product.Product_ID,
              productName: product.Product_Name,
              productQuantity: parseFloat(productQuantity),
              productUnitPriceMXN: parseFloat(product.Product_Unit_Price_MXN),
              productActiveDiscount: parseFloat(product.Product_Active_Discount)
            }
            fullProducts.push(productJSON);
          }
          resolve(fullProducts);    
        }
      )
    });
  }

  function createInvoice(request,user,products,cardId,couponId,addressId,billingAddress,orderDate){
    let query = "SELECT Coupon_Discount_MXN FROM dbo.Coupons WHERE Coupon_ID = '" + couponId + "';";
    request.query(query,
      function(err, records){
        if (err){
          console.log(err);
          res.send(err);
          return;
        }

        let xml = 
          '<company>'+
            '<company_name>Cutie Plushie</company_name>'+
            '<fiscal_address>'+
              '<street_name>Calle El Vergel</street_name>'+
              '<exterior_number>141</exterior_number>'+
              '<residential_zone>Residencial El Refugio</residential_zone>'+
              '<city>Querétaro</city>'+
              '<zip_code>76146</zip_code>'+
              '<state>Querétaro</state>'+
            '</fiscal_address>'+
            '<phone_number>4425481701</phone_number>'+
            '<email>cutieplushie@gmail.com</email>'+
          '</company>'+
          '<customer>'+
            '<full_name>'+user.customerName+' '+user.customerLastName+'</full_name>'+
            '<billing_address>'+
              '<street_name>'+billingAddress.addressStreetName+'</street_name>'+
              '<exterior_number>'+billingAddress.addressExteriorNumber+'</exterior_number>'+
              '<interior_number>'+billingAddress.addressInteriorNumber+'</interior_number>'+
              '<zip_code>'+billingAddress.addressZipCode+'</zip_code>'+
              '<state>'+billingAddress.addressState+'</state>'+
              '<city>'+billingAddress.addressCity+'</city>'+
            '</billing_address>'+
          '</customer>'+
          '<products>';

        let couponValue;
        if(records.recordset.length > 0){
          couponValue = records.recordset[0]["Coupon_Discount_MXN"];
        } else {
          couponValue = 0;
        }
        let totalMXN = 0;
        let subtotalMXN = 0;
        let discount = 0;
        let shipment = 100;
        let totalProducts = 0;
        for(let product of products){
          subtotalMXN += product.productQuantity * (product.productUnitPriceMXN * (1-(product.productActiveDiscount/100)));
          totalProducts += product.productQuantity;
        }
        totalMXN += subtotalMXN;

        if(couponValue < 1 && couponValue > 0){
          discount = totalMXN * (1-couponValue);
        } else {
          discount = couponValue;
        }
        totalMXN -= discount;

        shipment += subtotalMXN * 0.1;
        if(shipment > 250){
          shipment = 250;
        }
        totalMXN += shipment;

        request.query("SELECT TOP 1 Invoice_ID FROM dbo.Invoices ORDER BY Invoice_ID DESC;", function (err, records) {
          
          if (err){
            console.log(err);
            return;
          }
    
          let invoiceId;
          if(records.recordset.length>0){
            let latestId = records.recordset[0]["Invoice_ID"];
            invoiceId = getNextID(latestId, "", 20);
          } else {
            invoiceId = "00000000000000000000";
          }

          xml = 
            '<?xml version="1.0" standalone="yes"?>'+
            '<invoice id="'+invoiceId+'" date="'+orderDate+'">'+ xml;

          for(let product of products){
            let delivery = (shipment/totalProducts);
            let pDiscount = (product.productUnitPriceMXN * (product.productActiveDiscount/100))+(discount/totalProducts);
            let netCost = (product.productUnitPriceMXN-pDiscount+delivery);
            xml += 
            '<product>'+
              '<description>'+product.productName+'</description>'+
              '<quantity>'+product.productQuantity+'</quantity>'+
              '<unit_price>'+(product.productUnitPriceMXN/1.16).toFixed(2)+'</unit_price>'+
              '<tax>'+(product.productUnitPriceMXN-(product.productUnitPriceMXN/1.16).toFixed(2))+'</tax>'+
              '<discount>'+pDiscount.toFixed(2)+'</discount>'+
              '<delivery>'+delivery.toFixed(2)+'</delivery>'+
              '<net_cost>'+netCost+'</net_cost>'+
            '</product>'
          }
          
          xml += 
            '</products>'+
            '<payment>'+
              '<date>'+orderDate+'</date>'+
              '<payment_amount>'+totalMXN+'</payment_amount>'+
              '<payment_method>Debit</payment_method>'+
            '</payment>'+
          '</invoice>';

          // Get the order ID to assemble de XML invoice and send it through mail
          request.query("SELECT TOP 1 Order_ID FROM dbo.Orders ORDER BY Order_ID DESC;", function (err, records) {
            if (err){
              console.log(err);
              return;
            }
      
            let orderId;
            if(records.recordset.length>0){
              let latestId = records.recordset[0]["Order_ID"];
              orderId = getNextID(latestId, "", 20);
            } else {
              orderId = "00000000000000000000";
            }

            let confirmEmail = 
            "<h1>¡Hola " + user.customerName + "!</h1>"+
            "<br>"+
            "<h2>Te confirmamos que hemos recibido tu pedido con los siguientes productos:</h2>"+
            function(){
              let string = "<ul>";
              for(product of products){
                string += "<li>"+product.productName+" ("+product.productQuantity+")</li>";
              } 
              string += "</ul>";
              return string;
            }+
            "<h2>¡Tus productos ya están en camino! Tu número de orden es <strong>"+orderId+"</strong>. Haz clic <a href='cutieplushie.azurewebsites.net'>aquí</a> para ver tu pedido.</h2>"+
            "<h2>En este correo puedes encontrar adjunta tu factura en formato XML.</h2>"+
            "<br>"+
            "<h3>Cliente: "+user.customerName+" "+user.customerLastName+"</h3>"+
            "<h3>Monto: "+totalMXN+"</h3>"+
            "<h3>Fecha: "+orderDate+"</h3>"+
            "<h3>Factura: "+invoiceId+"</h3>"+
            "<br>"+
            "<h2>¡Muchas gracias por tu compra!/h2>"+
            "<br>"+
            "<h2>Si no reconoces esta transacción, por favor ponte en contacto inmediatamente con Cutie Plushie a través de contactocutieplushie@gmail.com</h2>"+
            "<br>"+
            "<h3>El equipo de Cutie Plushie</h3>"+
            "<img src='http://cutieplushie.azurewebsites.net/assets/images/cutie_plushie_logo.png' width='100'/>"+
            "<br>"+
            "<br>"+
            "<h5>Este correo se envía exclusivamente al destinatario de la cuenta " + user.customerId + " desde una cuenta no monitoreada."+
            " Ningún correo recibido en esta cuenta podrá ser respondido. Si tienes dudas, contáctanos a través de redes sociales o a través de"+
            " contactocutieplushie@gmail.com.</h5>";
  
  
            /*let mailResult = transporter.sendMail({
              from: '"Cutie Plushie" <cutieplushie@gmail.com>', // sender address
              to: user.customerId, 
              subject: "¡Muchas gracias por tu compra! 🐼🦝", // Subject line
              html: confirmEmail, 
              attachments: [
                {   // XML as attachment
                    filename: orderDate+"_"+invoiceId+'.xml',
                    content: xml
                }
              ]
            });*/

            // Insert the invoice in the DB
            query = "INSERT INTO dbo.Invoices VALUES('" +
              invoiceId + "',"+
              totalMXN + ",'"+
              orderDate.replace(/-/g,"") + "','"+
              "DEBIT','"+
              cardId + "');";
            request.query(query, function (err, records) {
              if (err){
                console.log(query);
                return;
              }
              // This function will asynchronously take care of creating orders, deliveries, and updating articles after inserting the invoice
              createOrder(new mssql.Request(),user,products,totalProducts,orderId,invoiceId,addressId,orderDate);
            });            
          });
          
          // Deactivate the used coupon, if any
          query = "UPDATE dbo.Coupons_Per_Customer SET " +
            "Applied = 1 "+
            "WHERE Coupon_ID = '" + couponId + "' AND Customer_ID = '" + user.customerId + "';";
          request.query(query, function (err, records) {
            if (err){
              console.log(err);
              return;
            }
          });       
        });
      }
    );
  }

  async function createOrder(request,user,products,totalProducts,orderId,invoiceId,addressId,orderDate){
    query = "INSERT INTO dbo.Orders VALUES('" +
            orderId + "','"+
            "IN PROGRESS','"+
            invoiceId + "','"+
            user.customerId + "','"+
            addressId + "');";
    request.query(query, async function (err, records) {
      if (err){
        console.log(err);
        return;
      }

      let deliveryNumber;
      let articlesPerDelivery;
      if(totalProducts > 10){
        deliveryNumber = Math.ceil(totalProducts/10);
        articlesPerDelivery = totalProducts / deliveryNumber;
      } else {
        deliveryNumber = 1;
        articlesPerDelivery = totalProducts;
      }

      // Create the deliveries and arrange the articles across them
      for(let i=0;i<deliveryNumber;i++){
        let articles;
        if(i==deliveryNumber-1){
          articles = Math.floor(articlesPerDelivery);
        } else {
          articles = Math.ceil(articlesPerDelivery);
        }
        let startAt = i * Math.ceil(articlesPerDelivery);
        await createDelivery(request,orderId,orderDate,products,articles,startAt)
      }
    });
  }

  async function createDelivery(request,orderId,orderDate,products,articlesPerDelivery,index){
    return new Promise(function(resolve){
      request.query("SELECT TOP 1 Delivery_ID FROM dbo.Deliveries ORDER BY Delivery_ID DESC;", async function (err, records) {
        if (err){
          console.log(err);
          return;
        }
  
        let deliveryId;
        if(records.recordset.length>0){
          let latestId = records.recordset[0]["Delivery_ID"];
          deliveryId = getNextID(latestId, "d", 20);
        } else {
          deliveryId = "d0000000000000000000";
        }

        let expectedArrivalDate = new Date(orderDate);
        expectedArrivalDate.setDate(expectedArrivalDate.getDate() + 5);

        let expDate = expectedArrivalDate.getFullYear() + "-" +
          ((expectedArrivalDate.getMonth()+1)>9?expectedArrivalDate.getMonth()+1:"0"+(expectedArrivalDate.getMonth()+1)) + "-" +
          (expectedArrivalDate.getDate()>9?expectedArrivalDate.getDate():"0"+expectedArrivalDate.getDate());


        // Get distributor with the least active deliveries
        request.query("SELECT TOP 1 di.Distributor_ID, COUNT(de.Delivery_ID) AS total "+
        "FROM dbo.Distributors AS di LEFT JOIN dbo.Deliveries AS de ON di.Distributor_ID = de.Distributor_ID "+
        "WHERE de.Actual_Arrival_Date IS NULL "+
        "GROUP BY di.Distributor_ID "+
        "ORDER BY total;", async function (err, records) {

          if (err){
            console.log(err);
            return;
          }

          let distributorId;
          if(records.recordset.length > 0){
            distributorId = records.recordset[0]["Distributor_ID"];
          } else {
            distributorId = "d000000000";
          }

          query = "INSERT INTO dbo.Deliveries VALUES('" +
          deliveryId + "','"+
          orderDate.replace(/-/g,"") + "','"+
          orderDate.replace(/-/g,"") + "',"+
          "null,'"+
          distributorId + "','"+
          orderId + "');";
          request.query(query, async function (err, records) {
            if (err){
              console.log(err);
              return;
            }

            let myProducts = [];
            for(let product of products){
              for(let i=0;i<product.productQuantity;i++){
                myProducts.push(product);
              }
            }

            for(let i=index;i<index+articlesPerDelivery;i++){
              // This function will update the articles and generate supplier purchases
              console.log("Delivery requested to suppliers! Preparing products...")
              await calculatePurchase(new mssql.Request(),myProducts[i],orderDate)
              await updateArticle(new mssql.Request(),myProducts[i],orderDate,deliveryId);
            }

            console.log("Success! Order complete.")

            resolve();
          });
        });
      });
    }); 
  }

  async function calculatePurchase(request,product,orderDate){
    return new Promise(function(resolve){

      let previousDate = new Date(orderDate);
      previousDate.setDate(previousDate.getDate() - 15);
      let prevDate = previousDate.getFullYear() + "-" +
        ((previousDate.getMonth()+1)>9?previousDate.getMonth()+1:"0"+(previousDate.getMonth()+1)) + "-" +
        (previousDate.getDate()>9?previousDate.getDate():"0"+previousDate.getDate());

      let query = "SELECT SUM(ss.Sales) AS Sales, SUM(Delivery_Days) AS Delivery_Days "+
        "FROM(SELECT s.Sale_Date AS Sale_Date,COUNT(s.Sale_ID) AS Sales, "+
            "SUM(DATEDIFF(dd,d.Delivery_Date,d.Actual_Arrival_Date)) AS Delivery_Days "+
        "FROM (((dbo.Sales AS s "+
          "INNER JOIN dbo.Articles AS a ON s.Article_ID = a.Article_ID) "+
          "INNER JOIN dbo.Products AS p ON a.Product_ID = p.Product_ID) "+
          "INNER JOIN dbo.Deliveries AS d ON s.Delivery_ID = d.Delivery_ID) "+
        "WHERE p.Product_ID = '" + product.productId + "' AND s.Sale_Date>='" + prevDate + "' AND s.Sale_Date<='" + orderDate + "' "+
        "GROUP BY s.Sale_Date) AS ss;"
        
      request.query(query, async function (err, records) {

        if (err){
          console.log(err);
          return;
        }

        let sales;
        if(records.recordset[0]["Sales"] == null){
          // The product has not been sold recently. We need to guess.
          sales = 5;
        } else {
          sales = Math.ceil(records.recordset[0]["Sales"]/15)
        }
        let deliveryDays;
        if(records.recordset[0]["Delivery_Days"] == null){
          // The product has not been completely delivered recently. We need to guess.
          deliveryDays = 5;
        } else {
          deliveryDays = Math.ceil(records.recordset[0]["Delivery_Days"]/15)
        }

        query = "SELECT SUM(DATEDIFF(dd,pur.Purchase_Date,pur.Purchase_Reception_Date)) AS Reception_Days " +
          "FROM (dbo.Purchases AS pur INNER JOIN dbo.Products AS p ON pur.Product_ID = p.Product_ID) " +
          "WHERE p.Product_ID = '" + product.productId + "' AND pur.Purchase_Date>='" + prevDate + "' AND pur.Purchase_Date<='" + orderDate + "';";
        request.query(query, async function (err, records) {

          if (err){
            console.log(err);
            return;
          }

          let receptionDates;
          if(records.recordset[0]["Reception_Days"] == null){
            // The product has not been received recently. We need to guess.
            receptionDates = 5;
          } else {
            receptionDates = Math.ceil(records.recordset[0]["Reception_Days"]/15)
          }

          let orderPoint = sales * (deliveryDays + receptionDates);

          query = "SELECT COUNT(a.Article_ID) AS Articles "+
            "FROM dbo.Articles AS a INNER JOIN dbo.Products AS p ON a.Product_ID = p.Product_ID "+
            "WHERE p.Product_ID = '" + product.productId + "' AND (CONVERT(VARCHAR,a.Article_Status) = 'AVAILABLE' OR CONVERT(VARCHAR,a.Article_Status) = 'REFUNDED');";
          request.query(query, async function (err, records) {

            if (err){
              console.log(err);
              return;
            }

            let articleCount;
            if(records.recordset.length==0 || records.recordset[0]["Articles"] == null){
              // No articles AVAILABLE!!!!!!!!.
              articleCount = 0;
            } else {
              articleCount = records.recordset[0]["Articles"]
            }

            if(articleCount>orderPoint){
              resolve();
            } else {
              let orderItems = (16*sales)-orderPoint;

              // Create the purchase in the DB
              request.query("SELECT TOP 1 Purchase_ID FROM dbo.Purchases ORDER BY Purchase_ID DESC;", async function (err, records) {
                if (err){
                  console.log(err);
                  return;
                }

                let purchaseId;
                if(records.recordset.length>0){
                  let latestId = records.recordset[0]["Purchase_ID"];
                  purchaseId = getNextID(latestId, "", 10);
                } else {
                  purchaseId = "0000000000";
                }

                query = "INSERT INTO dbo.Purchases VALUES('" +
                  purchaseId + "',"+
                  orderItems + ",'"+
                  orderDate.replace(/-/g,"") + "',"+
                  "null,'"+
                  product.productId + "');";
                request.query(query, async function (err, records) {
                  if (err){
                    console.log(err);
                    return;
                  }
                });
              });

              // Create articles according to the orderItems
              for(let i=0;i<orderItems;i++){
                await createArticle(new mssql.Request(),product,orderDate);
              }

              resolve();
            }
          });
        });
      });
    });
  }

  function createArticle(request,product,orderDate){
    return new Promise(function(resolve){
      request.query("SELECT TOP 1 Article_ID FROM dbo.Articles ORDER BY Article_ID DESC;", function (err, records) {
        if (err){
          console.log(err);
          return;
        }
  
        let articleId;
        if(records.recordset.length>0){
          let latestId = records.recordset[0]["Article_ID"];
          articleId = getNextID(latestId, "", 20);
        } else {
          articleId = "00000000000000000000";
        }

        query = "INSERT INTO dbo.Articles VALUES('" +
                  articleId + "','"+
                  product.productId + "','"+
                  "AVAILABLE','"+
                  orderDate.replace(/-/g,"") + "');";
        request.query(query, function (err, records) {
          if (err){
            console.log(err);
            return;
          }
          resolve();
        });
      });
    });
  }

  function updateArticle(request,product,orderDate,deliveryId){
    return new Promise(function(resolve){
      request.query("SELECT TOP 1 Article_ID FROM dbo.Articles "+
      "WHERE Product_ID = '" + product.productId + "' "+
      "AND (CONVERT(VARCHAR,Article_Status) = 'AVAILABLE' OR CONVERT(VARCHAR,Article_Status) = 'REFUNDED') "+
      "ORDER BY Article_ID;", function (err, records) {
        if (err){
          console.log(err);
          return;
        }
  
        let articleId = records.recordset[0]["Article_ID"];

        // Update the article to mark as SOLD
        let  query = "UPDATE dbo.Articles SET " +
        "Article_Status = 'SOLD' "+
        "WHERE Article_ID = '" + articleId + "';";
        request.query(query, function (err, records) {
          if (err){
            console.log(err);
            return;
          }
        });


        // Get the next sale ID
        request.query("SELECT TOP 1 Sale_ID FROM dbo.Sales ORDER BY Sale_ID DESC;", function (err, records) {
          if (err){
            console.log(err);
            return;
          }
    
          let saleId;
          if(records.recordset.length>0){
            let latestId = records.recordset[0]["Sale_ID"];
            saleId = getNextID(latestId, "", 20);
          } else {
            saleId = "00000000000000000000";
          }

          // Record the sale on the DB
          query = "INSERT INTO dbo.Sales VALUES('" +
            saleId + "',"+
            product.productActiveDiscount + ",'"+
            orderDate.replace(/-/g,"") + "','"+
            articleId + "',"+
            "null,'"+
            deliveryId + "');";
          request.query(query, function (err, records) {
            if (err){
              console.log(err);
              return;
            }
            resolve();
          });
        });
      });
    });
  }
  
  /**
   * 
   * END OF SERVICE
   * 
   */
}