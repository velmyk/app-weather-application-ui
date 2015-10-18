( function() {
	"use strict";
	
	angular
		.module('app')

			.config(weatherLoading)
			
			.config(citiesLoading);

			function weatherLoading ( cfpLoadingBarProvider ) {
				cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
			}

			function citiesLoading ( $httpProvider ){

				var getCitiesInterceptor = function ( $q, PreloaderService, constants ){

					return {
						'request': function( config ) {
							if( ~config.url.indexOf(constants.CITIES_API_URL) ) {
								PreloaderService.enableIndicator();
							}
							return config;
						},

						'response': function( response ) {
							if( ~response.config.url.indexOf(constants.CITIES_API_URL) ) {
								PreloaderService.disableIndicator();
							}
							return response;
						},

						'responseError': function( rejection ) {
							if( ~response.config.url.indexOf(constants.CITIES_API_URL) ) {
								PreloaderService.disableIndicator();
							}
							return $q.reject(rejection);
						}
					};

				};

				$httpProvider.interceptors.push(getCitiesInterceptor);

			}

})();
