angular
	.module("app")
	.directive("windHumidity", windHumidity);

function windHumidity() {
    return {
        restrict:"E",
        replace: true,
        templateUrl: "../views/windHumidityView.html"
    };
}