(function(){
	"use strict";

	angular.module("app")
		.controller("NavigationDotsController", NavigationDotsController);

	function NavigationDotsController($scope) {
		/*jshint validthis:true */
		var vm = this;

		vm.dotsNum = [];

		$scope.$watch('currentDay', refreshData);

		function refreshData() {
			vm.dotsNum[ $scope.days - 1 ] = '';
			vm.currentDot = $scope.currentDay;
		}
	}
	
})();