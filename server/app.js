'use strict';

var express  = require('express');
var	app = express();
var port = 8888;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/env');

mongoose.connect(config.mongo.uri);

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type"); 
	next(); 
});

require('./routes.js')(app);

app.listen(port);

console.log("Server listening on port " + port);
