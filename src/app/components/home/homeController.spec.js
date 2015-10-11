'use strict';

describe('Home Controller', function(){
	var WeatherClassService,
			TimeTrackingService,
			mockScope,
			sut;

	beforeEach(module('app'));

	beforeEach( module( function( $provide ){
		$provide.service('WeatherService', function(){
			this.getCity = jasmine.createSpy('getCity').and.returnValue('Kiev');
		});

		$provide.service('WeatherClassService', function(){
			this.getBgClass = jasmine.createSpy('getBgClass').and.returnValue('Wind');
		});

	}));

	beforeEach(inject(function(_$rootScope_, _$controller_, _TimeTrackingService_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('HomeController', { $scope: mockScope});
		mockScope.vm = sut;
		TimeTrackingService = _TimeTrackingService_;
	}));

	beforeEach(function(){
		spyOn(TimeTrackingService, 'initTime');
	});

	it('should get city to display', function(){
		expect(sut.city).toEqual('Kiev');
	});

	it('should get and init time object', function(){
		var time = TimeTrackingService.time;
		mockScope.$digest();
		expect(TimeTrackingService.initTime).toHaveBeenCalled();
		expect(sut.time).toEqual(time);
	});

	it('should get method to get background class', function(){
		mockScope.$digest();
		expect(sut.getBgClass()).toEqual('Wind');
	});

	it('should get time for 3 days', function(){
		mockScope.$digest();
		expect(sut.closestDates).toEqual(jasmine.any(Array));
		expect(sut.closestDates.length).toEqual(3);
	});

	it('should have methods to increase or decrease time to display', function(){
		expect(sut.plusDay).toBeDefined();
		expect(sut.minusDay).toBeDefined();
	});
});