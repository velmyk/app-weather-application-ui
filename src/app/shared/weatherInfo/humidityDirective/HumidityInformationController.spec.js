"use strict";

describe('Humidity Information Controller', function() {
    var sut,
        mockScope,
        MockWeatherService,
        MockHumidityService,
        mockDate = 1111111111,
        mockHumidity = 100,
        mockHumidityClass = "one";


    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('WeatherService', function() {
                this.getHumidity = jasmine.createSpy('getHumidity').and.returnValue(mockHumidity);
            });
            $provide.service('HumidityService', function() {
                this.getHumidityClass = jasmine.createSpy('getHumidityClass').and.returnValue(mockHumidityClass);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, WeatherService, HumidityService) {
        MockWeatherService = WeatherService;
        MockHumidityService = HumidityService;
        mockScope = _$rootScope_.$new();
        sut = $controller("HumidityInformationController", { $scope: mockScope, 
                                                         WeatherService: MockWeatherService ,
                                                         HumidityService: MockHumidityService
                                                        });
    }));


    it("should set humidity equal to returned value from MockWeatherService", function() {
        mockScope.$digest();
        expect(sut.humidity).toEqual(mockHumidity);
    })
    it("should set humidityClass equal to returned value from mockHumidityClass", function() {
        mockScope.$digest();
        expect(sut.humidityClass).toEqual(mockHumidityClass);
    })
    it("should call getHumidity method with 'time' as an argument", function() {
        mockScope.time = mockDate;
        mockScope.$digest();
        expect(MockWeatherService.getHumidity).toHaveBeenCalledWith(mockScope.time);
    })
    it("should call getHumidityClass with 'humidity' as an argument", function() {
        mockScope.$digest();
        expect(MockHumidityService.getHumidityClass).toHaveBeenCalledWith(sut.humidity);
    })

});