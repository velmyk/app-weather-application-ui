( function() {
	"use strict";

	angular
		.module('app')
			.run(function ($window, DeviceTypeService) {
				
				function lockScreen() {
					var viewType = DeviceTypeService.isTablet() ? 'landscape' : 'portrait';
	
					if ($window.screen.lockOrientation) {
						$window.screen.lockOrientation(viewType); 
					}
				}

				document.addEventListener("deviceready", function () {
					lockScreen();
				});
				
			});
})();
