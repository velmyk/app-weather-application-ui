(function() {
	"use strict";

	angular
		.module('app')
		.controller('HomeController', HomeController);


	function HomeController($scope, WeatherService, WeatherClassService, TimeTrackingService) {
		/*jshint validthis:true */
		var vm = this; 

		vm.time = TimeTrackingService.time;

		TimeTrackingService.initTime();

		vm.getBgClass = WeatherClassService.getBgClass;

		vm.city = WeatherService.getCity();
		
		vm.plusDay = TimeTrackingService.plusDay;
		vm.minusDay = TimeTrackingService.minusDay;

	}

})();