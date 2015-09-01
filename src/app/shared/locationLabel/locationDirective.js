angular
	.module("app")
	.directive("currentLocation", currentLocation);

function currentLocation() {

	return {
		restrict: "E",
		replace: true,
		templateUrl: "shared/locationLabel/locationView.html"
	};
}