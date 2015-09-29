(function() {
	"use strict";

	angular
		.module("app")
			.controller("HumidityInformationController", HumidityInformationController);

	function HumidityInformationController($scope, WeatherService, HumidityService) {
		/*jshint validthis:true */
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.humidity = WeatherService.getHumidity( $scope.time );
			vm.humidityClass = HumidityService.getHumidityClass(vm.humidity);
		}
	}

})();
