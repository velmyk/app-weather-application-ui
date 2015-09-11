var express  = require('express');
var	app = express();
var port = 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

app.use(express.static(__dirname + '/build'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


require('./server-routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
