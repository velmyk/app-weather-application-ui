(function() {
	"use strict";

	angular
		.module("app")
			.factory("Daynight", Daynight);

	function Daynight(WeatherService) {

		function isNight(date){
			var dayPart = (new Date(date)).getHours();
			if ((dayPart > 22) && (dayPart < 6)) {
				return true;
			} else {
				return false;
			}
		}

		function isDay(date){
			return !isNight(date);
		}

		function closestForecast(date) {
			var closestDate = +date + 43200;
			return WeatherService.getTemp(closestDate);
		}

		return {
			closestForecast: closestForecast,
			isDay : isDay,
			isNight : isNight,
		};
	}

})();
