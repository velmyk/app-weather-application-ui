"use strict";

describe('Module "app" on run', function() {
	var mockAutosyncService,
        $rootScope;

	beforeEach(function () {
        module('app', function ($provide) {
            $provide.value('AutosyncService', {
                poll: jasmine.createSpy("poll")
            });
        });

        inject(function (_AutosyncService_, _localStorageService_, _$rootScope_) {
            $rootScope = _$rootScope_;
            mockAutosyncService = _AutosyncService_;
        });
    });

    it('should start polling', function () {
        expect(mockAutosyncService.poll).toHaveBeenCalled();
    });
    
});