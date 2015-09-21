( function() {
	"use strict";

	angular
		.module("app")
		.service("DateLabel", DateLabel);

	function DateLabel(constants){

		function getTimeLabel(timestamp) {
			const miliseconds = 1000,
				  day = 24*60*60*1000; 

			var scopeTime = new Date(timestamp * miliseconds),
				today = new Date();
				
			scopeTime.setHours(0,0,0,0);
			today.setHours(0,0,0,0);

			if (+scopeTime == +today) {
				return constants.TODAYSTR;
			} else if (+scopeTime == (+today) + day) {
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