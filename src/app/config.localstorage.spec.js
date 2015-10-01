describe('Module "app" in localStorageServiceProvider config', function(){
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
