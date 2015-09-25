"use strict";

describe('customer directive', function() {

    var mockScope,
        element, 
        compiledDirective, 
        isolateScope;

    beforeEach(module("app"));
    beforeEach(module("templates"));
  
	beforeEach(inject(function(_$rootScope_, _$compile_){
    	mockScope = _$rootScope_.$new();
    	element = angular.element('<location data-time="1449882061"></location>');
    	compiledDirective = _$compile_(element)(mockScope);
    	mockScope.$digest();
    	isolateScope = element.isolateScope();

  	}));

  	it('has valid data in isolate scope', function() {
  		expect(isolateScope.time).toEqual("1449882061");
  	});

});