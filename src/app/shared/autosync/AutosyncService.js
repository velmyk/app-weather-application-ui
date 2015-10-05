( function () {
	"use strict";

	angular
		.module("app")
		.service("AutosyncService", AutosyncService);

	function AutosyncService(OpenWeatherAPI, $interval, SETTINGS) {
		var currentInterval = {};

		function poll(syncPeriod) {
			var delay = syncPeriod ? SETTINGS.SYNC_CONFIG[syncPeriod] : "disable";

			if (currentInterval.value) {
				currentInterval.isDeletedPrev = $interval.cancel(currentInterval.value);
			}

			if (delay != "disable") {
				currentInterval.value = $interval(loadData,delay);
				
				return currentInterval.value;
			}
			
			return false;	
		}

		function loadData() {
			OpenWeatherAPI.loadForecast();
		}

		return {
			currentInterval: currentInterval,
			poll: poll
		};
	}
})();