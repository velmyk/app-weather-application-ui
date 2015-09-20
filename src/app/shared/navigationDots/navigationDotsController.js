(function(){
	"use strict";

	angular.module("app")
		.controller("navigationDotsCtrl", navigationDotsCtrl);

	function navigationDotsCtrl($scope) {
		/*jshint validthis:true */
		var vm = this;

		$scope.$watch('currentDay', function(){
			vm.currentDot = $scope.currentDay;
		});
		vm.dotsNum = new Array( + $scope.days );
	}
	
})();