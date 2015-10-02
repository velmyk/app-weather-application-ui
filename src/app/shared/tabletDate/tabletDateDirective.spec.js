"use strict";

describe('Tablet date directive', function() {

    var mockScope,
        element, 
        compiledDirective, 
        isolateScope;

    beforeEach(module("app"));
    beforeEach(module("templates"));
  
	beforeEach(inject(function(_$rootScope_, _$compile_){
    	mockScope = _$rootScope_.$new();
    	element = angular.element('<tablet-time data-time="1"></tablet-time >');
    	compiledDirective = _$compile_(element)(mockScope);
    	mockScope.$digest();
    	isolateScope = element.isolateScope();

  	}));

  	it('should have correct data in isolate scope', function() {
  		expect(isolateScope.time).toEqual("1");
  	});

});