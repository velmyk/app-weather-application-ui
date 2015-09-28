( function() {
	"use strict";

	angular
		.module("app")
		.service("DateLabelService", DateLabelService);

	function DateLabelService(constants, localStorageService){

		var weekDay = {
			0: "Sunday",
			1: "Monday",
			2: "Tuesday",
			3: "Wednesday",
			4: "Thursday",
			5: "Friday",
			6: "Saturday"
		};

		function getTimeLabel( timestamp ) {
			const miliseconds = 1000,
						day = 24 * 60 * 60 * 1000; 

			var scopeTime = new Date(timestamp * miliseconds),
					today = new Date(),
					dayDisplayType = localStorageService.get("dayDisplayType") || 1;
				
			scopeTime.setHours(0,0,0,0);
			today.setHours(0,0,0,0);

			if (+scopeTime == +today) {
				return constants.TODAYSTR;
			} else if (+scopeTime == (+today) + day) {
				return constants.TOMORROWSTR;
			} else {
				return (dayDisplayType == 1) ? scopeTime : weekDay[scopeTime.getDay()];
			}
		}

		return {
			getTimeLabel: getTimeLabel
		};
	}
})();