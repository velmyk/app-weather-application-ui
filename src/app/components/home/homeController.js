(function () {
	"use strict";
	angular
	.module('app')
	.controller('homeController', homeController);


	function homeController($scope, WeatherService, MoonPhaseCounter, WeatherClassService, HumidityService) {
		/*jshint validthis:true */
		var vm = this; 
		var day= 86400 ;
		var mockTimestamp = 1441875600;

		vm.mockTimestamp = mockTimestamp;

		$scope.$watch('home.mockTimestamp', function(){
			vm.city = WeatherService.getCity();
			vm.wSpeed = WeatherService.getWindSpeed(vm.mockTimestamp);
			vm.wDegree = parseInt(WeatherService.getWindDirection(vm.mockTimestamp));
			vm.humidity = WeatherService.getHumidity(vm.mockTimestamp);
			vm.weatherId=WeatherService.getWeatherId(vm.mockTimestamp);
			
			vm.humidityClass = HumidityService.getHumidityClass(vm.humidity);
			vm.moonPhaseClass = MoonPhaseCounter.getMoonPhaseClass(vm.mockTimestamp);
			vm.bgClass = WeatherClassService.getWeatherClass(vm.weatherId).backgroundColor;
		});

	}

})();
