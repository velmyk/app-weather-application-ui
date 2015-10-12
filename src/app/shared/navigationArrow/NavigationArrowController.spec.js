'use strict';

describe('Navigation Arrow Controller', function(){
	var NavigationArrowService,
			mockScope,
			sut;

	beforeEach(module('app'));

	beforeEach(module(function($provide){

		$provide.value('NavigationArrowService', {
			arrowImg: function(){
				return "img.jpg";
			}
		})

	}));

	beforeEach(inject(function(_$rootScope_, _$controller_, _NavigationArrowService_){
		mockScope = _$rootScope_.$new();
		sut = _$controller_('NavigationArrowController', {$scope: mockScope});
		mockScope.vm = sut;
		NavigationArrowService = _NavigationArrowService_;
	}));

	it('should get image path vm.arrowImage', function(){
		expect(sut.arrowImg).toEqual("img.jpg");
	});

});