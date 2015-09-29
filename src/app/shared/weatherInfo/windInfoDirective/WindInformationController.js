(function() {
	"use strict";

	angular
		.module("app")
			.controller("WindInformationController", WindInformationController);

	function WindInformationController($scope, WeatherService) {
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.wSpeed = WeatherService.getWindSpeed( $scope.time );
			vm.wDegree = WeatherService.getWindDirection( $scope.time );
		}
	}

})();
