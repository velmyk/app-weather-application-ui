(function() {
	"use strict";

	angular
		.module("app")
			.controller("WeatherInformationController", WeatherInformationController);

	function WeatherInformationController($scope, WeatherService, HumidityService, MoonPhaseService, WeatherClassService) {
		/*jshint validthis:true */
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.wSpeed = WeatherService.getWindSpeed( $scope.time );
			vm.humidity = WeatherService.getHumidity( $scope.time );
			vm.wDegree = WeatherService.getWindDirection( $scope.time );
			vm.humidity = WeatherService.getHumidity( $scope.time );

			vm.humidityClass = HumidityService.getHumidityClass(vm.humidity);
			vm.moonPhaseClass = MoonPhaseService.getMoonPhaseClass( $scope.time );
		}
	}

})();
