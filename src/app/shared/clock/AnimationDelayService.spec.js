describe("Animation Delay Service" , function(){

	var sut;
	var mockDate = new Date(2015,1,1,23,59,58);
	const additionalDelay= 0.2;

	beforeEach(module('app'));

	beforeEach( inject( function( AnimationDelayService ){
			sut = AnimationDelayService;
	}));

	function getMinutesDelay(date){
		const secInOneMinute = 60;
		return secInOneMinute - date.getSeconds() + additionalDelay;
	}

	function getHoursDelay(date){
		const secInOneHour = 60*60,
				 secInOneMinute = 60;
		return secInOneHour- date.getMinutes()*secInOneMinute - date.getSeconds() + additionalDelay;
	}

	it('should return correct delay for minutes animation', function(){
		var minDelay = sut.getMinutesAnimationDelay(mockDate);
		var CheckedMinutesDelay = getMinutesDelay(mockDate);
		expect(minDelay).toEqual(CheckedMinutesDelay);
	});

	it('should return correct delays for hours animation', function(){
		var hourDelay = sut.getHoursAnimationDelay(mockDate);
		var CheckedHoursDelay = getHoursDelay(mockDate);
		expect(hourDelay).toEqual(CheckedHoursDelay);
	});

})