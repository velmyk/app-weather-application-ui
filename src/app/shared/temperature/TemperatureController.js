(function() {
	"use strict";

	angular
		.module("app")
			.controller("TemperatureController", TemperatureController);

	function TemperatureController($scope, WeatherService, DayNightService) {
		/*jshint validthis:true */

		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.temperatureNow = WeatherService.getTemp( $scope.time );
			vm.closestForecast = WeatherService.getClosestTemp( $scope.time );
			vm.isDay = DayNightService.isDay( $scope.time );
			vm.isNight = DayNightService.isNight( $scope.time );
			vm.symbols = ('' + vm.temperatureNow).length > 2 ? "three-symbols" : "two-symbols";
		}

}

})();
