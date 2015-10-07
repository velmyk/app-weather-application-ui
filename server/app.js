'use strict';

var express  = require('express');
var	app = express();
var port = 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/env');

mongoose.connect(config.mongo.uri);

app.use(express.static(__dirname + '/../build'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


require('./routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
