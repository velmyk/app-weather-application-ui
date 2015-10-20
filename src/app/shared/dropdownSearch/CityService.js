(function(){
	"use strict";

	angular
		.module("app")
			.factory( "CityService", CityService );

	function CityService ( $http, API_CONSTANTS ) {

		return {
			getCities : getCities
		};

		function getCities ( searchPhrase ) {

			return $http({
				url: API_CONSTANTS.CITIES_API_URL + searchPhrase,
				method: "GET",
				ignoreLoadingBar: true
			});

		}

	}
	
})();