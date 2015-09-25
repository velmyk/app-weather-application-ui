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
			controller: "WeatherInformationController",
			controllerAs: "weatherInfoCtrl",
			templateUrl: "shared/weatherInfo/weatherInfoView.html"
		};
}

})();