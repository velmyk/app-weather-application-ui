(function () {
	"use strict";

	angular
		.module("app")
		.service("WeatherService", WeatherService);

	function WeatherService($http, constants) {
		var	cityID = 703448,
			city,
			windForecast = {},
			humidityForecast = {},
			temperatureForecast = {},
			weatherStateForecast = {};

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
						city = response.data.city.name;

						response.data.list.forEach( function (item, i) {
							temperatureForecast[item.dt] = item.main.temp;
							humidityForecast[item.dt] = item.main.humidity;
							windForecast[item.dt] = {
								speed: item.wind.speed,
								degree: item.wind.deg,
							};
							weatherStateForecast[item.dt] = {
								id: item.weather[0].id,
								desc: item.weather[0].description,
								state: item.weather[0].main
							};
						});
					});
		}

		function findClosestVal(current,forecast) {
			var diff;
			for (var dt in forecast) {
				diff = dt - current;
				if (diff >= 0 && diff <= 5400) {
					return forecast[dt];
				}
			}
		}

		function getCity() {
			return city;
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
			var closestDate = +date + 43200;
			return getTemp(closestDate);
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
			getClosestTemp: getClosestTemp,
			getWeatherId: getWeatherId
		};
	}
})();