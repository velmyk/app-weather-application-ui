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

			var m = getMoonPhase(new Date(weatherDate*1000));

			
			if(m >= 1 && m<=3){
				moonPhaseClass = MoonPhasesClasses["1"];
			}
			else if( m >=4 && m<=6){
				moonPhaseClass = MoonPhasesClasses["2"];
			}
			else if( m >= 7 && m<=8){
				moonPhaseClass = MoonPhasesClasses["3"];
			}
			else if( m >= 9 && m<=11){
				moonPhaseClass = MoonPhasesClasses["4"];
			}
			else if( m >= 12 && m<=14){
				moonPhaseClass = MoonPhasesClasses["5"];
			}
			else if( m >= 15 && m<=16){
				moonPhaseClass = MoonPhasesClasses["6"];
			}
			else if( m >= 17 && m<=19){
				moonPhaseClass = MoonPhasesClasses["7"];
			}
			else if( m >= 20 && m<=21){
				moonPhaseClass = MoonPhasesClasses["8"];
			}
			else if( m >= 22 && m<=23){
				moonPhaseClass = MoonPhasesClasses["9"];
			}
			else if( m >= 24 && m<=26){
				moonPhaseClass = MoonPhasesClasses["10"];
			}
			else if( m >= 27 && m<=28){
				moonPhaseClass = MoonPhasesClasses["11"];
			}
			else { 
				moonPhaseClass = MoonPhasesClasses["12"];
			}
			return moonPhaseClass;
		}


		return {
				getMoonPhaseClass: getMoonPhaseClass
		};
}

})();