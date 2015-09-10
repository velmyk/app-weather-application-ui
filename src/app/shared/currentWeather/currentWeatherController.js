(function() {
	"use strict";

	angular.module("app")
			.controller("CurrentWeatherCtrl", CurrentWeatherCtrl);

	function CurrentWeatherCtrl($scope, WeatherService) {
		/*jshint validthis:true */
		var vm = this;
		vm.desc = WeatherService.getWeatherDesc( +$scope.time);
		vm.main = WeatherService.getWeatherState( +$scope.time);
	}
})();

