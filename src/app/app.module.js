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
		});
})();
