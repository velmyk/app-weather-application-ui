"use strict";

describe('Location Controller', function() {
    var sut,
        mockScope,
        mockWeatherService,
        mockDateLabelService,
        now = new Date();

    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('WeatherService', function() {
                this.getCity = jasmine.createSpy('getCity').and.returnValue("Kyiv");
            });
            $provide.service('DateLabelService', function() {
                this.getTimeLabel = jasmine.createSpy('getTimeLabel').and.returnValue(now);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, WeatherService, DateLabelService) {
        mockWeatherService = WeatherService;
        mockDateLabelService = DateLabelService;
        mockScope = _$rootScope_.$new();
        sut = $controller("LocationController", {$scope: mockScope});
        mockScope.vm = sut;
    }));

    it("should get city", function() {
        var city = mockWeatherService.getCity();
        expect(sut.city).toEqual(city);
    })

    it("should get time label", function () {
        var time = mockDateLabelService.getTimeLabel();
        expect(sut.time).toEqual(time);
    });

    it("should resresh time while changing on scope", function () {
        var time = new Date(now.setHours(0,0,0,0));
        
        sut.time = Math.random();
        mockScope.$digest();
        expect(sut.time).toEqual(time);
    });
});