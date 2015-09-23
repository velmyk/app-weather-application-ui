/* jshint ignore:start */

"use strict";

describe('app', function() {
  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  var HumidityService,    humidityClasses;
  beforeEach(module('app'));
  beforeEach(inject(function(_HumidityService_, _humidityClasses_) {

    HumidityService = _HumidityService_;

    humidityClasses = _humidityClasses_;

  }));

  describe('humidity service class', function() {
  // inject() is used to inject arguments of all given functions
  it('should provide a classes for Humidity-images', function() {
      expect(humidityClasses).toBeDefined();
      expect(humidityClasses.low).toEqual('lowHumidity');
      expect(humidityClasses.medium).toEqual('mediumHumidity');
      expect(humidityClasses.high).toEqual('highHumidity');
    });

  describe('HumidityService', function() {
    it('returns correct classes for humidity-images depending on data', function() {
      expect(HumidityService.getHumidityClass(71)).toEqual(humidityClasses.low);
      expect(HumidityService.getHumidityClass(72)).toEqual(humidityClasses.medium);
      expect(HumidityService.getHumidityClass(81)).not.toEqual(humidityClasses.high);
      expect(HumidityService.getHumidityClass(82)).toEqual(humidityClasses.high);
    });
  });
});
});

/* jshint ignore:end */
