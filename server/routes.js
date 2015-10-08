var	weather = require("./data/weather");


module.exports = function(app) {

	app.get('/api/weather', function (req, res){
		var statusCode = 404;
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

	app.use('/api/city', require("./api/city"));

	app.get('*', function(req, res) {
		res.status(404).json({"err" : "page not found"});
	});
};