( function (){
	"use strict";

	angular
		.module("app")
		.controller("locationController", locationController);

	function locationController($scope, constants, WeatherService, DateLabel) {
		/*jshint validthis:true */
		var vm = this;
			
		vm.city = WeatherService.getCity();
		vm.time = DateLabel.getTimeLabel($scope.time);
		
		$scope.$watch("time", function () {
			vm.time = DateLabel.getTimeLabel($scope.time);
		});	
	}

})();