( function (){
	"use strict";

	angular
		.module("app")
		.controller("LocationController", LocationController);

	function LocationController( $scope, constants, WeatherService, DateLabelService ) {
		/*jshint validthis:true */

		var vm = this;
			
		vm.city = WeatherService.getCity();
		vm.time = DateLabelService.getTimeLabel($scope.time);
		
		$scope.$watch("time", refreshData);

		function refreshData(){
			vm.time = DateLabelService.getTimeLabel($scope.time);
		}
	}

})();