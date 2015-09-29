(function(){
"use strict";

angular
	.module("app")
	.directive("moonInformation", moonInformation);

function moonInformation() {
		return {
			restrict:"E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "MoonInformationController",
			controllerAs: "moonInfoCtrl",
			templateUrl: "shared/weatherInfo/moonDirective/moonInformationView.html"
		};
}

})();