angular
	.module('app')
	.controller('homeController', homeController);

function homeController(Weather) {
	var vm = this;
	
	vm.phrase = "Hello_World!!!";
	
	vm.city = Weather.getCity();
	vm.wSpeed = Weather.getWind().speed;
	vm.wDegree = Weather.getWind().degree;
	vm.temp = Weather.getTemperature();
	vm.humidity = Weather.getHumidity();
}

