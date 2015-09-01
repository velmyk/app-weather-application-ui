angular
	.module('app')
	.controller('homeController', homeController);

function homeController(Weather) {
	var vm = this,
		mockTimestamp = 4242342; 
	
	vm.phrase = "Hello_World!!!";
	
	vm.city = Weather.getCity();
	vm.wSpeed = Weather.getWind(mockTimestamp).speed;
	vm.wDegree = Weather.getWind(mockTimestamp).degree;
	vm.temp = Weather.getTempAndHumidity(mockTimestamp).temperature;
	vm.humidity = Weather.getTempAndHumidity(mockTimestamp).humidity;
}

