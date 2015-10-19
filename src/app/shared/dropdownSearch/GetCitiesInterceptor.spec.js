'use strict';

describe('GetSities Interceptor', function(){

	var	sut,
			constants,
			PreloaderService;

	beforeEach(module('app'));

	beforeEach(inject(function(_GetCitiesInterceptor_, _constants_, _PreloaderService_){
		sut = _GetCitiesInterceptor_;
		constants = _constants_;
		PreloaderService = _PreloaderService_;
	}));

	beforeEach(function(){
		spyOn(PreloaderService, 'enableIndicator');
		spyOn(PreloaderService, 'disableIndicator');
	});

	it('should enable loading indicator if intercepts request with special URL', function(){
		sut().request( { url: constants.CITIES_API_URL + 'abc'} );
		expect(PreloaderService.enableIndicator).toHaveBeenCalled();
	});

	it('should disable loading indicator if intercepts response with special URL', function(){
		sut().response( { config: { url: constants.CITIES_API_URL + 'abc'} } );
		expect(PreloaderService.disableIndicator).toHaveBeenCalled();
	});

	it('should disable loading indicator if intercepts responseError with special URL', function(){
		sut().responseError( { config: { url: constants.CITIES_API_URL + 'abc'} } );
		expect(PreloaderService.disableIndicator).toHaveBeenCalled();
	});

});