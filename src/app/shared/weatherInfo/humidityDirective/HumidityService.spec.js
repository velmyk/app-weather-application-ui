"use strict;"
describe('app', function() {

  var sut, MockHumidityClasses;
  beforeEach(module('app'));

  beforeEach(function(){
        module(function($provide){
            $provide.service('humidityClasses', function() {
                this.low = jasmine.createSpy('low').and.returnValue("low");
                this.medium = jasmine.createSpy('medium').and.returnValue("medium");
                this.high = jasmine.createSpy('high').and.returnValue("high");
            });

         });
    });

  beforeEach(inject(function(HumidityService, humidityClasses) {
    
    sut = HumidityService;
    MockHumidityClasses = humidityClasses;

  }));

  describe('HumidityService', function() {
    it('when humidity is less then 71, humidity-class = low', function() {
      var lowHumidity=MockHumidityClasses.low;
      expect(sut.getHumidityClass(71)).toEqual(lowHumidity);
    });
    
    it('when humidity is less then 81, humidity-class = low', function() {
      var mediumHumidity=MockHumidityClasses.medium;
      expect(sut.getHumidityClass(81)).toEqual(mediumHumidity);
    });

    it('when humidity is more then 82, humidity-class = low', function() {
      var highHumidity=MockHumidityClasses.high;
      expect(sut.getHumidityClass(82)).toEqual(highHumidity);
     });
  }) 
})
