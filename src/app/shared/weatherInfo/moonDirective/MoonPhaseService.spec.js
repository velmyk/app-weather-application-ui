"use strict;"
describe('app', function() {

  var mockMap=new Map();
      mockMap.set([2,3] , 'one' );
      mockMap.set([4,5,6] , 'two' );
      mockMap.set([7,8], 'three' ); 
      mockMap.set([9,10,11] , 'four');
      mockMap.set([12,13,14] ,  'five');
      mockMap.set([15,16] ,  'six'); //full moon
      mockMap.set([17,18] , 'seven'); 
      mockMap.set([19,20] ,  'eight');
      mockMap.set([21,22] ,  'nine'); 
      mockMap.set([23,24,25] ,  'ten' );
      mockMap.set([26,27,28]  ,  'eleven');
      mockMap.set([29,30, 1] ,  'twelve'); 
  
  var sut, MockMoonPhaseMap;
  beforeEach(module('app'));

  beforeEach(function(){
        module(function($provide){
            $provide.service('MoonPhaseMap', function() {
                this.getMoonPhaseMap = jasmine.createSpy('getMoonPhaseMap').and.returnValue(mockMap);
            });

         });
    });

  beforeEach(inject(function(MoonPhaseService, MoonPhaseMap) {
    
    sut = MoonPhaseService;
    MockMoonPhaseMap = MoonPhaseMap;

  }));

describe('Moon Phase Service', function() {
  it("On September 28 expected full moon", function() {
        expect(sut.getMoonPhaseClass(+new Date("September 28, 2015")/1000)).toEqual("six");//full moon
  }); 

  it('On September 29 expected falling moon', function() {
        expect(sut.getMoonPhaseClass(+new Date("September 29, 2015")/1000)).toEqual("seven")
  });

  it('On September 5 expected first quater moon', function() {
        expect(sut.getMoonPhaseClass(+new Date("September 5, 2015")/1000)).toEqual("nine")
  });
    
  it('On September 13 expected new moon', function() {
        expect(sut.getMoonPhaseClass(+new Date("September 13, 2015")/1000)).toEqual("twelve"); 
   });

  it('On September 14 expected growing moon', function() {
        expect(sut.getMoonPhaseClass(+new Date("September 14, 2015")/1000)).toEqual("one");
   });

  it('On September 20 expected first quater moon', function() {
        expect(sut.getMoonPhaseClass(+new Date("September 20, 2015")/1000)).toEqual("three");
  });
  
  }) 
})
