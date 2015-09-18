(function() {
	"use strict";

	angular.module("app")
	.controller("CurrentWeatherCtrl", CurrentWeatherCtrl);


	function CurrentWeatherCtrl($scope, WeatherService, WeatherClassService) {
		/*jshint validthis:true */
		var vm = this , 
			 today=+$scope.time;

		function dataInit (time) {
			vm.desc = WeatherService.getWeatherDesc(+time);
			vm.main = WeatherService.getWeatherState(+time);
			vm.weatherId = WeatherService.getWeatherId(+time);
			vm.mainImageClass = WeatherClassService.getWeatherClass(vm.weatherId).mainWeatherClass;
		}

		dataInit($scope.time);

	}
})();
