// myscript.js

var oracledb = require('oracledb-pb');

oracledb.getConnection(
  {
    user          : "pgourdet",
    password      : "!Inf1n1ty9",
    connectString : "oracle.cise.ufl.edu:1521/orcl/"

  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      `SELECT test.id from test where test.id > 5`,
      // bind value for :id
      function(err, result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
		console.log('SUCCESS');
		console.log(result.metaData);
        console.log(result.rows);
   // fetchOneRowFromRS(connection, result.resultSet);

        doRelease(connection);
      });
  });

function fetchOneRowFromRS(connection, resultSet)
{
  resultSet.getRow( 
    function (err, row)
    {
      if (err) {
        console.log(err);          // close the Result Set and release the connection
       // close the Result Set and release the connection
      } else {
        console.log(row);
        // fetchOneRowFromRS(connection, resultSet);  // get next row
      }
    });
}
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}