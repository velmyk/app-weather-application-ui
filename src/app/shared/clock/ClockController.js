(function() {
	"use strict";

	angular
	.module("app")
	.controller("ClockController", ClockController );

	function ClockController( ClockService, AnimationDelayService, DigitsClockService ) {
		var vm = this;

		vm.time = ClockService.getCurrentTime();

		vm.hoursDelay = AnimationDelayService.getHoursAnimationDelay(vm.time.currentTime);
		vm.minutesDelay = AnimationDelayService.getMinutesAnimationDelay(vm.time.currentTime);

		vm.hoursDigits = DigitsClockService.getHoursForClock( vm.time.currentTime, "12hours" );
		vm.minutesDigits = DigitsClockService.getMinutesForClock(vm.time.currentTime);
		vm.secondsDigits = DigitsClockService.getSecondsForClock(vm.time.currentTime);
	}
})();
