(function() {
	"use strict";

	angular
		.module('app')
		.service('AnimationDelayService', AnimationDelayService);


	function AnimationDelayService() {
		const secInOneHour = 60*60,
				secInOneMinute = 60,
				additionalDelay= 0.2;

		var minutesDelay,
			 hoursDelay;

		function minutesAnimationDelayCounter(currentTime){
			minutesDelay = secInOneMinute - currentTime.getSeconds() + additionalDelay;
			return minutesDelay;
		}
		function hoursAnimationDelayCounter(currentTime){
			hoursDelay = secInOneHour - secInOneMinute*currentTime.getMinutes() -
							 currentTime.getSeconds()+ additionalDelay;
			return hoursDelay ;
		}

		function getMinutesAnimationDelay(currentTime) {
			return minutesAnimationDelayCounter(currentTime);
		}
		
		function getHoursAnimationDelay(currentTime){
			return hoursAnimationDelayCounter(currentTime);
		}


		return {
			getHoursAnimationDelay: getHoursAnimationDelay,
			getMinutesAnimationDelay: getMinutesAnimationDelay
		};
	}
})();