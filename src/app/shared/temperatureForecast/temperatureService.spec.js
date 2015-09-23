'use strict';

describe('Daynight', function() {
    var sut,
        DAY_TIME = Math.round(new Date(2015, 9, 23, 11, 11, 11, 111 ).getTime()/1000), // timestamp in seconds
        NIGHT_TIME = Math.round(new Date(2015, 9, 23, 23, 11, 11, 111 ).getTime()/1000); // timestamp in seconds

    beforeEach(module('app'));
    beforeEach(inject(function(_Daynight_) {
        sut = _Daynight_;
    }));

    describe('isDay method', function() {
        it('calculated correctly', function() {
            expect(sut.isDay(DAY_TIME)).toEqual(true);
            expect(sut.isDay(NIGHT_TIME)).toEqual(false);
        });
    });

    describe('isNight method', function() {
        it('calculated correctly', function() {
            expect(sut.isNight(DAY_TIME)).toEqual(false);
            expect(sut.isNight(NIGHT_TIME)).toEqual(true);
        });
    });
});

