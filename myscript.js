// myscript.js
var express = require('express');
var app = express();
var parse = require('body-parser');
//var route = require('route');
var oracledb = require('oracledb-pb');

connectionInfo = require('./cred');

app.get('/profiles', function(req,res){
"use strict"
oracledb.getConnection(connectionInfo,
  function(err, connection)
  {
    if (err) {
      res.set('Content-Type','application/json');
      res.status(500).send(JSON.stringify({
        status: 500,
        message: "Error connection to DB",
        details: err.message
      }));
      return;
    }
    connection.execute(
      `SELECT * FROM USERS`,{},{
        outFormat: oracledb.OBJECT
      },
      // Outputs a oracledb object
      function(err, result)
      {
        if (err) {
      res.set('Content-Type','application/json');
        res.status(500).send(JSON.stringify({
          status: 500,
          message: "Error getting user profiles",
          details: err.message
        }));
          return;
      }
      else{
          res.contentType('application/json').status(200);
          res.send(JSON.stringify(result.rows));
        //The commented out is a basic way recomended is bu use of the getRow or getRows function call below
      }

        doRelease(connection);
      });
  });


});
  
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}
var server = app.listen(3000, function(){
  "use strict"
  var host = server.address().address,
      port = server.address().port;
      console.log('Server is listening at http://%s:%s',host,port);
});