'use strict;'

describe('Daynight', function() {
    var Daynight;

    beforeEach(module('app'));
    beforeEach(inject(function(_Daynight_) {
        Daynight = _Daynight_;
    }));

    describe('isDay method', function() {
        it('calculated correctly', function() {
            expect(Daynight.isDay(1442944049)).toEqual(true);
            expect(Daynight.isDay(1442962049)).toEqual(false);
        });
    });

    describe('isNight method', function() {
        it('calculated correctly', function() {
            expect(Daynight.isNight(1442944049)).toEqual(false);
            expect(Daynight.isNight(1442962049)).toEqual(true);
        });
    });
});