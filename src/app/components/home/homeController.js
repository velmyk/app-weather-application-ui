(function () {
	"use strict";
	angular
	.module('app')
	.controller('homeController', homeController);


	function homeController($scope, WeatherService, WeatherClassService, NavSrv) {
		/*jshint validthis:true */
		var vm = this; 

		vm.time = NavSrv.time;

		vm.city = WeatherService.getCity();
		vm.bgClass = WeatherClassService.getWeatherClass(vm.weatherId).backgroundColorClass;

	}

})();
