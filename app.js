var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

var routes = require('./server/api/routes');

app.set('port',3000);
app.use(function(req,res,next){
	console.log(req.method, req.url);
	next();
});
/*STATIC REQUESTS*/
app.use(express.static(path.join(__dirname,'client')));

app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api',routes);

var server = app.listen(app.get('port'),function(){
	var port = server.address().port;
	console.log('Magic is on ' + port );
});