(function() {
	"use strict";

	angular.module("app")
	.controller("CurrentWeatherCtrl", CurrentWeatherCtrl);


	function CurrentWeatherCtrl($scope, WeatherService, WeatherClassService) {
		/*jshint validthis:true */
		var vm = this;
		$scope.$watch('time', function(){
			vm.desc = WeatherService.getWeatherDesc( $scope.time );
			vm.main = WeatherService.getWeatherState( $scope.time );
			vm.weatherId = WeatherService.getWeatherId( $scope.time );
			vm.mainImageClass = WeatherClassService.getWeatherClass(vm.weatherId).mainWeatherClass;
		})
	}
})();
