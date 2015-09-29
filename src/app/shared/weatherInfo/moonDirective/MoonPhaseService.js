(function () {
	"use strict";


angular
	.module("app")
	.service("MoonPhaseService", MoonPhaseService);


	function MoonPhaseService( MoonPhaseMap ) {
		
		function getMoonPhase( weatherDate ) {

			var year = weatherDate.getFullYear();
			var month = weatherDate.getMonth()+1;
			var day = weatherDate.getDate();
			var lp = 2551443; 
			var now = new Date(year,month-1,day,20,35,0);
			var new_moon = new Date(1970, 0, 7, 20, 35, 0);
			var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;
			return Math.floor(phase /(24*3600)) + 1;
		}

		var phase;
		var moonPhaseClass;
		var map = MoonPhaseMap.getMoonPhaseMap();
		function getMoonPhaseClass( weatherDate ){
			phase = getMoonPhase(new Date(weatherDate*1000));

			label:for (var [key, value] of map) {
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