var	weather = require("./data/weather.json"),
		cities = require("./data/cities.json");



module.exports = function(app) {

	app.get('/api/weather', function (req, res){
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

	app.get('/api/city/all', function (req, res){
		res.json(cities);	
	});

	app.get('*', function(req, res) {
		res.sendFile('./index.html'); 
	});
};