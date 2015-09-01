angular
	.module("app")
	.directive("currentLocation", currentLocation);

function currentLocation() {

	return {
		restrict: "E",
		replace: true,
		templateUrl: "../views/locationView.html"
	};
}