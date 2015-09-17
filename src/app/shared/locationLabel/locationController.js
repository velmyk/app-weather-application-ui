( function (){
	"use strict";

	angular
		.module("app")
		.controller("locationController", locationController);

	function locationController($scope, WeatherService, DateLabel) {
		var vm = this;
			
		vm.city = WeatherService.getCity();
		vm.time = DateLabel.convertTime($scope.time);
		
		$scope.$watch("time", function () {
			vm.time = DateLabel.convertTime($scope.time);
		});

		
	}

})();