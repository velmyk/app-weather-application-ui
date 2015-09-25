(function() {
	"use strict";


	angular
		.module("app")
		.service("WeatherClassesMap", WeatherClassesMap);


		function WeatherClassesMap(WeatherClasses) {
			var map = new Map();
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


			function getWeatherClassesMap(){
			
				map.set(thunderPattern , WeatherClasses.thunder);
				map.set(drizzlePattern , WeatherClasses.drizzle);
				map.set(lightRainPattern , WeatherClasses.lightRain);
				map.set(heavyRainPattern , WeatherClasses.heavyRain);
				map.set(freezingRainPattern ,WeatherClasses.freezingRain);
				map.set(snowPattern , WeatherClasses.snow);
				map.set(clearSkyPattern ,WeatherClasses.clearSky);
				map.set(fewCloudsPattern , WeatherClasses.fewClouds);
				map.set(scatteredCloudsPattern, WeatherClasses.scatteredClouds);
				map.set(overcastCloudsPattern , WeatherClasses.overcastClouds);
				map.set(mistPattern	, WeatherClasses.mist);
				map.set(tornado , WeatherClasses.tornado);

				return map;
			}

		return {
					getWeatherClassesMap: getWeatherClassesMap
			};
	}

})();