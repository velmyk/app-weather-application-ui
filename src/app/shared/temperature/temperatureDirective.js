(function() {
	"use strict";

	angular.module("app")
		.directive("temperature", tempForecast);

	function tempForecast() {
		return {
			restrict: "E",
			replace: true, 
			scope: {
				time: "@"
			},
			templateUrl: "shared/temperature/temperatureView.html",
			controller: "TemperatureController",
			controllerAs: "tempCtrl"
		};
	}

})();
