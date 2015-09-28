(function() {
	"use strict";

	angular
		.module('app')
		.controller('SettingsController', SettingsController);

	function SettingsController() {

		var vm = this;

		vm.displayDay = {
			settingsKey: "dayDisplayType",
			buttons: [
				{
					value: "1",
					title: "Date"
				},
				{
					value: "2",
					title: "Weekday"
				}
			]
		};
	}

})();

