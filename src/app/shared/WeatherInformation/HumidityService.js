(function () {
	"use strict";

	angular
	.module("app")
	.service("HumidityService", HumidityService);

	function HumidityService(humidityClasses){
		var humidityClass;
		function getHumidityClass(humidity){
			if ( humidity < 72 ){
				humidityClass = humidityClasses.low;
			}
			else if( humidity < 82 ){
				humidityClass = humidityClasses.medium;
			}
			else {
				humidityClass = humidityClasses.high;
			}
			return humidityClass;
		}


		return {
			getHumidityClass:getHumidityClass
		};

	}

})();