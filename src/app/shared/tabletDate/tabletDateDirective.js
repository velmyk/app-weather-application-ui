(function() {
	"use strict";

	angular.module("app")
		.directive("tabletTime", tabletTime);

	function tabletTime() {
		return {
			restrict: "E",
			replace: true, 
			scope: {
				time: "@"
			},
			templateUrl: "shared/tabletDate/tabletTimeView.html",
			controller: "TabletDateController",
			controllerAs: "TabDateCtrl"
		};
	}

})();
