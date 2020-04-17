const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mssql = require("mssql");

const dataBaseConfig ={
    user: "jgavitom",
    password: "NotWelcome789",
    server: "cutieplushie.database.windows.net",
    database: "cutieplushie"
};

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'SECRET_KEY';

module.exports = new JwtStrategy(opts, function(jwt_payload, done){
    mssql.connect(dataBaseConfig, function(err){

        if (err){
          console.log(err);
        }
    
        let request = new mssql.Request();
        let query;
        if(jwt_payload.userKey.length === 9 && !jwt_payload.userKey.includes('@')){
            query = "SELECT * FROM dbo.Users WHERE User_ID = '" + jwt_payload.userKey + "';";
            request.query(query,
              function (err, records) {
                if (err){
                  console.log(err);
                  res.send(err);
                }
                
                if(records.recordset.length === 1){
                  let user = {
                      userId: records.recordset[0].User_ID,
                      userName: records.recordset[0].User_Name,
                      userLastName: records.recordset[0].User_Last_Name,
                      userGroup: records.recordset[0].User_Group,
                  };
                  return done(null, user);
                } else {
                  return done(null, false)
                }
              }); 
        } else {
            query = "SELECT * FROM dbo.Customers WHERE Customer_ID = '" + jwt_payload.userKey + "';";
            request.query(query,
              function (err, records) {
                if (err){
                  console.log(err);
                  res.send(err);
                }
                
                if(records.recordset.length === 1){
                  let customer = {
                      customerId: records.recordset[0].Customer_ID,
                      customerName: records.recordset[0].Customer_Name,
                      customerLastName: records.recordset[0].Customer_Last_Name
                  };
                  return done(null, user);
                } else {
                  return done(null, false)
                }
              }); 
        }
        
    });   
});