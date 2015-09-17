( function() {
	"use strict";

	angular
		.module("app")
		.service("DateLabel", DateLabel);

	function DateLabel(){

		function convertTime(timestamp) {
			var miliseconds = 1000,
				scopeTime = new Date(timestamp * miliseconds),
				today = new Date(),
				tomorrow = new Date(today);

			tomorrow.setDate(today.getDate()+1);

			scopeTime.setHours(0,0,0,0);
			today.setHours(0,0,0,0);
			tomorrow.setHours(0,0,0,0);

			if ( +scopeTime == +today) {
				return "Today";
			} else if (+scopeTime == +tomorrow) {
				return "Tomorrow";
			} else {
				return scopeTime.getDate() + "/" + 
					   scopeTime.getMonth() + "/" +
					   scopeTime.getFullYear().toString().substr(2,2);
			}

		}

		return {
			convertTime: convertTime
		};
	}
})();