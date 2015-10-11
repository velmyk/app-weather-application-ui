(function(){
"use strict";

angular
	.module("app")
	.directive("clock", clock);

function clock() {
		return {
			restrict:"E",
			transclude: true,
			replace: true,
			scope: {},
			controller: "ClockController",
			controllerAs: "clockCtrl",
			templateUrl: "shared/clock/clockView.html"
		};
}

})();