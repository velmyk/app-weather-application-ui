(function() {
	"use strict";

	angular
		.module("app")
			.controller("DropdownSearchController", DropdownSearchController);

	function DropdownSearchController($scope, PreloaderService, CityService, SettingsSwitcherService) {

		var vm = this;

		vm.city = {selected: null};

		vm.indicatorStatus = PreloaderService.loadIndicator;

		vm.refreshCities = function(searchPhrase) {
			if(searchPhrase.trim().length > 2) {
				return CityService.getCities(searchPhrase)
					.then(displayCities);
			}
		};

		function displayCities(cities){
			vm.cities = cities.data.list;
			PreloaderService.disableIndicator();
		}

		$scope.$watch('dropDownCtrl.city.selected', function(){
			if (vm.city.selected) {
				SettingsSwitcherService.setValueToLocalStorage('locationToDisplay', vm.city.selected._id);
			}
		});

	}

})();
