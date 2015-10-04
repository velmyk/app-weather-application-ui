"use strict";

describe('Tablet date controller', function() {
    var sut,
        mockScope,
        mockSETTINGS,
        mockConstants,
        mockDateLabelService,
        mockTimeLabel="today";

    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('SETTINGS', function() {
                this.DISPLAY_DAY_TYPE.buttons[1].value = 2;
            });
            $provide.service('constants', function() {
                this.MILISEC_IN_SEC = 10;
            });
            $provide.service('DateLabelService', function() {
                this.getTimeLabel = jasmine.createSpy('getTimeLabel').and.returnValue(mockTimeLabel);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, SETTINGS, constants, DateLabelService) {
        mockSETTINGS = SETTINGS;
        mockConstants = constants;
        mockDateLabelService = DateLabelService;
        mockScope = _$rootScope_.$new();
        sut = $controller("TabletDateController", { $scope: mockScope, 
                                                    SETTINGS: mockSETTINGS, 
                                                    constants: mockConstants, 
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
        var timeInMilisec= mockConstants.MILISEC_IN_SEC*sut.time;
        expect(sut.timeInMilisec).toEqual(timeInMilisec);
    })

    it("should refresh sut-time when scope-time changes", function() {
        var oldTimeInMilisec = mockConstants.MILISEC_IN_SEC*sut.time;
        mockScope.time = new Date();
        mockScope.$digest();
        var refreshedTimeInMilisec = mockConstants.MILISEC_IN_SEC*sut.time;
        expect(sut.timeInMilisec).not.toEqual(oldTimeInMilisec);
        expect(sut.timeInMilisec).toEqual(refreshedTimeInMilisec);
    })
});