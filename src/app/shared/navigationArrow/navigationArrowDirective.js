(function(){
	"use strict";

	angular.module('app')
		.directive('navigationArrow', navigationArrow);

	function navigationArrow() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				time: "=",
				direction: "@"
			},
			controller: "navigationArrowCtrl",
			controllerAs: "navArrowCtrl",
			templateUrl: "shared/navigationArrow/navigationArrowView.html",
		};
	}
	
})();