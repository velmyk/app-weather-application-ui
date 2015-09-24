(function(){
	"use strict";

	angular.module('app')
		.directive('navigationDots', navigationDots);

	function navigationDots() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				currentDay: "@",
				days: "@"
			},
			controller: "NavigationDotsController",
			controllerAs: "navDotsCtrl",
			templateUrl: "shared/navigationDots/navigationDotsView.html",
		};
	}
	
})();