'use strict';

describe('Navigation Arrow Service', function(){

	var	sut;

	beforeEach(module('app'));

	beforeEach(inject(function(_NavigationArrowService_){
		sut = _NavigationArrowService_;
	}));

	it('should return left arrow image for left direction', function(){
		expect(sut.arrowImg('left')).toEqual("svg/z-arrow-left.svg");
	});

	it('should return right arrow image for left direction', function(){
		expect(sut.arrowImg('right')).toEqual("svg/z-arrow-right.svg");
	});
});