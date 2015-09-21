(function () {
	"use strict";


angular
	.module("app")
	.factory("WeatherClassService", WeatherClassService);

function WeatherClassService(WeatherClasses ,WeatherClassesMap, WeatherService, NavSrv) {
	var m = WeatherClassesMap.getWeatherClassesMap(),
					mainWeatherClass,
					backgroundColor,
					homeBackGround = {
						bgClass: '',
						mainWeatherClass: ''
					};

	function setBgClass ( displayTime ) {

		var weatherId = WeatherService.getWeatherId( displayTime );

 				
		for (var [key, value] of m) {

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
 				
		for (var [key, value] of m) {

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
