(function() {
	"use strict";

	angular
		.module('app')
		.service('ClockService', ClockService);


	function ClockService($timeout) {
		const secInOneHour = 60*60,
				secInOneMinute = 60,
				hoursInOneDay = 24,
				secInOneDay = 86400,
				milliseconds = 1000;

		var time = {},
			 tomorrow,
			 timeUntilTomorrow,
			 switchingTime,
			 timeUntillSwitch;

		function init(){
			time.currentTime = new Date();
			tomorrow = getTomorrow(time.currentTime);
			timeUntilTomorrow = tomorrow - time.currentTime;
			switchingTime = getSwitchingTime(time.currentTime);
			timeUntillSwitch = switchingTime - time.currentTime;
		}

		init();

		function getTomorrow( date ){
			return new Date(date.getFullYear(), date.getMonth(),date.getDate()+1);
		}

		$timeout(handlerForTomorrow, timeUntilTomorrow);

		function handlerForTomorrow(){
			setCurrentTime();
			$timeout(setCurrentTime, secInOneDay*milliseconds);
		}
		
		function getSwitchingTime(date){
			var switchingTime;

			switchingTime = (date.getHours() >= 0 && date.getHours() < 12) ? 
								getNoon(date): getTomorrow(date);

			return switchingTime;
		}

		function getNoon (date) {
			return new Date(date.getFullYear(), date.getMonth(),date.getDate(), 12);
		}

		$timeout(handlerSwitch, timeUntillSwitch);

		function handlerSwitch(){
			setCurrentTime();
			$timeout(setCurrentTime, secInOneDay*milliseconds/2);
		}

		function setCurrentTime(){
			time.currentTime = new Date();
		}

		function getCurrentTime(){
			return time;
		}

		return {
			getCurrentTime: getCurrentTime
		};
	}
})();