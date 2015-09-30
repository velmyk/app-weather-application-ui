"use strict;"
describe('app', function() {
  var sut, mockWeatherClassesMap, mockWeatherService, mockMap, mockTime, mockWeatherId;
  
  mockTime = 11111111111;
  mockWeatherId = 2;
  mockMap = new Map();

  mockMap.set( /1/ , 'one');
  mockMap.set( /2/ , 'two');
  mockMap.set( /3/ , 'three'); 
  
  beforeEach(module('app'));

  beforeEach(function(){
    module(function($provide){
      $provide.service('WeatherClassesMap', function() {
        this.getWeatherClassesMap = jasmine.createSpy('getWeatherClassesMap').and.returnValue(mockMap);
      });
      $provide.service('WeatherService', function() {
        this.getWeatherId = jasmine.createSpy('getWeatherId').and.returnValue(mockWeatherId);
      });
    });
  });

  beforeEach(inject(function( WeatherClassService, WeatherClassesMap, WeatherService) {
    sut = WeatherClassService;
    mockWeatherClassesMap = WeatherClassesMap;
    mockWeatherService = WeatherService;
  }));

  function getValueFromMap(map, searchingKey){
    var backgroundColor;

    for (var [key, value] of map) {
      if(key.test(searchingKey)){
        backgroundColor = value;
        break;
      }
    }
    return backgroundColor;
  }

  describe('Weather Classes Service', function() {

    it("should get correct backround class depending on weather id", function() {
      var backroundClass = sut.getBgClass(mockTime);
      var map = mockWeatherClassesMap.getWeatherClassesMap();
      var keyForSearching = mockWeatherService.getWeatherId(mockTime);
      var mapValue = getValueFromMap( map , keyForSearching );
      expect(backroundClass).toEqual(mapValue);
    }); 

    it("should call WeatherService.getWeatherId() with mock time when getBgClass is called", function() {
      sut.getBgClass(mockTime);
      expect(mockWeatherService.getWeatherId).toHaveBeenCalledWith(mockTime);
    });

    it("should get correct Weather Icon Class depending on weather id", function() {
      var weatherImageClass = sut.getWeatherIconClass(mockTime);
      var map = mockWeatherClassesMap.getWeatherClassesMap();
      var keyForSearching = mockWeatherService.getWeatherId(mockTime);
      var mapValue = getValueFromMap( map , keyForSearching );
      expect(weatherImageClass).toEqual(mapValue);
    }); 

    it("should call WeatherService.getWeatherId() with mock time when getBgClass is called", function() {
      sut.getWeatherIconClass(mockTime);
      expect(mockWeatherService.getWeatherId).toHaveBeenCalledWith(mockTime);
    });

  }) 
});
