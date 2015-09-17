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
		var tornado=/900|781/;
		
		var m = new Map();
		
			m.set(thunderPattern , WeatherClasses.thunder);
			m.set(drizzlePattern , WeatherClasses.drizzle);
			m.set(lightRainPattern , WeatherClasses.lightRain);
			m.set(heavyRainPattern , WeatherClasses.heavyRain);
			m.set(freezingRainPattern ,WeatherClasses.freezingRain);
			m.set(snowPattern , WeatherClasses.snow);
			m.set(clearSkyPattern ,WeatherClasses.clearSky);
			m.set(fewCloudsPattern , WeatherClasses.fewClouds);
			m.set(scatteredCloudsPattern, WeatherClasses.scatteredClouds);
			m.set(overcastCloudsPattern , WeatherClasses.overcastClouds);
			m.set(mistPattern	, WeatherClasses.mist);
			m.set(tornado , WeatherClasses.tornado);

		for (var [key, value] of m) {
		  if(key.test(weatherId)){
		  	mainWeatherClass = backgroundColor = value;
		  	break;
		  }
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
