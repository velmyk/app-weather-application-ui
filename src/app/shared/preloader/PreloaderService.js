(function(){
	"use strict";

	angular
		.module("app")
			.factory("PreloaderService", PreloaderService);

	function PreloaderService() {

		var loadIndicator = {
			enable: false
		};

		return {
			loadIndicator: loadIndicator,
			enableIndicator: enableIndicator,
			disableIndicator: disableIndicator
		};

		function enableIndicator() {
			loadIndicator.enable = true;
		}

		function disableIndicator() {
			loadIndicator.enable = false;
		}

	}
	
})();