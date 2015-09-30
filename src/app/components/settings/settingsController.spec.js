"use strict";

describe('Settings Controller', function() {
	var sut,
	mockScope,
	mockSETTINGS;

	beforeEach(module('app'));
	
	beforeEach(function() {
  		module(function($provide) {
    		$provide.constant('SETTINGS', {
      			DISPLAY_DAY_TYPE: {
					settingsKey: "dayDisplayType",
					buttons: [
						{
							value: "1",
							title: "Date"
						}
					]
				},
				DISPLAY_DAY_AMOUNT: {
					settingsKey: "daysToDisplay",
					buttons: [
						{
							value: 3,
							title: 3
						}
					]
				},
				SYNC_PERIOD: {
					settingsKey: "syncPeriod",
					buttons: [
						{
							value: 1,
							title: "Off"
						}
					]
				}
    		});
  		});
  	});

	beforeEach(inject(function(_$rootScope_, $controller, SETTINGS) {
		mockSETTINGS = SETTINGS;
        mockScope = _$rootScope_.$new();
        mockScope.vm = sut;
        sut = $controller("SettingsController", {$scope: mockScope});
    }));

	it('should get init settings', function() {
		var displayDayMock = mockSETTINGS.DISPLAY_DAY_TYPE,
			daysToDisplayMock = mockSETTINGS.DISPLAY_DAY_AMOUNT,
			syncPeriod = mockSETTINGS.SYNC_PERIOD;

		expect(sut.displayDay).toEqual(displayDayMock);
		expect(sut.daysToDisplay).toEqual(daysToDisplayMock);
		expect(sut.syncPeriod).toEqual(syncPeriod);
	});

	it('should have field "settingsKey" in init obj', function() {
		expect(sut.displayDay.settingsKey).toBeDefined();
		expect(sut.daysToDisplay.settingsKey).toBeDefined();
		expect(sut.syncPeriod.settingsKey).toBeDefined();
	});

	it('should have field "buttons" as array in init obj', function() {
		expect(sut.displayDay.buttons).toEqual(jasmine.any(Array));;
		expect(sut.daysToDisplay.buttons).toEqual(jasmine.any(Array));;
		expect(sut.syncPeriod.buttons).toEqual(jasmine.any(Array));;
	});
	
});