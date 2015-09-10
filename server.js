var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		weather = require("./data/weather.json"),
		cities = require("./data/cities.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3637;
var router = express.Router();

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  	next(); 
});

app.use('/api', router);

router.route('/weather')
	.get(function (req, res){
		var statusCode = 404,
			  resData = {"error": "city not found"};
			  
		weather.forEach( function (item, i ) {
			if (item.city.id == req.query.id) {
				statusCode = 200;
				resData = item;
				return;
			}
		});
	
		res.status(statusCode).json(resData);
	
	});

router.route('/city/all')
	.get(function (req, res){
		res.json(cities);	
	});

app.listen(port);
console.log('API server starts at ' + port);