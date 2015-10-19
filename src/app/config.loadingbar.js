( function() {
	"use strict";
	
	angular
		.module('app')

			.config(weatherLoading)
			
			.config(citiesLoading);

	function weatherLoading ( cfpLoadingBarProvider ) {
		cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
	}

	function citiesLoading ( $httpProvider , GetCitiesInterceptorProvider){
		var GetCitiesInterceptor = GetCitiesInterceptorProvider.$get();
		$httpProvider.interceptors.push(GetCitiesInterceptor);
	}

})();
