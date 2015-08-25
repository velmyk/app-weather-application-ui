angular
	.module('app')
	.controller('worldController', worldController);

function worldController() {
	var vm = this;

	vm.phrase = "Hello World!";
}

