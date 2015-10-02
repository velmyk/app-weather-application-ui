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
                this.getTimeLabel = jasmine.createSpy('getTimeLabel').and.returnValue("today");
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, SETTINGS, constants, DateLabelService) {
        mockSETTINGS = SETTINGS;
        mockConstants = constants;
        mockDateLabelService = DateLabelService;
        mockScope = _$rootScope_.$new();
        sut = $controller("TabletDateController", {$scope: mockScope});
        mockScope.vm = sut;
    }));

    it("should get time label ", function() {
        mockScope.$digest();
        var timeLabel = mockDateLabelService.getTimeLabel();
        expect(sut.timeLabel).toEqual(timeLabel);
    })

    it("expect getTimeLabel to have been called with $scope.time and DisplayDateType", function() {
        mockScope.$digest();
        var mockDisplayDayType = mockSETTINGS.DISPLAY_DAY_TYPE.buttons[1].value;
        expect(mockDateLabelService.getTimeLabel).toHaveBeenCalledWith(sut.time, mockDisplayDayType)
    })

    it("should get time in miliseconds", function() {
        mockScope.$digest();
        var timeInMilisec= mockConstants.MILISEC_IN_SEC*sut.time;
        expect(sut.timeInMilisec).toEqual(timeInMilisec);
    })

    it("should refresh data when time changes", function() {
        var oldTimeInMilisec = mockConstants.MILISEC_IN_SEC*sut.time;
        mockScope.time = new Date();
        mockScope.$digest();
        var refreshedTimeInMilisec = mockConstants.MILISEC_IN_SEC*sut.time;
        expect(sut.time).toEqual(mockScope.time);
        expect(sut.timeInMilisec).not.toEqual(oldTimeInMilisec);
        expect(sut.timeInMilisec).toEqual(refreshedTimeInMilisec);
    })
});