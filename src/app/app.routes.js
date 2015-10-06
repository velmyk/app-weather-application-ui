( function () { 
	"use strict";
	
	angular
		.module('app')
		.config( 
			function($stateProvider, $urlRouterProvider, DeviceTypeServiceProvider) {

				$urlRouterProvider.otherwise('/home');
				
				$stateProvider

					.state("home",{
						url: "/home",
						templateUrl: !DeviceTypeServiceProvider.$get().isTablet() ? "components/home/homeView.html" : "components/home/homeTabletView.html",
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
