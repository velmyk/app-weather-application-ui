describe("Clock Service" , function(){

	var sut;
	var mockDate = new Date(2015,1,1,23,59,58);

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

})