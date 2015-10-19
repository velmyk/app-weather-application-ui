"use strict";

describe('Tablet date controller', function() {
    var sut,
        mockScope,
        mockSETTINGS,
        mockTIME_IN_MILISECONDS,
        mockDateLabelService,
        mockTimeLabel="today";

    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('SETTINGS', function() {
                this.DISPLAY_DAY_TYPE.buttons[1].value = 2;
            });
            $provide.service('TIME_IN_MILISECONDS', function() {
                this.SEC = 10;
            });
            $provide.service('DateLabelService', function() {
                this.getTimeLabel = jasmine.createSpy('getTimeLabel').and.returnValue(mockTimeLabel);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, SETTINGS, TIME_IN_MILISECONDS, DateLabelService) {
        mockSETTINGS = SETTINGS;
        mockTIME_IN_MILISECONDS = TIME_IN_MILISECONDS;
        mockDateLabelService = DateLabelService;
        mockScope = _$rootScope_.$new();
        sut = $controller("TabletDateController", { $scope: mockScope, 
                                                    SETTINGS: mockSETTINGS, 
                                                    TIME_IN_MILISECONDS: mockTIME_IN_MILISECONDS, 
                                                    DateLabelService: mockDateLabelService });
    }));


    it("should set sut.timeLabel equal to returned value from getTimeLabel method from DateLabelService", function() {
        mockScope.$digest();
        expect(sut.timeLabel).toEqual(mockTimeLabel);
    })

    it("expect getTimeLabel to have been called with 'time' and 'DisplayDateType'", function() {
        mockScope.$digest();
        var mockDisplayDayType = mockSETTINGS.DISPLAY_DAY_TYPE.buttons[1].value;
        expect(mockDateLabelService.getTimeLabel).toHaveBeenCalledWith(sut.time, mockDisplayDayType)
    })

    it("should get time in miliseconds", function() {
        mockScope.$digest();
        var timeInMilisec= mockTIME_IN_MILISECONDS.SEC * sut.time;
        expect(sut.timeInMilisec).toEqual(timeInMilisec);
    })

    it("should refresh sut-time when scope-time changes", function() {
        var oldTimeInMilisec = mockTIME_IN_MILISECONDS.SEC * sut.time;
        mockScope.time = new Date();
        mockScope.$digest();
        var refreshedTimeInMilisec = mockTIME_IN_MILISECONDS.SEC * sut.time;
        expect(sut.timeInMilisec).not.toEqual(oldTimeInMilisec);
        expect(sut.timeInMilisec).toEqual(refreshedTimeInMilisec);
    })
});