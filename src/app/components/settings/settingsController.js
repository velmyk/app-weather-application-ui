(function() {
	"use strict";

	angular
		.module('app')
		.controller('SettingsController', SettingsController);

	function SettingsController(SETTINGS) {

		var vm = this;

		vm.displayDay = SETTINGS.DISPLAY_DAY_TYPE;
		vm.daysToDisplay = SETTINGS.DISPLAY_DAY_AMOUNT;
		vm.syncPeriod = SETTINGS.SYNC_PERIOD;
	}

})();

