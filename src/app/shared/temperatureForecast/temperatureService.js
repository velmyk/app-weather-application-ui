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
			return !isNight();
		}


		return {
			isDay : isDay,
			isNight : isNight,
		};
	}

})();
