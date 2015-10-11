(function() {
	"use strict";

	angular
		.module('app')
		.controller('HomeController', HomeController);


	function HomeController($scope, WeatherService, WeatherClassService, TimeTrackingService) {
		var vm = this; 

		vm.time = TimeTrackingService.time;

		vm.city = WeatherService.getCity();

		vm.plusDay = TimeTrackingService.plusDay;
		vm.minusDay = TimeTrackingService.minusDay;

		vm.closestDates = [];

		$scope.$watch('vm.time', refreshTime);

		function refreshTime() {
			TimeTrackingService.initTime();
			vm.getBgClass = WeatherClassService.getBgClass;
			vm.closestDates = TimeTrackingService.getClosestDates();
		}

	}

})();