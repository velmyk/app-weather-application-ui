'use strict';

describe('Preloader Service', function(){

	var sut;

	beforeEach(module('app'));

	beforeEach(inject(function(_PreloaderService_){
		sut = _PreloaderService_;
	}));

	it('should have indicator flag turned to "false" after app inititialisation', function(){
		expect(sut.loadIndicator.enable).toEqual( false );
	});

	it('should turn on preloader with enableIndicator method', function(){
		sut.enableIndicator();
		expect(sut.loadIndicator.enable).toEqual( true );

	});

	it('should turn off preloader with disableIndicator', function(){
		sut.enableIndicator();
		sut.disableIndicator();
		expect(sut.loadIndicator.enable).toEqual( false );
	});
});