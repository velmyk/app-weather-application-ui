(function () {
	"use strict";

	angular
		.module("app")
		.service("WeatherService", WeatherService);

	function WeatherService( $http, TIME_IN_SECONDS, OpenWeatherAPI ) {
		var	windForecast = OpenWeatherAPI.windForecast,
				humidityForecast = OpenWeatherAPI.humidityForecast,
				temperatureForecast = OpenWeatherAPI.temperatureForecast,
				weatherStateForecast = OpenWeatherAPI.weatherStateForecast,
				city = OpenWeatherAPI.city;

		function findClosestVal( current,forecast ) {
			var diff;
			for (var dt in forecast) {
				diff = Math.abs(dt - current);
				if (diff <= ( TIME_IN_SECONDS.HOUR * 3 ) ) {
					return forecast[dt];
				}
			}
		}

		function getCity() {
			return city.name;
		}

		function getTemp( date ) {
			var temperature = findClosestVal(date,temperatureForecast);
			return (temperature) ? Math.round(temperature) : getTemp( +date - ( TIME_IN_SECONDS.HOUR * 1.5 ) );
		}

		function getHumidity( date ) {
			return findClosestVal(date, humidityForecast);
		}

		function getWindSpeed( date ) {
			return findClosestVal(date, windForecast).speed.toFixed(1);
		}

		function getWindDirection( date ) {
			return findClosestVal(date, windForecast).degree;
		}

		function getWeatherId( date ) {
			return findClosestVal(date, weatherStateForecast).id;
		}

		function getWeatherState( date ) {
			return findClosestVal(date, weatherStateForecast).state;
		}

		function getWeatherDesc( date ) {
			return findClosestVal(date, weatherStateForecast).desc;
		}


		function getClosestTemp( date ) {
			var closestDate = +date + TIME_IN_SECONDS.DAY * 0.5;
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