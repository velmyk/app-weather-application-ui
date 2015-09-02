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
				controller: function($scope, Weather, Daynight){
						$scope.temperature = Weather.getTemperature($scope.home.mockTimestamp);
						$scope.isDay = Daynight.isDay;
						$scope.isNight = Daynight.isNight;
				}
			};
		}

})();
