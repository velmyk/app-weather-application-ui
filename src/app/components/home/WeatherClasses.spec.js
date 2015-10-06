"use strict;"
describe('app', function() {
  var sut;
  beforeEach(module('app'));
  beforeEach( inject( function( WeatherClasses ) {
    sut = WeatherClasses;
  }));

  describe('Weather classes', function() {
    it('should provide a classes for background and main image', function() {
        expect(sut).toBeDefined();
      });
  })
})

