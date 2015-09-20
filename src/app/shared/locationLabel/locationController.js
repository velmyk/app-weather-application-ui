( function (){
	"use strict";

	angular
		.module("app")
		.controller("locationController", locationController);

	function locationController($scope, constants, WeatherService, DateLabel) {
		var vm = this;
			
		vm.city = WeatherService.getCityShort(constants.MAXCITYNAME_MOBILE);
		vm.time = DateLabel.getTimeLabel($scope.time);
		
		$scope.$watch("time", function () {
			vm.time = DateLabel.getTimeLabel($scope.time);
		});	
	}

})();