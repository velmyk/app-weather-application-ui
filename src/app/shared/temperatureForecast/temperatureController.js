(function() {
	"use strict";

	angular
		.module("app")
			.controller("temperatureCtrl", temperatureCtrl);

	function temperatureCtrl($scope, WeatherService, Daynight) {
		/*jshint validthis:true */
		this.currentTemperature = WeatherService.getTemp( +$scope.time );
		this.closestForecast = WeatherService.getClosestTemp( +$scope.time );
		this.isDay = Daynight.isDay( +$scope.time);
		this.isNight = Daynight.isNight( +$scope.time);
	}

})();
