(function () {
	"use strict";


angular
	.module("app")
	.factory("WeatherClassService", WeatherClassService);

function WeatherClassService(WeatherClasses ,WeatherClassesMap) {
 	var m = WeatherClassesMap.getWeatherClassesMap();
 	var mainWeatherClass, backgroundColor;

	function getWeatherClass( weatherId ){
 				
		for (var [key, value] of m) {

		  	if(key.test(weatherId)){

		  		mainWeatherClass = value;
		  		backgroundColor = value;
		  		
		  	break;
		  }
		}

 		return {
 			mainWeatherClass:mainWeatherClass,
 			backgroundColorClass:backgroundColor
 		};
	}
  
  	return {
		getWeatherClass: getWeatherClass
	};
}

})();
