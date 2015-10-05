"use strict";

describe('Autosync Service', function() {
	var sut,
		mockWeatherResource,
		$interval,
		_4hours = 2,
		_12hours = 3,
		noSync = 1,
		syncConfig = {
			1: "disable",
			2: 14400000,
			3: 43200000
		};

	beforeEach(module("app"));

	beforeEach(function() {
		module(function($provide) {
			$provide.service("OpenWeatherAPI", function() {
				this.loadForecast = jasmine.createSpy('loadForecast').and.callThrough();
			});
		});
	});

	beforeEach(inject(function(_AutosyncService_, _$interval_, OpenWeatherAPI) {
		mockWeatherResource = OpenWeatherAPI;
		$interval = _$interval_;
		sut = _AutosyncService_;
	}));

	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
  	}

	it('should have function poll()', function() {
		expect(sut.poll).toBeDefined();
	});

	it('should call loadForecast() from WeatherResource inside poll() with given delay', function() {
		sut.poll(_4hours);
		$interval.flush(syncConfig[_4hours]);
		expect(mockWeatherResource.loadForecast).toHaveBeenCalled();
	});

	it('should not call loadForecast() from WeatherResource inside poll() with turned off opt', function() {
		sut.poll(noSync);
		expect(mockWeatherResource.loadForecast).not.toHaveBeenCalled();
	});

	it('should set interval promise to current currentInterval', function() {
		var returnedPromise = sut.poll(_12hours);
		expect(sut.currentInterval.value).toEqual(returnedPromise);
	});

	it('should cancel previous inteval if poll is called', function() {
		var returnedPromise = sut.poll(_12hours);
		sut.poll(_12hours);

		expect(sut.currentInterval.value).not.toEqual(returnedPromise);
		expect(sut.currentInterval.isDeletedPrev).toBeTruthy();
	});
});