(function() {
	"use strict";

	angular
		.module('app')
		.controller('HomeController', HomeController);


	function HomeController($scope, WeatherService, WeatherClassService, TimeTrackingService) {
		var vm = this; 
		
		vm.time = TimeTrackingService.time;
		vm.getBgClass = WeatherClassService.getBgClass;
		vm.city = WeatherService.getCity();
		vm.plusDay = TimeTrackingService.plusDay;
		vm.minusDay = TimeTrackingService.minusDay;
		vm.getClosestDates = TimeTrackingService.getClosestDates;

	}

})();