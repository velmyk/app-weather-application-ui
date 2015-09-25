(function(){
	"use strict";

	angular
		.module("app")
			.factory("TimeTrackingService", TimeTrackingService);

	function TimeTrackingService(TIME_IN_SECONDS) {

		var time = {
			now: 1441875600,
			displayTime: 1441875600,
			displayDay: 0,
			maxDays: 5
		};

		function plusDay() {
			if (time.displayDay < (time.maxDays - 1)) {
				time.displayDay ++;
				time.displayTime = calculateTime(time.displayDay);
			}
		}

		function minusDay() {
			if (time.displayDay > 0) {
				if (time.displayDay === 1) {
					time.displayDay --;
					time.displayTime = time.now;
				} else {
					time.displayDay --;
					time.displayTime = calculateTime(time.displayDay);
				}
			}
		}

		function calculateTime (days) {
			return (new Date((time.now + days * TIME_IN_SECONDS.DAY)*1000).setHours(15))/1000;
		}

		return {
			time: time,
			minusDay: minusDay,
			plusDay: plusDay
		};
	}
	
})();