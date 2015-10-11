describe("Digits Clock Service" , function(){
	const additionalDelay= 0.2;
	
	var sut,
		 mockDate = new Date(2015,1,1,23,59,58);
	

	beforeEach(module('app'));

	beforeEach( inject( function( DigitsClockService ){
			sut = DigitsClockService;
	}));

	it('if time convention is 12-hour-clock all values in hoursDigits must be less than 13 ', function(){
		var hoursDigits = sut.getHoursForClock( mockDate ,"12hours");
		var flag = true;
		for (var i = 0; i < hoursDigits.length; i++) {
			if(+hoursDigits[i] > 13) {
				flag = false;
				break;
			}
		};
		expect(flag).toBeTruthy();
	});
	it('if time convention is 24-hour-clock all values in hoursDigits must be less than 24 ', function(){
		var hoursDigits = sut.getHoursForClock( mockDate, "24hours");
		var flag = true;
		for (var i = 0; i < hoursDigits.length; i++) {
			if(+hoursDigits[i] > 24) {
				flag = false;
				break;
			}
		};
		expect(flag).toBeTruthy();
	});

	it('the first value in hoursDigits must be equal to the number of hours in date', function(){
		var hoursDigits = sut.getHoursForClock( mockDate, "24hours");
		expect(+hoursDigits[0]).toEqual(mockDate.getHours());
	});
	it('the first value in minutesDigits must be equal to the number of minutes in date', function(){
		var minutesDigits = sut.getMinutesForClock( mockDate );
		expect(+minutesDigits[0]).toEqual(mockDate.getMinutes());
	});
	it('the first value in secondsDigits must be equal to the number of seconds in date', function(){
		var secondsDigits = sut.getSecondsForClock( mockDate);
		expect(+secondsDigits[0]).toEqual(mockDate.getSeconds());
	});
})