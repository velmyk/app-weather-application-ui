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
				'dt': "4242342",
				'main': {
					"temp": 23,
					"humidity": 52
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

	function getCity() {
		return data.city.name;
	}

	function getTemperature(date) {
		return data.list[0].main.temp;
	}

	function getHumidity() {
		return data.list[0].main.humidity;
	}

	/*
		getWind()
		Retuns object with keys speed and degree
	*/
	function getWind() {
		return {
			"speed": data.list[0].wind.speed,
			"degree": data.list[0].wind.deg
		};

	}

	return {
		getWind : getWind,
		getHumidity : getHumidity,
		getTemperature : getTemperature,
		getCity : getCity
	};
}