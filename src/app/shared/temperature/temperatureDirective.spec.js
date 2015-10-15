/*"use strict";

describe('Custome temperature directive', function() {

  var mockScope,
      element, 
      compiledDirective, 
      isolateScope;

  beforeEach(module("app"));

	beforeEach(inject(function(_$rootScope_, _$compile_){
  	mockScope = _$rootScope_.$new();
  	element = angular.element('<temperature data-time="1449882061"></temperature>');
  	compiledDirective = _$compile_(element)(mockScope);
  	mockScope.$digest();
  	isolateScope = element.isolateScope();

	}));

	it('has valid data in isolate scope', function() {
		expect(isolateScope.time).toEqual("1449882061");
	});

});*/