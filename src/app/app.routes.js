( function () { 
	angular
		.module('app')
		.config( 
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/home');

				$stateProvider

					.state("home",{
						url: "/home",
						templateUrl: "components/home/homeView.html",
						controller: "homeController",
						controllerAs:'home',
						resolve: {
							loadForecast: function (WeatherService) {
								return WeatherService.loadForecast();
							}
						},
					})

					.state("settings",{
						url: "/settings",
						templateUrl: "components/settings/settingsView.html",
						controller: "settingsController",
						controllerAs: "settings"
					});
		});
})();