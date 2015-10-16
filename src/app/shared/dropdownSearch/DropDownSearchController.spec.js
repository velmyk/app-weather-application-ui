'use strict';

describe('Dropdown Serch Controller', function(){

	var mockScope,
			CityService,
			localStorageService,
			sut,
			PreloaderService;

	beforeEach(module('app'));

	beforeEach(module(function($provide){

		$provide.value('CityService', {
			getCities: function(searchPhrase) {
				return {
					then: function(callback) {
						return callback( { data: { cnt: 2, list: [ { _id: 123456, name: ['Kiev'] }, { _id: 654321, name: ['London'] } ] } } );
					}
				};
			}
		});

	}));

	beforeEach(inject(function(_$rootScope_, _$controller_, _CityService_, _localStorageService_, _PreloaderService_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('DropdownSearchController', {$scope: mockScope});
		mockScope.vm = sut;
		CityService = _CityService_;
		localStorageService = _localStorageService_;
		PreloaderService = _PreloaderService_;
	}));

	it('should have empty object city when settings page opens', function(){
		expect(sut.city).toEqual({});
	});

	it('should send request to server when search phrase has more then 2 symbols', function(){
		spyOn(CityService, 'getCities').and.callThrough();
		sut.refreshCities('abc');
		expect(CityService.getCities).toHaveBeenCalledWith('abc');
	});

	it('should not send request to server when search phrase has less then 3 symbols', function(){
		spyOn(CityService, 'getCities').and.callThrough();
		sut.refreshCities('ab');
		expect(CityService.getCities).not.toHaveBeenCalled();
	});

	it('should get array from server in respond', function(){
		sut.refreshCities('abcd');
		expect(sut.cities).toEqual(jasmine.any(Array));
		expect(sut.cities.length).toEqual(2);
	});

	it('should turn of load indicator when comes request from server', function(){
		spyOn(PreloaderService, 'disableIndicator').and.callThrough();
		sut.refreshCities('abc');
		expect(PreloaderService.disableIndicator).toHaveBeenCalled();
	});

	it('should save id of selected city to localStorage', function(){
		spyOn(localStorageService, 'set');
		expect(sut.city).toEqual({});
		sut.city.selected = {"_id":823556,"country":"RU","coord":{"lon":"39.638889","lat":43.794167},"name":["Khartsiz Pervyy"]};
		mockScope.$digest();
		expect(localStorageService.set).toHaveBeenCalled();
	});

});