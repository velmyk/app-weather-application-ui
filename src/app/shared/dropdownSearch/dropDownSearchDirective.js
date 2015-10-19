(function() {
	"use strict";

	angular.module("app")
		.directive("dropdownSearch", dropdownSearch);

	function dropdownSearch() {
		return {
			restrict: "E",
			replace: true, 
			scope: {},
			templateUrl: "shared/dropdownSearch/dropdownSearchView.html",
			controller: "DropdownSearchController",
			controllerAs: "dropDownCtrl"
		};
	}

})();
