angular
	.module("app")
	.factory("Weather", Weather);

function Weather() {
	var data = {
		"city": {
			"id" : 228,
			"name" : "Ghetto"
		},
		"list": [
			{
				'dt': 4242342,
				'main': {
					"temp": 23,
					"humidity": 52,
					"tempForecast": 12
				},
				"weather" : {
					"main": "Clear",
					"desc": "Heavy rain"
				},
				"wind":{
					"speed":2.32,
					"deg":336.509
				},
			}
		]
	};

	var weatherList = data.list;

	function findByDate(arr, date) {

		var resultItem = false;

		arr.forEach( function (item, i) {
			if (item.dt === date) {
				resultItem = item;
			}
		});

		return resultItem;
	}

	function getDate() {
		return data.list[0].dt;
	}

	function getCity() {
		return data.city.name;
	}

	function getTemperature(date) {
		var item,
				tempCurrent, // seems that this vars should have default value for correct behavior
				tempForecast, // but for now we're sure that will find values in data
				dayPart;

		item = findByDate(weatherList, date);

		if(item) {
				tempCurrent = item.main.temp;
				tempForecast = item.main.tempForecast;
		}

		return {
			"tempCurrent" : tempCurrent,
			"tempForecast": tempForecast,
		};
	}

	function getHumidity(date) {
		var item,
				humidity; // seems that this vars should have default value for correct behavior
					  			// but for now we're sure that will find values in data
		item = findByDate(weatherList, date);

		if(item) {
				humidity = item.main.humidity;
		}

		return humidity;
	}

	function getWind(date) {
		var speed,   // seems that this vars should have default value for correct behavior
			degree,  // but for now we're sure that will find values in data
			item;

		item = findByDate(weatherList, date);

		if(item) {
				speed = item.wind.speed;
				degree = item.wind.deg;
		}

		return {
			"speed": speed,
			"degree": degree
		};

	}

	function getWeather(date) {
		var main, desc;

		item = findByDate(weatherList, date);

		if(item && item.weather) {
			main = item.weather.main;
			desc = item.weather.desc;
		}

		return {
			"main": main,
			"desc": desc
		};

	}

	return {
		getWind : getWind,
		getTemperature : getTemperature,
		getHumidity : getHumidity,
		getCity : getCity,
		getWeather : getWeather
	};
}