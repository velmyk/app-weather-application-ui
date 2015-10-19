(function() {
	"use strict";

	angular
	.module("app")
	.controller("TabletDateController", TabletDateController);

	function TabletDateController($scope, SETTINGS, TIME_IN_MILISECONDS, DateLabelService) {
		var vm = this;
		//display time as today-tomorrow label
		var dayDisplayType = SETTINGS.DISPLAY_DAY_TYPE.buttons[1].value;
		
		vm.time = $scope.time;

		$scope.$watch('time', refreshData);

		function refreshData(){
			vm.time = $scope.time;
			vm.timeInMilisec = vm.time * TIME_IN_MILISECONDS.SEC;
			vm.timeLabel = DateLabelService.getTimeLabel(vm.time, dayDisplayType);
		}
	}
})();
