"use strict";

describe('customer directive', function() {

    var mockScope, element, compiledDirective, isolateScope;

    beforeEach(module("app"));
    beforeEach(module("templates"));

	beforeEach(inject(function(_$rootScope_, _$compile_){
    	mockScope = _$rootScope_.$new();
    	element = angular.element('<location data-time="1488"></location>');
    	compiledDirective = _$compile_(element)(mockScope);
    	mockScope.$digest();
    	isolateScope = element.isolateScope();

  	}));

  	it('has valid data in isolate scope', function() {
  		console.log(isolateScope);
    	expect(isolateScope.welcome()).toEqual('Welcome Nam Tran');
  	});

  	// it('compile html correctly', function() {
   //  	expect(compiledDirective.html()).toMatch('Nam Tran');
  	// });

});