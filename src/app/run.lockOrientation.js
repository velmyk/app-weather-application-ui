( function() {
	"use strict";

	angular
		.module('app')
			.run(function ($window, ScreenLockService) {

				document.addEventListener("deviceready", function () {
					ScreenLockService.lockScreen();
				});
			});
})();
