'use strict';

describe('Dropdown Serch Controller', function(){

	var mockScope,
			sut;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$controller_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('DropdownSearchController', {$scope: mockScope});
		mockScope.vm = sut;
	}));

});