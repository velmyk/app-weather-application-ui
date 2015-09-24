(function(){
	"use strict";

	angular.module("app")
		.controller("NavigationArrowController", NavigationArrowController);

	function NavigationArrowController($scope, NavigationArrowService) {
		/*jshint validthis:true */
		var vm = this;
		vm.arrowImg = NavigationArrowService.arrowImg( $scope.direction );
	}
	
})();