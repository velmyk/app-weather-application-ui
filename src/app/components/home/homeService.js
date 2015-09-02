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
				"waether" : {
					"main": "Clear",
					'desc': "Sky is clear"
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

		var resultItem;

		arr.forEach( function (item, i) {
			if (item.dt === date) {
				resultItem = item;
			}
		});

		if(resultItem) {
			return resultItem;
		} else {
			return false;
		}
	};

	function getDate() {
		return data.list[0].dt;
	}

	function getCity() {
		return data.city.name;
	}

	function getTemperature(date) {
		var item,
				temperature, // seems that this vars should have default value for correct behavior
				tempForecast, // but for now we're sure that will find values in data
				dayPart;

		item = findByDate(weatherList, date);

		if(item) {
				temperature = item.main.temp;
				tempForecast = item.main.tempForecast;
		}

		dayPart = (new Date()).getHours();

		if ((dayPart > 22) && (dayPart < 6)) {
			dayPart = "Day";
		} else {
			dayPart = "Night";
		}

		return {
			"temperature" : temperature,
			"tempForecast": tempForecast,
			"dayPart": dayPart
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

		return {
			"humidity": humidity
		};
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

	return {
		getWind : getWind,
		getTempAndHumidity : getTemperature,
		getHumidity : getHumidity,
		getCity : getCity
	};
}