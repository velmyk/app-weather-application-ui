(function(){
	"use strict";

	angular
		.module("app")
			.factory("CityService", CityService);

	function CityService($q, $http, constants) {

		return {
			getCities : getCities
		};

		function getCities(searchPhrase) {
			var def = $q.defer(),
					cities;

			cities = $http({
				url: constants.CITIES_API_URL + searchPhrase,
				method: "GET",
				ignoreLoadingBar: true
			});

			def.resolve(cities);

			return def.promise;
		}

	}
	
})();