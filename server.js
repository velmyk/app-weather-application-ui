	var express    = require('express'),
		app        = express(),
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

	router.route('/weather/:cityId')
		.get(function (req, res){
			weather.forEach( function (item, i ) {
				if (item.city.id == req.params.cityId) {
					res.json(item);
				} else {
					res.json({"status": "err"});
				}
			});
		});

	router.route('/city/all')
		.get(function (req, res){
			res.json(cities);	
		});
	
	app.listen(port);
	console.log('Server starts at ' + port);