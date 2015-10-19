(function() {
	"use strict";

	angular
		.module("app")
		.service("OpenWeatherAPI", OpenWeatherAPI);

	function OpenWeatherAPI( $http, constants, localStorageService, API_CONSTANTS ){

		var city = {},
				windForecast = {},
				humidityForecast = {},
				temperatureForecast = {},
				weatherStateForecast = {};

		function fetchResponse( response ){
			city.name = response.data.city.name;

			response.data.list.forEach( function ( item, i ) {
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
		}

		function loadForecast() {
			return	$http({
						url: API_CONSTANTS.APIURL,
						method: "GET",
						params: {
							id: localStorageService.get('locationToDisplay', constants.DEFAULT_CITY_ID),
							units: "metric",
							APPID: API_CONSTANTS.APIKEY
						}
					})
					.then(fetchResponse);
		}

		return {
			loadForecast: loadForecast,
			windForecast: windForecast,
			humidityForecast: humidityForecast,
			temperatureForecast: temperatureForecast,
			weatherStateForecast: weatherStateForecast,
			city: city,
		};
	}
})();