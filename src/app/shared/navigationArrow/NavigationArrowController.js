(function(){
	"use strict";

	angular.module("app")
		.controller("NavigationArrowController", NavigationArrowController);

	function NavigationArrowController($scope, TimeTrackingService) {
		/*jshint validthis:true */
		var vm = this;
		vm.arrowImg = TimeTrackingService.arrowImg( $scope.direction );
		vm.changeDay = TimeTrackingService.changeDay( $scope.direction );
	}
	
})();