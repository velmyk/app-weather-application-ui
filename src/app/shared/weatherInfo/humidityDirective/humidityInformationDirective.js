(function(){
"use strict";

angular
	.module("app")
	.directive("humidityInformation", humidityInformation);

function humidityInformation() {
		return {
			restrict:"E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "HumidityInformationController",
			controllerAs: "humidInfoCtrl",
			templateUrl: "shared/weatherInfo/humidityDirective/humidityInfoView.html"
		};
}

})();