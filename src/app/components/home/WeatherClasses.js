(function() {
	"use strict";

	angular
	.module("app")
	.value("WeatherClasses", {
						thunder:				'thunder',
						drizzle:				'drizzle',
						lightRain:			'lightRain',
						heavyRain:			'heavyRain',
						freezingRain:		'freezingRain',
						snow:						'snow',
						clearSky:				'clearSky',
						fewClouds:			'fewClouds',
						scatteredClouds:'scatteredClouds',
						overcastClouds:	'overcastClouds',
						mist:						'mist',
						tornado:				'tornado'
	});
})();