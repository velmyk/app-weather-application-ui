(function() {
	"use strict";

	angular.module("app")
			.controller("currentWeatherCtrl", currentWeatherCtrl);

	function currentWeatherCtrl($scope, Weather) {
		/*jshint validthis:true */
		var ctrl = this;
		var weather = Weather.getWeather( +$scope.desc);

		ctrl.desc = weather.desc;
		ctrl.main =weather.main;

		// return {
		// 	"main": main,
		// 	"desc": desc
		// };
	}
})();
