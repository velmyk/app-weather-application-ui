(function() {
	"use strict";

	angular.module("app")
						.directive("tempForecast", tempForecast);

		function tempForecast() {
			return {
				restrict: "E",
				replace: true, 
				scope: {
					current: "@",
					forecast: "@",
					period: "@"
				},
				templateUrl: "shared/temperatureForecast/temperatureView.html"
			};
		}

})();
