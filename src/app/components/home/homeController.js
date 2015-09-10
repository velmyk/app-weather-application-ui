angular
	.module('app')
	.controller('homeController', homeController);

function homeController(WeatherService) {
	var vm = this,
		mockTimestamp = 1441875600;

	vm.mockTimestamp = mockTimestamp;

	vm.city = WeatherService.getCity();
	vm.wSpeed = WeatherService.getWindSpeed(mockTimestamp);
	vm.wDegree = WeatherService.getWindDirection(mockTimestamp);
	vm.humidity = WeatherService.getHumidity(mockTimestamp);
}

