( function () { 
	"use strict";
	
	angular
		.module('app')
		.config( 
			function($stateProvider, $urlRouterProvider, $windowProvider) {

				function isTablet () {
					var width = $windowProvider.$get().innerWidth;
					return width > 639;
				}

				$urlRouterProvider.otherwise('/home');
				
				$stateProvider

					.state("home",{
						url: "/home",
						templateUrl: !isTablet() ? "components/home/homeView.html" : "components/home/homeTabletView.html",
						controller: "HomeController",
						controllerAs:'home',
						resolve: {
							loadForecast: function (OpenWeatherAPI) {
								return OpenWeatherAPI.loadForecast();
							}
						},
					})

					.state("settings",{
						url: "/settings",
						templateUrl: "components/settings/settingsView.html",
						controller: "SettingsController",
						controllerAs: "settings"
					});
		});
})();
