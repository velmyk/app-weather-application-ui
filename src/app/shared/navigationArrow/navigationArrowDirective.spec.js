"use strict";

describe('Custome temperature directive', function() {

  var mockScope,
      element, 
      compiledDirective, 
      isolateScope;

  beforeEach(module("app"));

	beforeEach(inject(function(_$rootScope_, _$compile_){
  	mockScope = _$rootScope_.$new();
  	element = angular.element('<navigation-arrow data-direction="right"></navigation-arrow>');
  	compiledDirective = _$compile_(element)(mockScope);
  	mockScope.$digest();
  	isolateScope = element.isolateScope();

	}));

	it('has valid data in isolate scope', function() {
		expect(isolateScope.direction).toEqual("right");
	});

});