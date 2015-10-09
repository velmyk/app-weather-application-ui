describe("Clock Service" , function(){

	var sut;
	var mockDate = new Date(2015,1,1,23,59,58);
	const additionalDelay= 0.2;

	beforeEach(module('app'));

	beforeEach( inject( function( ClockService ){
			sut = ClockService;
	}));

	it('Should return time as an object', function(){
		expect(sut.getCurrentTime()).toEqual(jasmine.any(Object));
	});
	it('typeof currentTime should be a Date', function(){
		expect(sut.getCurrentTime().currentTime).toEqual(jasmine.any(Date));
	});
	it('if time convention is 12-hour-clock all values in digits.hours must be less than 13 ', function(){
		var hoursDigits = sut.getDigitsForClock("12hours").hours;
		var flag = true;
		for (var i = 0; i < hoursDigits.length; i++) {
			if(+hoursDigits[i] > 13) {
				flag = false;
				break;
			}
		};
		expect(flag).toBeTruthy();
	});
	it('if time convention is 24-hour-clock all values in digits.hours must be less than 24 ', function(){
		var hoursDigits = sut.getDigitsForClock("24hours").hours;
		var flag = true;
		for (var i = 0; i < hoursDigits.length; i++) {
			if(+hoursDigits[i] > 24) {
				flag = false;
				break;
			}
		};
		expect(flag).toBeTruthy();
	});
	it('timeDelaysForAnimations should return delays for minutes and hours animation', function(){
		sut.getDigitsForClock();
		expect(sut.getTimeDelaysForAnimations().minutesDelay).toBeDefined();
		expect(sut.getTimeDelaysForAnimations().hoursDelay).toBeDefined();
	});

	it('the first value in digits.hours must be equal to the number of hours in date', function(){
		 sut.getCurrentTime().currentTime = mockDate;
		var time = sut.getCurrentTime().currentTime;
		var hoursDigits = sut.getDigitsForClock("24hours").hours;
		expect(+hoursDigits[0]).toEqual(time.getHours());
	});
	it('the first value in digits.minutes must be equal to the number of minutes in date', function(){
		 sut.getCurrentTime().currentTime = mockDate;
		var time = sut.getCurrentTime().currentTime;
		var minutesDigits = sut.getDigitsForClock("24hours").minutes;
		expect(+minutesDigits[0]).toEqual(time.getMinutes());
	});
	it('the first value in digits.seconds must be equal to the number of seconds in date', function(){
		sut.getCurrentTime().currentTime = mockDate;
		var time = sut.getCurrentTime().currentTime;
		var secondsDigits = sut.getDigitsForClock("24hours").seconds;
		expect(+secondsDigits[0]).toEqual(time.getSeconds());
	});
	it('12-hour-clock: the first value in digits.hours must be equal to the number of hours in date', function(){
		sut.getCurrentTime().currentTime = mockDate;
		var time = sut.getCurrentTime().currentTime;
		if (time.getHours()> 12 ) var hours = time.getHours() - 12;
		else var hours = time.getHours();
		var hoursDigits = sut.getDigitsForClock("12hours").hours;
		expect(+hoursDigits[0]).toEqual(hours);
	});

	function getMinutesDelay(date){
		const secInOneMinute = 60;
		return secInOneMinute - date.getSeconds() + additionalDelay;
	}

	it('should return correct delays for animation', function(){
		sut.getCurrentTime().currentTime = mockDate;
		sut.getDigitsForClock();
		var minDelay = sut.getTimeDelaysForAnimations().minutesDelay;
		var CheckedMinutesDelay = getMinutesDelay(mockDate)
		expect(minDelay).toEqual(CheckedMinutesDelay);
	});

	function getHoursDelay(date){
		const secInOneHour = 60*60;
		const secInOneMinute = 60;
		return secInOneHour- date.getMinutes()*secInOneMinute - date.getSeconds() + additionalDelay
	}

	it('should return correct delays for animation', function(){
		sut.getCurrentTime().currentTime = mockDate;
		sut.getDigitsForClock();
		var hourDelay = sut.getTimeDelaysForAnimations().hoursDelay;
		var CheckedHoursDelay = getHoursDelay(mockDate)
		expect(hourDelay).toEqual(CheckedHoursDelay);
	});

})