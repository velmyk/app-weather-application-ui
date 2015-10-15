(function(){
	"use strict";

	angular
		.module("app")
			.factory("CityService", CityService);

	function CityService($http, $rootScope, constants) {

		return {
			getCities : getCities
		};

		function getCities(searchPhrase) {

			$rootScope.showLoader = true;

			return $http({
				url: constants.CITIES_API_URL + searchPhrase,
				method: "GET",
				ignoreLoadingBar: true
			});

		}

	}
	
})();