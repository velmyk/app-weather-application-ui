(function(){
"use strict";

angular
	.module("app")
	.directive("windInformation", windInformation);

function windInformation() {
		return {
			restrict:"E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "WindInformationController",
			controllerAs: "windInfoCtrl",
			templateUrl: "shared/weatherInfo/windInfoDirective/windInformationView.html"
		};
}

})();