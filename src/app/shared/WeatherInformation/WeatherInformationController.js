(function() {
	"use strict";

	angular
		.module("app")
			.controller("weatherInformationCtrl", weatherInformationCtrl);

	function weatherInformationCtrl($scope, WeatherService, NavSrv, HumidityService, MoonPhaseCounter, WeatherClassService) {
		/*jshint validthis:true */
		var vm = this;

		$scope.$watch('time', function(){
			vm.wSpeed = WeatherService.getWindSpeed( $scope.time );
			vm.humidity = WeatherService.getHumidity( $scope.time );
			vm.wDegree = WeatherService.getWindDirection( $scope.time );
			vm.humidity = WeatherService.getHumidity( $scope.time );

			vm.humidityClass = HumidityService.getHumidityClass(vm.humidity);
			vm.moonPhaseClass = MoonPhaseCounter.getMoonPhaseClass( $scope.time );
			// vm.bgClass = WeatherClassService.getWeatherClass(vm.weatherId).backgroundColorClass;
		});
	}

})();
