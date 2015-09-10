(function () {
	"use strict";

	angular
		.module("app")
		.service("WeatherService", WeatherService);

	function WeatherService($http, constants) {
		var	cityID = 703448,
			forecast = {};

		function loadForecast() {
			return	$http({
						url: constants.APIURL,
						method: "GET",
						params: {
							id: cityID,
							units: "metric",
							APPID: constants.APIKEY
						}
					})
					.then( function(response){
						forecast = response.data;
					});
		}

		function findInForecast (date, type) {
			var result;
			forecast.list.forEach(function (item, i) {
				if (isClosestTime(date, item.dt)) {
					switch (type) {
						case "temp":
							result = item.main.temp;
							break;
						case "humidity":
							result = item.main.humidity;
							break;
						case "windSpeed":
							result = item.wind.speed;
							break;
						case "windDegree":
							result = item.wind.deg;
							break;
						case "weatherId":
							result = item.weather[0].id;
							break;
						case "weatherDesc":
							result = item.weather[0].description;
							break;
						case "weatherState":
							result = item.weather[0].main;
							break;
					}
				}
			});
			return result;
		}

		function isClosestTime(current,possible) {
			var diff = possible - current;
			
			if (diff >= 0 && diff <= 5400) {
				return true;
			} else {
				return false;
			}
		}

		function getCity() {
			return forecast.city.name;
		}

		function getTemp(date) {
			return Math.round(findInForecast(date,"temp"));

		}

		function getHumidity(date) {
			return findInForecast(date, "humidity");
		}

		function getWindSpeed(date) {
			return findInForecast(date, "windSpeed");
		}

		function getWindDirection(date) {
			return findInForecast(date, "windDegree");
		}

		function getWeatherId(date) {
			return findInForecast(date, "weatherId");
		}

		function getWeatherState(date) {
			return findInForecast(date, "weatherState");
		}

		function getWeatherDesc(date) {
			return findInForecast(date, "weatherDesc");
		}

		return {
			loadForecast: loadForecast,
			getCity: getCity,
			getTemp: getTemp,
			getHumidity: getHumidity,
			getWindSpeed: getWindSpeed,
			getWindDirection: getWindDirection,
			getWeatherDesc: getWeatherDesc,
			getWeatherState: getWeatherState,
			getWeatherId: getWeatherId
		};
	}
})();