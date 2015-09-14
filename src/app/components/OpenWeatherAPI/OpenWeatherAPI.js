(function(){
	angular
		.module("app")
		.service("OpenWeatherAPI", OpenWeatherAPI);

	function OpenWeatherAPI($http, constants){
		var cityID = 703448,
			forecast,
			city,
			windForecast = {},
			humidityForecast = {},
			temperatureForecast = {},
			weatherStateForecast = {};

		function fetchResponse(response){
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
		}

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
					.then(fetchResponse);
		}
		

		return {
			loadForecast: loadForecast,
			city: city,
			windForecast: windForecast,
			humidityForecast: humidityForecast,
			temperatureForecast: temperatureForecast,
			weatherStateForecast: weatherStateForecast
		};
	}
})();