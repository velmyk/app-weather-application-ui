"use strict";

describe('Custom Navigation Dots directive', function() {

  var $rootScope,
      $compile,
      mock_Scope,
      element, 
      compiledDirective, 
      isolateScope;

  beforeEach(module("app"));

  beforeEach(inject(function(_$rootScope_, _$compile_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  beforeEach(function(){
    mock_Scope = $rootScope.$new();
    element = angular.element('<navigation-dots data-current-day="3" data-days="5"></navigation-dots>');
    compiledDirective = $compile(element)(mock_Scope);
    mock_Scope.$digest();
    isolateScope = element.isolateScope();
  });

  it('has valid data in isolate scope', function() {
    expect(isolateScope.currentDay).toEqual("3");
    expect(isolateScope.days).toEqual("5");
  });

});