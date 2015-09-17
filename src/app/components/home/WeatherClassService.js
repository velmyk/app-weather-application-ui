(function () {
	"use strict";


angular
	.module("app")
	.factory("WeatherClassService", WeatherClassService);

function WeatherClassService(WeatherClasses) {
 	
	function getWeatherClass( weatherId ){
 		var mainWeatherClass, backgroundColor;

 		var thunderPattern = /^2|^90[1,2,5,6]|^95[^1-4]|^96/;
 		var drizzlePattern =/^3/;
 		var lightRainPattern =/^50[0-1]$/;
 		var heavyRainPattern=/(^50[2-4]$)|(^5[2-3][0-9]$)/; 
 		var freezingRainPattern = /(511)|(^61)/; 
		var snowPattern =/(^60)|(^62)/;
		var clearSkyPattern = /800|904|951/;
		var fewCloudsPattern = /801|^95[2-4]/;
		var scatteredCloudsPattern= /80[2,3,4]|903/;
		var overcastCloudsPattern = /804/;
		var mistPattern = /^7[0-7]/;
		

 		if ( thunderPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.thunder;
 		}
 		else if ( drizzlePattern.test(weatherId)){
			mainWeatherClass = backgroundColor =  WeatherClasses.drizzle;
 		}
 		else if ( lightRainPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.lightRain;
 		}
 		else if ( heavyRainPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.heavyRain;
 		}
 		else if ( freezingRainPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.freezingRain;
 		}
 		else if ( snowPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.snow;
 		}
 		else if ( clearSkyPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.clearSky;
 		}
 		else if ( fewCloudsPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.fewClouds;
 		}
		else if ( scatteredCloudsPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.scatteredClouds;
 		}
 		else if ( overcastCloudsPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.overcastClouds;
 		}
 		else if ( mistPattern.test(weatherId)){
			mainWeatherClass = backgroundColor = WeatherClasses.mist;
 		}
 		else {
			mainWeatherClass = backgroundColor = WeatherClasses.tornado;
 		}
 
 		return {
 			imageClass:mainWeatherClass,
 			backgroundColor:backgroundColor
 		};
	}
  
  	return {
		getWeatherClass: getWeatherClass
	};
}

})();
