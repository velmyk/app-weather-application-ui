(function() {
	"use strict";

	angular
		.module("app")
			.controller("DropdownSearchController", DropdownSearchController);

	function DropdownSearchController($scope, $rootScope, CityService, SettingsSwitcherService) {

		var vm = this;

		vm.city = {};

		vm.refreshCities = function(searchPhrase) {
			if(searchPhrase.trim().length > 2) {
				return CityService.getCities(searchPhrase)
					.then(displayCities);
			}
	  };

	  function displayCities(cities){
			vm.cities = cities.data.list;
			$rootScope.showLoader = false;
		}

		$scope.$watch('vm.city.selected', function(){
			if (vm.city.selected) {
				SettingsSwitcherService.setValueToLocalStorage('locationToDisplay', vm.city.selected._id);
			}
		});
}

})();
