(function(){
	"use strict";

	angular
		.module("app")
			.factory("TimeTrackingService", TimeTrackingService);

	function TimeTrackingService(TIME_IN_SECONDS, localStorageService) {

		var time = {};
		var closestDates =[];

		function initTime() {
			time.now = 1441875600;
			time.displayTime = 1441875600;
			time.displayDay = 0;
			time.maxDays = getMaxDays();

			time.tomorrow = calculateTime(1);
			time.theDayAfterTomorrow = calculateTime(2);

			closestDates =[ time.now,
								 time.tomorrow,
								 time.theDayAfterTomorrow 
								];
		}
		
		function getClosestDates (){
			return closestDates;
		}

		function getMaxDays() {
			if(!localStorageService.get("daysToDisplay")) {
				localStorageService.set("daysToDisplay", 3);
			}
			return localStorageService.get("daysToDisplay");
		}

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
			initTime: initTime,
			time: time,
			minusDay: minusDay,
			plusDay: plusDay,
			getClosestDates: getClosestDates
		};
	}
	
})();