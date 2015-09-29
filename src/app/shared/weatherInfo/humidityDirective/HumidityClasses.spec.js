"use strict;"
describe('app', function() {
  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  var sut, humidityClasses;
  beforeEach(module('app'));
  beforeEach( inject( function( humidityClasses ) {
    sut = humidityClasses;
  }));

  describe('humidity service class', function() {
  // inject() is used to inject arguments of all given functions
  it('should provide a classes for Humidity-images', 
    function() {
      expect(sut).toBeDefined();
      expect(sut.low).toEqual('lowHumidity');
      expect(sut.medium).toEqual('mediumHumidity');
      expect(sut.high).toEqual('highHumidity');
    });
  })
})

