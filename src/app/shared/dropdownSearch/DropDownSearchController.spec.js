'use strict';

describe('Dropdown Serch Controller', function(){

	var mockScope,
			CityService,
			localStorageService,
			sut,
			mockCityService,
			$rootScope,
			$controller,
			$q;

	beforeEach(module('app'));

	beforeEach(module(function($provide){

		mockCityService = {
			getCities: function (searchPhrase) {
				var deferred = $q.defer();
				deferred.resolve( { data: { cnt: 2, list: [ { _id: 123456, name: ['Kiev'] }, { _id: 654321, name: ['London'] } ] } } );
				return deferred.promise;
			}
		}

		$provide.value('CityService', mockCityService);

	}));

	beforeEach(inject(function(_$rootScope_, _$controller_, _CityService_, _localStorageService_, _$q_){
		$rootScope = _$rootScope_;
		$q = _$q_;
		$controller = _$controller_;
		CityService = _CityService_;
		localStorageService = _localStorageService_;
		mockScope = $rootScope.$new();
		sut = $controller('DropdownSearchController', {$scope: mockScope});
		mockScope.vm = sut;
	}));

	it('should have empty object city when settings page opens', function(){
		expect(sut.city).toEqual({selected: null});
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
		$rootScope.$apply();
		console.log(sut.cities);
		expect(sut.cities).toEqual(jasmine.any(Array));
		expect(sut.cities.length).toEqual(2);
	});

	it('should save id of selected city to localStorage', function(){
		spyOn(localStorageService, 'set');
		expect(sut.city).toEqual({selected: null});
		sut.city.selected = {"_id":823556,"country":"RU","coord":{"lon":"39.638889","lat":43.794167},"name":["Khartsiz Pervyy"]};
		mockScope.$digest();
		expect(localStorageService.set).toHaveBeenCalled();
	});

});