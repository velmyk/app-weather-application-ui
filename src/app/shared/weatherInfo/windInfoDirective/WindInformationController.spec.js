"use strict";

describe('Wind Information Controller', function() {
    var sut,
        mockScope,
        MockWeatherService,
        mockOpenWeatherApi,
        mockWindSpeed = 100,
        mockWindDegree = 220;


    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('WeatherService', function() {
                this.getWindSpeed = jasmine.createSpy('getWindSpeed').and.returnValue(mockWindSpeed);
                this.getWindDirection = jasmine.createSpy('getWindDirection').and.returnValue(mockWindDegree);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, WeatherService) {
        MockWeatherService = WeatherService;
        mockScope = _$rootScope_.$new();
        sut = $controller("WindInformationController", { $scope: mockScope, 
                                                         WeatherService: MockWeatherService 
                                                        });
    }));


    it("should set wspeed equal to returned value from MockWeatherService", function() {
        mockScope.$digest();
        expect(sut.wSpeed).toEqual(mockWindSpeed);
    })
    it("should set humidityClass equal to returned value from MockWeatherService", function() {
        mockScope.$digest();
        expect(sut.wDegree).toEqual(mockWindDegree);
    })
    
});