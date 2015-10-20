( function() {
	"use strict";
	
	angular
		.module('app')
			.factory('GetCitiesInterceptor', GetCitiesInterceptor);


	function GetCitiesInterceptor ( $q, PreloaderService, API_CONSTANTS ) {

		return function () {

			return {

				request: function( config ) {
					if( ~config.url.indexOf(API_CONSTANTS.CITIES_API_URL) ) {
						PreloaderService.enableIndicator();
					}
					return config;
				},

				response: function( response ) {
					if( ~response.config.url.indexOf(API_CONSTANTS.CITIES_API_URL) ) {
						PreloaderService.disableIndicator();
					}
					return response;
				},

				responseError: function( rejection ) {
					if( ~rejection.config.url.indexOf(API_CONSTANTS.CITIES_API_URL) ) {
						PreloaderService.disableIndicator();
					}
					return $q.reject(rejection);
				}

			};

		};

	}

})();
