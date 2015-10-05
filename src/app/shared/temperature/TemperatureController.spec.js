"use strict";

describe('Temperature Controller', function() {
    var sut,
        mockScope,
        mockWeatherService,
        mockDayNightService;
        
    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('WeatherService', function() {
                this.getTemp = jasmine.createSpy('getTemp').and.returnValue(19);
                this.getClosestTemp = jasmine.createSpy('getClosestTemp').and.returnValue(14);
            });
            $provide.service('DayNightService', function() {
                this.isDay = jasmine.createSpy('isDay').and.returnValue(true);
                this.isNight = jasmine.createSpy('isNight').and.returnValue(false);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, WeatherService, DayNightService) {
        mockWeatherService = WeatherService;
        mockDayNightService = DayNightService;
        mockScope = _$rootScope_.$new();
        sut = $controller("TemperatureController", {$scope: mockScope});
        mockScope.vm = sut;
    }));

    it("should get current temperature", function() {
        var temperatureNow = mockWeatherService.getTemp();
        mockScope.$digest();
        expect(sut.temperatureNow).toEqual(temperatureNow);
    });

    it("should get night forecast temperature", function() {
        var closestForecast = mockWeatherService.getClosestTemp();
        mockScope.$digest();
        expect(sut.closestForecast).toEqual(closestForecast);
    });

    it("should get current day state - isDay", function() {
        var isDay = mockDayNightService.isDay();
        mockScope.$digest();
        expect(sut.isDay).toEqual(isDay);
    });

    it("should get current day state - isNight", function() {
        var isNight = mockDayNightService.isNight();
        mockScope.$digest();
        expect(sut.isNight).toEqual(isNight);
    });
});