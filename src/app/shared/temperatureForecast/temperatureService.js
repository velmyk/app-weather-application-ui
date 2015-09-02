(function() {
	"use strict";

	angular
		.module("app")
			.factory("Daynight", Daynight);

	function Daynight() {

		var dayPart = (new Date()).getHours();

		function isNight(){
			if ((dayPart > 22) && (dayPart < 6)) {
				return true;
			} else {
				return false;
			}
		}

		function isDay(){
			if ((dayPart > 22) && (dayPart < 6)) {
				return false;
			} else {
				return true;
			}
		}


		return {
			isDay : isDay,
			isNight : isNight,
		};
	}

})();
