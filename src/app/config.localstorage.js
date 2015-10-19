( function() {
	"use strict";

	angular
		.module('app')
			.config(function (localStorageServiceProvider) {
				localStorageServiceProvider
					.setPrefix('weatherApp');
			})

			.config(function($provide){

				$provide.decorator('localStorageService', function($delegate){

					var originGet = $delegate.get;

					var newGet = function ( key, defaultValue ){
						var result = originGet(key);
						if (!result) {
							result = defaultValue;
						}
						return result;
					};

					$delegate.get = newGet;

					return $delegate;

				});

			});

})();
