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

		vm.daysToDisplay = {
			settingsKey: "daysToDisplay",
			buttons: [
				{
					value: 3,
					title: 3
				},
				{
					value: 4,
					title: 4
				},
				{
					value: 5,
					title: 5
				}
			]
		};

		vm.syncPeriod = {
			settingsKey: "syncPeriod",
			buttons: [
				{
					value: 1,
					title: "Off"
				},
				{
					value: 2,
					title: "4hrs"
				},
				{
					value: 3,
					title: "8hrs"
				}
			]
		};
	}

})();

