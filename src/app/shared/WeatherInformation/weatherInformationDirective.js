
angular
	.module("app")
	.directive("weatherInformation", weatherInformation);

function weatherInformation() {
    return {
        restrict:"E",
        replace: true,
        scope:false,
        templateUrl: "shared/WeatherInformation/WeatherInformationView.html"
    };
}