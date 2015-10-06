"use strict";

describe('Moon information directive', function() {

    var mockScope,
        element, 
        compiledDirective, 
        isolateScope;

    beforeEach(module("app"));
    beforeEach(module("templates"));
  
	beforeEach(inject(function(_$rootScope_, _$compile_){
    	mockScope = _$rootScope_.$new();
    	element = angular.element('<moon-information data-time="1111"></moon-information >');
    	compiledDirective = _$compile_(element)(mockScope);
    	mockScope.$digest();
    	isolateScope = element.isolateScope();

  	}));

  	it('should have correct time in isolate scope', function() {
  		expect(isolateScope.time).toEqual("1111");
  	});

});