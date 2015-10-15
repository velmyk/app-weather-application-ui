( function () {

	"use strict";

	angular
		.module("app")
		.directive("preloader", preloader);

	function preloader() {
		return {
			restrict: "E",
			scope: {},
			replace: true,
			templateUrl: "shared/preloader/preloaderView.html"
		};
	}
})();