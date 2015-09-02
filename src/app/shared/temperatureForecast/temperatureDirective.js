(function() {
	"use strict";

	angular.module("app")
						.directive("tempForecast", tempForecast);

		function tempForecast() {
			return {
				restrict: "E",
				replace: true, 
				scope: true,
				templateUrl: "shared/temperatureForecast/temperatureView.html",
				controller: "temperatureCtrl",
				controllerAs: "tempCtrl"
			};
		}

})();
