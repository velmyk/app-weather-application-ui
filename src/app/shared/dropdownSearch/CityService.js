(function(){
	"use strict";

	angular
		.module("app")
			.factory("CityService", CityService);

	function CityService($http, constants, PreloaderService) {

		return {
			getCities : getCities
		};

		function getCities(searchPhrase) {

			PreloaderService.enableIndicator();

			return $http({
				url: constants.CITIES_API_URL + searchPhrase,
				method: "GET",
				ignoreLoadingBar: true
			});

		}

	}
	
})();