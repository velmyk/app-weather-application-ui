"use strict";

describe('TimeTrackingService', function() {
    var sut,
    	time,
    	maxDay = 4,
        MOCK_TIME_IN_SECONDS;

    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('TIME_IN_SECONDS', function() {
                this.DAY = 86400;
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, _TimeTrackingService_, TIME_IN_SECONDS) {
        MOCK_TIME_IN_SECONDS = TIME_IN_SECONDS;
        sut = _TimeTrackingService_;
        sut.initTime();
    }));

    function calculateTime (days) {
		return (new Date((sut.time.now + days * MOCK_TIME_IN_SECONDS.DAY)*1000).setHours(15))/1000;
	}

    it("should plus day to init data", function() {
    	var displayDayBefore = sut.time.displayDay;
    	
    	sut.plusDay();
    	displayDayBefore++

        expect(sut.time.displayTime).toEqual(calculateTime(displayDayBefore));
        expect(sut.time.displayDay).toEqual(displayDayBefore);
    })

    it("should not plus day if max days reached", function() {
    	sut.plusDay();
    	sut.plusDay();
    	sut.plusDay();
    	sut.plusDay();
    	sut.plusDay();

    	expect(sut.time.displayDay).toEqual(maxDay);
    });

    it("should rollback to today if on tomorrow", function() {
    	var displayDayBefore = sut.time.displayDay;
    	
    	sut.plusDay();
    	sut.minusDay();
		
        expect(sut.time.displayTime).toEqual(sut.time.now);
        expect(sut.time.displayDay).toEqual(displayDayBefore);
    });

    it("should substract day of init data", function() {
    	var displayDayBefore;

    	sut.plusDay();
    	displayDayBefore = sut.time.displayDay;
    	sut.plusDay();
    	sut.minusDay();

        expect(sut.time.displayTime).toEqual(calculateTime(displayDayBefore));
        expect(sut.time.displayDay).toEqual(displayDayBefore);
    })

});