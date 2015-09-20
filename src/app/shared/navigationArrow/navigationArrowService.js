(function(){
	"use strict";

	angular
		.module("app")
			.factory("NavSrv", NavSrv);

	function NavSrv(TIME_IN_SECONDS) {

		var time = {
			now: 1441875600,
			displayTime: 1441875600,
			displayDay: 0,
			maxDays: 5
		};

		function arrowImg(direction) {
			return (direction === "left") ? "svg/z-arrow-left.svg" : "svg/z-arrow-right.svg";
		}

		function changeDay(direction) {
			return (direction === "left") ? minusDay : plusDay;
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
			var now = time.now;
			return (new Date((time.now + days * TIME_IN_SECONDS.DAY)*1000).setHours(15))/1000;
		}

		// function setMaxDays (day) {
		// 	time.maxDays = day;
		// }

		// function getMaxDays () {
		// 	return time.maxDays;
		// }

		// function getDisplayTime () {
		// 	return time.displayTime;
		// }

		return {
			time: time,
			arrowImg : arrowImg,
			changeDay: changeDay,
			minusDay: minusDay,
			plusDay: plusDay
		};
	}
	
})();