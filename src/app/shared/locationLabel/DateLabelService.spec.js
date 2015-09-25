"use strict";

describe('DateLabel Service', function() {
    const ZERO = 0,
          mSeconds = 1000,
          daySeconds = 24*60*60;

    var sut,
        currentDate,
        todayTime;

    beforeEach(module('app'));
    beforeEach(inject(function(_DateLabelService_) {
        sut = _DateLabelService_;
        currentDate = new Date();
        todayTime = (currentDate / mSeconds) | ZERO;
    }));

    describe('getTimeLabel method', function() {
        it('should return "Today" if pass current date', function() {
            expect(sut.getTimeLabel(todayTime)).toEqual("Today");
        });

        it('should return "Tomorrow" if pass tomorrow date', function() {
            var tomorrowTime = (currentDate / mSeconds) | ZERO;
            expect(sut.getTimeLabel(todayTime + daySeconds)).toEqual("Tomorrow");
        });

        it('should return Date obj if pass timestamp 1', function() {
            var expectedValue = new Date(1449882061 * mSeconds);
            expectedValue.setHours(0,0,0,0)

            expect(sut.getTimeLabel(1449882061)).toEqual(expectedValue);
        });
        
    });
});