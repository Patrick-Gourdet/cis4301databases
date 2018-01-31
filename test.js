var express = require('express');
var app = express();
var parse = require('body-parser');

var oracledb = require('oracledb-pb');

oracledb.getConnection({
    user          : "pgourdet",
     password      : "!Inf1n1ty9",
     connectString : "oracle.cise.ufl.edu:1521/orcl/"

  },
  function(err, connection)
  {
    if (err) {
console.log(err);
      return;
    }
    connection.execute(
      `SELECT * FROM USERS`,{},{
        outFormat: oracledb.OBJECT
      },
      // Outputs a oracledb object
      function(err, result)
      {
console.log(result.rows);
        doRelease(connection);
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