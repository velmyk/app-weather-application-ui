(function() {
	"use strict";

	angular
		.module("app")
			.controller("MoonInformationController", MoonInformationController);

	function MoonInformationController($scope, MoonPhaseService) {
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.moonPhaseClass = MoonPhaseService.getMoonPhaseClass( $scope.time );
		}
	}

})();
