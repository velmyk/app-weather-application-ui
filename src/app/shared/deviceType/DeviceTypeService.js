( function () {
	"use strict";

	angular
		.module("app")
		.factory("DeviceTypeService", DeviceTypeService);

	function DeviceTypeService($window) {

		function isTablet () {
			var width = $window.innerWidth;
			return width > 639;
		}

		return {
			isTablet: isTablet
		};
	}

})();