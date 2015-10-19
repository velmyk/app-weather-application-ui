( function() {
	"use strict";

	angular
		.module("app")
		.controller("SettingsSwitcherController", SettingsSwitcherController);

	function SettingsSwitcherController($scope, SettingsSwitcherService, localStorageService) {
		var vm = this,
			init = JSON.parse($scope.init);

		vm.title = $scope.title;
		vm.settingsKey = init.settingsKey;
		vm.settingsKeyValue = localStorageService.get(vm.settingsKey, 1);
		vm.buttons = init.buttons;
		vm.setValue = SettingsSwitcherService.setSettings;

		$scope.$watch("switcher.settingsKeyValue", function() {
			localStorageService.set(vm.settingsKey, vm.settingsKeyValue);
		});
	}	

})();