( function() {
	"use strict";

	angular
		.module("app")
		.directive("currentLocation", currentLocation);

	function currentLocation() {

		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "locationController",
			controllerAs: "location",
			templateUrl: "shared/locationLabel/locationView.html"
		};
	}
})();