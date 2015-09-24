(function(){
	"use strict";

	angular.module("app")
		.controller("NavigationDotsController", NavigationDotsController);

	function NavigationDotsController($scope) {
		/*jshint validthis:true */
		var vm = this;

		vm.dotsNum = new Array( + $scope.days );

		$scope.$watch('currentDay', refreshData);

		function refreshData() {
			vm.currentDot = $scope.currentDay;
		}
	}
	
})();