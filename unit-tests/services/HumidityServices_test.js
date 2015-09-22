"use strict;"
describe('app', function() {
  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(module('app'));

  describe('humidity service class', function() {
  // inject() is used to inject arguments of all given functions
 it('should provide a classes for Humidity-images', 
    inject(function(humidityClasses) {
      expect(humidityClasses).toBeDefined();
      expect(humidityClasses.low).toEqual('lowHumidity');
      expect(humidityClasses.medium).toEqual('mediumHumidity');
      expect(humidityClasses.high).toEqual('highHumidity');
    }));
  });
});
