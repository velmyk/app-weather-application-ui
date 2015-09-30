describe('Module "app"', function () {

    describe('in localStorageServiceProvider config', function(){
        var mock_localStorageServiceProvider;

        beforeEach(function () {
            module('LocalStorageModule', function (localStorageServiceProvider) {
                mock_localStorageServiceProvider = localStorageServiceProvider;
                spyOn(mock_localStorageServiceProvider, 'setPrefix').and.callThrough();
            });

            module('app');
            inject();
        });
        
        it('should set prefix to "ls"', function() {
            var localStoragePrefix = 'ls';
            expect(mock_localStorageServiceProvider.setPrefix).toHaveBeenCalledWith(localStoragePrefix);
        });
    });

    describe('in cfpLoadingBarProvider config', function(){
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
    
});
