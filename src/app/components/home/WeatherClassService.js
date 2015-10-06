(function() {
	"use strict";


	angular
		.module("app")
		.factory("WeatherClassService", WeatherClassService);

	function WeatherClassService( WeatherClasses, WeatherClassesMap, WeatherService ) {
		var map = WeatherClassesMap.getWeatherClassesMap(),
						mainWeatherClass,
						weatherId,
						backgroundColor;


		function getBgClass(displayTime) {
			weatherId = WeatherService.getWeatherId( displayTime );
			
			for (var [key, value] of map) {

				if(key.test(weatherId)){

					backgroundColor = value;
					break;
				}
			}
			return backgroundColor;
		}

		function getWeatherIconClass( displayTime ){

			weatherId = WeatherService.getWeatherId( displayTime );

			for (var [key, value] of map) {

				if(key.test(weatherId)){

					mainWeatherClass = value;
					break;
				}
			}

			return mainWeatherClass;
		}

		return {
			getBgClass: getBgClass,
			getWeatherIconClass: getWeatherIconClass
		};
	}

})();