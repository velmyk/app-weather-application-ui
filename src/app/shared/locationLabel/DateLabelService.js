( function() {
	"use strict";

	angular
		.module("app")
		.service("DateLabel", DateLabel);

	function DateLabel(constants){

		function getTimeLabel(timestamp) {
			var miliseconds = 1000,
				scopeTime = new Date(timestamp * miliseconds),
				today = new Date(),
				tomorrow = new Date(today.getDate()+1),
				tomorrow2 = new Date(today);

			scopeTime.setHours(0,0,0,0);
			today.setHours(0,0,0,0);
			tomorrow.setHours(0,0,0,0);

			if ( +scopeTime == +today) {
				return constants.TODAYSTR;
			} else if (+scopeTime == +tomorrow) {
				return constants.TOMORROWSTR;
			} else {
				return scopeTime;
			}

		}

		return {
			getTimeLabel: getTimeLabel
		};
	}
})();