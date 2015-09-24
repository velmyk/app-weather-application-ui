( function() {
	"use strict";

	angular
		.module("app")
		.directive("location", currentLocation);

	function currentLocation() {

		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "LocationController",
			controllerAs: "locationCtrl",
			templateUrl: "shared/locationLabel/locationView.html"
		};
	}
})();