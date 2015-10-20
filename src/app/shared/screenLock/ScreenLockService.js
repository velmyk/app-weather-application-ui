( function () {
	"use strict";

	angular
		.module("app")
		.factory("ScreenLockService", ScreenLockService);

	function ScreenLockService($window, DeviceTypeService, DISPLAY_TYPE) {

		function lockScreen() {
			var viewType = DeviceTypeService.isTablet() ? DISPLAY_TYPE.LANDSCAPE : DISPLAY_TYPE.PORTRAIT;
	
			if ($window.screen.lockOrientation) {
				$window.screen.lockOrientation(viewType); 
			}
		}

		return {
			lockScreen: lockScreen
		};
	}

})();