"use strict";
describe('app', function() {
  var sut, mockWeatherClasses,mockWeatherClassesArr, patterns;
  
  beforeEach(module('app'));

  beforeEach(function(){
    module(function($provide){
      $provide.service('WeatherClasses', function() {
        this.thunder = 1;
        this.drizzle = 2;
        this.lightRain = 3;
        this.heavyRain = 4;
        this.freezingRain = 5;
        this.snow = 6;
        this.clearSky = 7;
        this.fewClouds = 8;
        this.scatteredClouds = 9;
        this.overcastClouds = 10;
        this.mist = 11;
        this.tornado = 12;
      });
    });
  });


  beforeEach( inject(function( WeatherClassesMap, WeatherClasses ) {

    sut = WeatherClassesMap;
    mockWeatherClasses = WeatherClasses;

    mockWeatherClassesArr = [ mockWeatherClasses.thunder ,
                              mockWeatherClasses.drizzle ,
                              mockWeatherClasses.lightRain ,
                              mockWeatherClasses.heavyRain ,
                              mockWeatherClasses.freezingRain ,
                              mockWeatherClasses.snow ,
                              mockWeatherClasses.clearSky ,
                              mockWeatherClasses.fewClouds ,
                              mockWeatherClasses.scatteredClouds ,
                              mockWeatherClasses.overcastClouds ,
                              mockWeatherClasses.mist ,
                              mockWeatherClasses.tornado 
                            ];
  }));

  describe('Weather classes map', function() {

      var thunderPattern = '/^2|^90[1,2,5,6]|^95[^1-4]|^96/';
      var drizzlePattern ='/^3/';
      var lightRainPattern ='/^50[0-1]$/';
      var heavyRainPattern='/(^50[2-4]$)|(^5[2-3][0-9]$)/'; 
      var freezingRainPattern = '/(511)|(^61)/'; 
      var snowPattern ='/(^60)|(^62)/';
      var clearSkyPattern = '/800|904|951/';
      var fewCloudsPattern = '/801|^95[2-4]/';
      var scatteredCloudsPattern= '/80[2,3,4]|903/';
      var overcastCloudsPattern = '/804/';
      var mistPattern = '/^7[0-7]/';
      var tornado='/900|781/';

    patterns= [  thunderPattern,
                 drizzlePattern,
                 lightRainPattern,
                 heavyRainPattern,
                 freezingRainPattern,
                 snowPattern,
                 clearSkyPattern,
                 fewCloudsPattern,
                 scatteredCloudsPattern,
                 overcastCloudsPattern,
                 mistPattern,
                 tornado
              ];

     
  function getValueFromMap(map, searchingKey){
    var mapValue;

    for (var [key, value] of map) {
      if( key == searchingKey){
        mapValue=value;
      }
    }
      return mapValue;
    }

  for(var index = 0; index < patterns.length; index++) {

      testWeatherClassMap( patterns[index], index);

  }

  function testWeatherClassMap(input,index) {
    it('when key is ' + input + 'it should return correct value from mockWeatherClassesArr', function() {
      var map = sut.getWeatherClassesMap();
      var mapValue  = getValueFromMap(map, input);
          expect(mapValue).toEqual(mockWeatherClassesArr[index]);
    });
  }

    it('should provide a map for main image and background which consist of 12 key-values', function(){
      var map = sut.getWeatherClassesMap();
      expect(map.size).toEqual(12);
    }); 
  })
});