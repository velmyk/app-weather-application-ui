(function () {
	"use strict";


angular
	.module("app")
	.service("MoonPhaseCounter", MoonPhaseCounter);


	function MoonPhaseCounter(MoonPhasesClasses) {
		
		function getMoonPhase(weatherDate) {

			var year = weatherDate.getFullYear();
			var month = weatherDate.getMonth()+1;
			var day = weatherDate.getDate();
			var lp = 2551443; 
			var now = new Date(year,month-1,day,20,35,0);
			var new_moon = new Date(1970, 0, 7, 20, 35, 0);
			var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;

			return Math.floor(phase /(24*3600)) + 1;

		}

		function getMoonPhaseClass(weatherDate){
			var moonPhaseClass;

			var phase = getMoonPhase(new Date(weatherDate*1000));

			var m = new Map();
		
			m.set([1,2,3] , MoonPhasesClasses["1"]);
			m.set([4,5,6] , MoonPhasesClasses["2"]);
			m.set([7,8], MoonPhasesClasses["3"]); 
			m.set([9,10,11] , MoonPhasesClasses["4"]);
			m.set([12,13,14] ,  MoonPhasesClasses["5"]);
			m.set([15,16] ,  MoonPhasesClasses["6"]); 
			m.set([17,18] , MoonPhasesClasses["7"]); 
			m.set([19,20] ,  MoonPhasesClasses["8"]);
			m.set([21,22] ,  MoonPhasesClasses["9"]); 
			m.set([23,24,25] ,  MoonPhasesClasses["10"]);
			m.set([26,27,28]	,  MoonPhasesClasses["11"]);
			m.set([29,30] ,  MoonPhasesClasses["12"]); 

			label:for (var [key, value] of m) {
						for(var i=0; i<key.length; i++){
							if(key[i] == phase){
								moonPhaseClass = value;
								break label;
							}
						}
					}
				return moonPhaseClass;
			}

		return {
				getMoonPhaseClass: getMoonPhaseClass
		};
}

})();