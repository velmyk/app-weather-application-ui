( function() {
	"use strict";
	angular
		.module('app',[
			'templates',
			'ui.router',
			'ngTouch',
			'LocalStorageModule'
		])
		.config(function (localStorageServiceProvider) {
  			localStorageServiceProvider
    			.setPrefix('ls');
		});
})();
