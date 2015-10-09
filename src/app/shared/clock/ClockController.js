(function() {
	"use strict";

	angular
	.module("app")
	.controller("ClockController", ClockController);

	function ClockController( ClockService ) {
		var vm = this;
		
		vm.time = ClockService.getCurrentTime();
		
		vm.digitsForClock = ClockService.getDigitsForClock("12hours");

		vm.delaysForAnimations = ClockService.getTimeDelaysForAnimations();

	}
})();
