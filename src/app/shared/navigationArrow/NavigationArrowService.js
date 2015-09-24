(function(){
	"use strict";

	angular
		.module("app")
			.factory("NavigationArrowService", NavigationArrowService);

	function NavigationArrowService() {

		function arrowImg(direction) {
			return (direction === "left") ? "svg/z-arrow-left.svg" : "svg/z-arrow-right.svg";
		}

		return {
			arrowImg : arrowImg
		};
	}
	
})();