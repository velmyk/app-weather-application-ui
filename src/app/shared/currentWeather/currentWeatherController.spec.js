'use strict';

describe('Current Weather Controller', function(){
	var sut,
			mockScope,
			WeatherService,
			WeatherClassService;

	beforeEach(module('app'));

	// beforeEach(module(function($provider){
	// 	var mock_WeatherService
	// }));

	beforeEach(inject(function(_$rootScope_, _$controller_, _WeatherService_, _WeatherClassService_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('CurrentWeatherController', {$scope: mockScope});
		mockScope.vm = sut;
		WeatherService = _WeatherService_;
		WeatherClassService = _WeatherClassService_;
	}));

	beforeEach(function(){
		spyOn(WeatherService, 'getWeatherDesc').and.returnValue('Cloudy');
		spyOn(WeatherService, 'getWeatherState').and.returnValue('CloudState');
		spyOn(WeatherClassService, 'getWeatherIconClass').and.returnValue('CloudClass');
	});

	it('should have method to get weather description', function(){
		mockScope.$digest();
		expect(WeatherService.getWeatherDesc).toHaveBeenCalled();
		expect(sut.desc).toEqual('Cloudy');
	});

	it('should have method to get weather state', function(){
		mockScope.$digest();
		expect(WeatherService.getWeatherState).toHaveBeenCalled();
		expect(sut.main).toEqual('CloudState');
	});

	it('should have method to get weather description', function(){
		mockScope.$digest();
		expect(WeatherClassService.getWeatherIconClass).toHaveBeenCalled();
		expect(sut.mainImageClass).toEqual('CloudClass');
	});
});