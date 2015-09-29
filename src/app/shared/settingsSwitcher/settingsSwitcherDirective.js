( function () {
	"use strict";

	angular
		.module("app")
		.directive("settingsSwitcher", settingsSwitcher);

	function settingsSwitcher() {
		return {
			restrict: "E",
			scope: {
				title: "@",
				init: "@"
			},
			replace: true,
			controller: "SettingsSwitcherController",
			controllerAs: "switcher",
			templateUrl: "shared/settingsSwitcher/settingsSwitcherView.html"
		};
	}
})();