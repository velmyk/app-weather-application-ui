'use strict';

describe('Dropdown Serch Controller', function(){

	var mockScope,
			sut;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$controller_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('DropdownSearchController', {$scope: mockScope});
		mockScope.vm = sut;
	}));

	it('should have empty object currentCity when settings page opens', function(){
		expect(sut.currentCity).toEqual('{}');
	});

	it('should send request to server when input changes', function(){
		sut.searchPhrase = 'abc';
		expect(CityService.getCitiesArray).toHaveBeenCalled();
	});

	it('should get an object as a respond from server', function(){
		expect(sut.citiesSet).toEqual('{}');
		sut.searchPhrase = 'abc';
		expect(sut.citiesSet.cnt).toBeDefined();
		expect(sut.citiesSet.list).toEqual(jasmine.any(Array));
	});

	it('should save value to localStorage if user selects countrie', function(){
		expect(sut.currentCity).toEqual('{}');
		sut.currentCity = {"_id":823556,"country":"RU","coord":{"lon":"39.638889","lat":43.794167},"name":["Khartsiz Pervyy"]};
		expect(localStorageService.set).toHaveBeenCalled();
	});

});