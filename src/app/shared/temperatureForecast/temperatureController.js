(function() {
	"use strict";

	angular
		.module("app")
			.controller("temperatureCtrl", temperatureCtrl);

	function temperatureCtrl($scope, Weather, Daynight) {
		this.temperature = Weather.getTemperature( +$scope.time );
		this.isDay = Daynight.isDay;
		this.isNight = Daynight.isNight;
	}

})();
