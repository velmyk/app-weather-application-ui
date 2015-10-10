"use strict;"
describe("Clock controller" , function(){
	var	sut,
			mockClockService,
			mockAnimationDelayService,
			mockDigitsClockService,
			mockScope,
			mockTime = 1111111,
			mockHoursDelay = 111,
			mockMinutesDelay = 222,
			mockHoursDigits = [1],
			mockMinutesDigits = [2],
			mockSecondsDigits = [3];

	beforeEach(module('app'));

	beforeEach(function(){
		module(function($provide){
			$provide.service('ClockService', function() {
				this.getCurrentTime = jasmine.createSpy('getCurrentTime').and.returnValue(mockTime);
			});
			$provide.service('AnimationDelayService', function() {
				this.getHoursAnimationDelay = jasmine.createSpy('getHoursAnimationDelay').and.returnValue(mockHoursDelay);
				this.getMinutesAnimationDelay = jasmine.createSpy('getMinutesAnimationDelay').and.returnValue(mockMinutesDelay);
			});
			$provide.service('DigitsClockService', function() {
				this.getHoursForClock = jasmine.createSpy('getHoursForClock').and.returnValue(mockHoursDigits);
				this.getMinutesForClock= jasmine.createSpy('getMinutesForClock').and.returnValue(mockMinutesDigits);
				this.getSecondsForClock = jasmine.createSpy('getSecondsForClock').and.returnValue(mockSecondsDigits);
			});
		});
	})

	beforeEach(inject(function(_$rootScope_, $controller, ClockService , AnimationDelayService, DigitsClockService) {
		mockClockService = ClockService;
		mockAnimationDelayService = AnimationDelayService;
		mockDigitsClockService = DigitsClockService;
		mockScope = _$rootScope_.$new();
		sut = $controller("ClockController", { $scope: mockScope, 
															ClockService: mockClockService ,
															AnimationDelayService: mockAnimationDelayService,
															DigitsClockService: mockDigitsClockService
															});
	}));

	it( "should CALL getCurrentTime and SET time equal to returned value from ClockService" , function (){
		mockScope.$digest();
		expect(sut.time).toEqual(mockTime);
		expect(mockClockService.getCurrentTime).toHaveBeenCalled();
	});
	it( "should SET hoursDelay equal to returned value from AnimationDelayService" , function (){
		mockScope.$digest();
		expect(sut.hoursDelay).toEqual(mockHoursDelay);
	});
	it( "should SET minutesDelay equal to returned value from AnimationDelayService" , function (){
		mockScope.$digest();
		expect(sut.minutesDelay).toEqual(mockMinutesDelay);
	});
	it( "should CALL getHoursForClock and SET hoursDigits equal to returned value from DigitsClockService" , function (){
		mockScope.$digest();
		expect(sut.hoursDigits).toEqual(mockHoursDigits);
		expect(mockDigitsClockService.getHoursForClock).toHaveBeenCalled();
	});
	it( "should CALL getMinutesForClock and SET minutesDigits equal to returned value from DigitsClockService" , function (){
		mockScope.$digest();
		expect(sut.minutesDigits).toEqual(mockMinutesDigits);
		expect(mockDigitsClockService.getMinutesForClock).toHaveBeenCalled();
	});
	it( "should CALL getSecondsForClock and SET secondsDigits equal to returned value from DigitsClockService" , function (){
		mockScope.$digest();
		expect(sut.secondsDigits).toEqual(mockSecondsDigits);
		expect(mockDigitsClockService.getSecondsForClock).toHaveBeenCalled();
	});
})