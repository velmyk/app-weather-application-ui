(function() {
	"use strict";


	angular
		.module("app")
		.factory("WeatherClassService", WeatherClassService);

	function WeatherClassService( WeatherClasses, WeatherClassesMap, WeatherService ) {
		var map = WeatherClassesMap.getWeatherClassesMap(),
						mainWeatherClass,
						backgroundColor,
						homeBackGround = {
							bgClass: ''
						};

		function setBgClass ( displayTime ) {

			var weatherId = WeatherService.getWeatherId( displayTime );

			for (var [key, value] of map) {

				if(key.test(weatherId)){

					homeBackGround.bgClass = value;
					break;
				}
			}
		}

		function getBgClass() {
			return homeBackGround.bgClass;
		}

		function getWeatherIconClass( displayTime ){

			var weatherId = WeatherService.getWeatherId( displayTime );

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
			getWeatherIconClass: getWeatherIconClass,
			setBgClass: setBgClass
		};
	}

})();
