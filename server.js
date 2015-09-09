var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		weather = require("./data/weather.json"),
		cities = require("./data/cities.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8000;
var router = express.Router();

router.use(function(req, res, next) {
  	next(); 
});

app.use('/api', router);

router.route('/weather')
	.get(function (req, res){
		var statusCode = 404,
			  resData = {"status": "err"};
			  
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