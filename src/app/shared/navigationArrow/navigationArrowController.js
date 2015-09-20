(function(){
	"use strict";

	angular.module("app")
		.controller("navigationArrowCtrl", navigationArrowCtrl);

	function navigationArrowCtrl($scope, NavSrv) {
		/*jshint validthis:true */
		var vm = this;
		vm.arrowImg = NavSrv.arrowImg( $scope.direction );
		vm.changeDay = NavSrv.changeDay( $scope.direction );
	}
	
})();