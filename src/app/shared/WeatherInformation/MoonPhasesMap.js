(function () {
	"use strict";


angular
	.module("app")
	.service("MoonPhaseMap", MoonPhaseMap);


	function MoonPhaseMap() {
		var m = new Map();
		function getMoonPhaseMap(){
			
			m.set([1,2,3] , 'MoonPhaseOne' );
			m.set([4,5,6] , 'MoonPhaseTwo' );
			m.set([7,8], 'MoonPhaseThree' ); 
			m.set([9,10,11] , 'MoonPhaseFour');
			m.set([12,13,14] ,  'MoonPhaseFive');
			m.set([15,16] ,  'MoonPhaseSix'); 
			m.set([17,18] , 'MoonPhaseSeven'); 
			m.set([19,20] ,  'MoonPhaseEight');
			m.set([21,22] ,  'MoonPhaseNine'); 
			m.set([23,24,25] ,  'MoonPhaseTen' );
			m.set([26,27,28]	,  'MoonPhaseEleven');
			m.set([29,30] ,  'MoonPhaseTwelve'); 

			return m;
		}
				
	return {
				getMoonPhaseMap: getMoonPhaseMap
		};
}

})();