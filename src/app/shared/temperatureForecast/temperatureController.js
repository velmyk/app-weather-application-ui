(function() {
	"use strict";

	angular
	.module("app")
	.controller("temperatureCtrl", temperatureCtrl);

	function temperatureCtrl($scope, WeatherService, Daynight) {
		/*jshint validthis:true */

		var vm = this;

		function dataInit(time) { 
			vm.temperatureNow = WeatherService.getTemp(+time);
			vm.closestForecast = WeatherService.getClosestTemp(+time );
			vm.isDay = Daynight.isDay(+time);
			vm.isNight = Daynight.isNight(+time);
		}

		dataInit($scope.time);


		$scope.$watch('time', function () {
			dataInit($scope.time);
		
	});
}

})();
