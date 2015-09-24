(function () {
	"use strict";


angular
	.module("app")
	.service("MoonPhaseMap", MoonPhaseMap);


	function MoonPhaseMap() {
		var map = new Map();
		function getMoonPhaseMap(){
			
			map.set([1,2,3] , 'MoonPhaseOne' );
			map.set([4,5,6] , 'MoonPhaseTwo' );
			map.set([7,8], 'MoonPhaseThree' ); 
			map.set([9,10,11] , 'MoonPhaseFour');
			map.set([12,13,14] ,  'MoonPhaseFive');
			map.set([15,16] ,  'MoonPhaseSix'); 
			map.set([17,18] , 'MoonPhaseSeven'); 
			map.set([19,20] ,  'MoonPhaseEight');
			map.set([21,22] ,  'MoonPhaseNine'); 
			map.set([23,24,25] ,  'MoonPhaseTen' );
			map.set([26,27,28]	,  'MoonPhaseEleven');
			map.set([29,30] ,  'MoonPhaseTwelve'); 

			return map;
		}
				
	return {
				getMoonPhaseMap: getMoonPhaseMap
		};
}

})();