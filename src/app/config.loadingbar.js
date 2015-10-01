( function() {
	"use strict";
	
	angular
		.module('app')
			.config(function (cfpLoadingBarProvider) {
				cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
			});

})();
