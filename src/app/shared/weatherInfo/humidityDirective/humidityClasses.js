(function () {
	"use strict";
	angular
	.module("app")
	.value("humidityClasses", {
				low: 'lowHumidity',
				medium: 'mediumHumidity',
				high: 'highHumidity'
	});
})();