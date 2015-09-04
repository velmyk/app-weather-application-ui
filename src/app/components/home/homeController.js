angular
	.module('app')
	.controller('homeController', homeController);

function homeController(Weather) {
	var vm = this,
		mockTimestamp = 4242342;

	vm.mockTimestamp = mockTimestamp;

	vm.city = Weather.getCity();
	vm.wSpeed = Weather.getWind(mockTimestamp).speed;
	vm.wDegree = Weather.getWind(mockTimestamp).degree;
	vm.humidity = Weather.getHumidity(mockTimestamp);
}

