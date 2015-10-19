(function(){
	"use strict";

	angular
		.module("app")
			.factory("TimeTrackingService", TimeTrackingService);

	function TimeTrackingService(TIME_IN_SECONDS, localStorageService, ClockService) {
		var milliseconds=1000;
		var time = {};
		

		function initTime() {
			time.now = 1441875600;
			time.displayTime = time.now ;
			time.displayDay = 0;
			time.maxDays = getMaxDays();
		}
		
		function getClosestDates (){
			return [
								time.now,
								calculateTime(1),
								calculateTime(2)
							];
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
			return (new Date((time.now + days * TIME_IN_SECONDS.DAY)*milliseconds).setHours(15))/milliseconds;
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