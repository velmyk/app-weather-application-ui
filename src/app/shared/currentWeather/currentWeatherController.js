(function() {
	"use strict";

	angular.module("app")
			.controller("CurrentWeatherCtrl", CurrentWeatherCtrl);

	function CurrentWeatherCtrl($scope, Weather) {
		/*jshint validthis:true */
		var vm = this;
		var weather = Weather.getWeather( +$scope.time);

		vm.desc = weather.desc;
		vm.main =weather.main;
	}
})();

