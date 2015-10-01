describe('Module "app" in cfpLoadingBarProvider config', function(){
    var mock_cfpLoadingBarProvider;

    beforeEach(function () {
        module('angular-loading-bar', function (cfpLoadingBarProvider) {
            mock_cfpLoadingBarProvider = cfpLoadingBarProvider;
        });

        module('app');
        inject();
    });
    
    it('should set spiner Template', function() {
        var spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
        expect(mock_cfpLoadingBarProvider.spinnerTemplate).toBeDefined();
        expect(mock_cfpLoadingBarProvider.spinnerTemplate).toEqual(spinnerTemplate);
    });
});