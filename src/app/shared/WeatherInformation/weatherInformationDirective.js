(function(){
"use strict";

angular
	.module("app")
	.directive("weatherInformation", weatherInformation);

function weatherInformation() {
		return {
			restrict:"E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "weatherInformationCtrl",
			controllerAs: "weatherInfoCtrl",
			templateUrl: "shared/WeatherInformation/WeatherInformationView.html"
		};
}

})();