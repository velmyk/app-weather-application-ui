( function() {
	"use strict";

	angular
		.module('app')
			.run(function ($rootScope, AutosyncService, localStorageService) {
				AutosyncService.poll(localStorageService.get("syncPeriod"));
				$rootScope.$watch(
					function () {
						return localStorageService.get('syncPeriod');},
					function () {
						AutosyncService.poll(localStorageService.get("syncPeriod"));
					});
			});
})();
