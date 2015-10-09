"use strict;"
describe("Clock controller" , function(){
	var	sut,
	mockClockService,
	mockScope,
	mockTime=1111111,
	mockDigits ={
						seconds: [1],
						minutes: [2],
						hours: [3]
					},
	mockDelays={ 
					minutesDelay:1,
					hoursDelay: 2
					};
	beforeEach(module('app'));

	beforeEach(function(){
		module(function($provide){
			$provide.service('ClockService', function() {
				this.getCurrentTime = jasmine.createSpy('getCurrentTime').and.returnValue(mockTime);
				this.getDigitsForClock= jasmine.createSpy('getDigitsForClock').and.returnValue(mockDigits);
				this.getTimeDelaysForAnimations = jasmine.createSpy('getTimeDelaysForAnimations').and.returnValue(mockDelays);
			});
		});
	})

	beforeEach(inject(function(_$rootScope_, $controller, ClockService) {
		mockClockService = ClockService;
		mockScope = _$rootScope_.$new();
		sut = $controller("ClockController", { $scope: mockScope, 
															ClockService: mockClockService 
															});
	}));

	it( "should CALL getCurrentTime and SET time equal to returned value from ClockService" , function (){
		mockScope.$digest();
		expect(sut.time).toEqual(mockTime);
		expect(mockClockService.getCurrentTime).toHaveBeenCalled();
	});
	it( "should CALL getDigitsForClock and SET digitsForClock equal to returned value from ClockService" , function (){
		mockScope.$digest();
		expect(sut.digitsForClock).toEqual(mockDigits);
		expect(mockClockService.getDigitsForClock).toHaveBeenCalledWith("12hours");
	});
	it( "should CALL getTimeDelaysForAnimations and SET delaysForAnimations equal to returned value from ClockService" , function (){
		mockScope.$digest();
		expect(sut.delaysForAnimations).toEqual(mockDelays);
		expect(mockClockService.getTimeDelaysForAnimations).toHaveBeenCalled();
	});

})