"use strict";

describe('Humidity information directive', function() {

    var mockScope,
        element, 
        compiledDirective, 
        isolateScope;

    beforeEach(module("app"));
    beforeEach(module("templates"));
  
	beforeEach(inject(function(_$rootScope_, _$compile_){
    	mockScope = _$rootScope_.$new();
      element = angular.element('<humidity-information data-time="2"></humidity-information>');
    	compiledDirective = _$compile_(element)(mockScope);
    	mockScope.$digest();
    	isolateScope = element.isolateScope();

  	}));

  	it('should have correct time in isolate scope', function() {
  		expect(isolateScope.time).toEqual("2");
  	});

});