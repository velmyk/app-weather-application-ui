( function() {
	"use strict";
	angular
		.module('app',[
			'templates',
			'ui.router',
			'ngTouch',
			'LocalStorageModule',
			'angular-loading-bar'
		])
		.config(function (localStorageServiceProvider) {
			localStorageServiceProvider
				.setPrefix('ls');
		})

		.config(function(cfpLoadingBarProvider) {
			cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
		});

})();
