'use strict';

describe('CityService', function(){

	var	sut,
			PreloaderService;

	beforeEach(module('app'));

	beforeEach(inject(function(_CityService_, _PreloaderService_){
		sut = _CityService_;
		PreloaderService = _PreloaderService_;
	}));

	it('should turn on load indicator when request to server starts', function(){
		spyOn(PreloaderService, 'enableIndicator').and.callThrough();
		sut.getCities();
		expect(PreloaderService.enableIndicator).toHaveBeenCalled();
	});

});