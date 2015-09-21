(function () {
	"use strict";
	angular
	.module('app')
	.controller('homeController', homeController);


	function homeController($scope, WeatherService, WeatherClassService, NavSrv) {
		/*jshint validthis:true */
		var vm = this; 

		vm.time = NavSrv.time;

		vm.getBgClass = WeatherClassService.getBgClass;

		vm.city = WeatherService.getCity();
		
		vm.plusDay = NavSrv.plusDay;
		vm.minusDay = NavSrv.minusDay;

	}

})();
