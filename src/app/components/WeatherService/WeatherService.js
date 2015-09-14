(function () {
	"use strict";

	angular
		.module("app")
		.service("WeatherService", WeatherService);

	function WeatherService($http, constants, OpenWeatherAPI) {
		var	hourAndHalf = 5400,
			halfADay = 43200,
			windForecast = OpenWeatherAPI.windForecast,
			humidityForecast = OpenWeatherAPI.humidityForecast,
			temperatureForecast = OpenWeatherAPI.temperatureForecast,
			weatherStateForecast = OpenWeatherAPI.weatherStateForecast,
			city = OpenWeatherAPI.city;

		function findClosestVal(current,forecast) {
			var diff;
			for (var dt in forecast) {
				diff = dt - current;
				if (diff >= 0 && diff <= hourAndHalf) {
					return forecast[dt];
				}
			}
		}

		function getCity() {
			return city["name"];
		}

		function getTemp(date) {
			return Math.round(findClosestVal(date,temperatureForecast));
		}

		function getHumidity(date) {
			return findClosestVal(date, humidityForecast);
		}

		function getWindSpeed(date) {
			return findClosestVal(date, windForecast).speed;
		}

		function getWindDirection(date) {
			return findClosestVal(date, windForecast).degree;
		}

		function getWeatherId(date) {
			return findClosestVal(date, weatherStateForecast).id;
		}

		function getWeatherState(date) {
			return findClosestVal(date, weatherStateForecast).state;
		}

		function getWeatherDesc(date) {
			return findClosestVal(date, weatherStateForecast).desc;
		}

		function getClosestTemp(date) {
			var closestDate = +date + halfADay;
			return getTemp(closestDate);
		}

		return {
			getCity: getCity,
			getTemp: getTemp,
			getHumidity: getHumidity,
			getWindSpeed: getWindSpeed,
			getWindDirection: getWindDirection,
			getWeatherDesc: getWeatherDesc,
			getWeatherState: getWeatherState,
			getClosestTemp: getClosestTemp,
			getWeatherId: getWeatherId
		};
	}
})();