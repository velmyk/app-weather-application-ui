(function() {
	"use strict";

	angular
		.module('app')
		.service('ClockService', ClockService);


	function ClockService($timeout) {
		const secInOneHour = 60*60;
		const secInOneMinute = 60;
		const hoursInOneDay = 24;
		const secInOneDay = 86400;
		const milliseconds = 1000;

		var time = {};
		time.currentTime = new Date();

		var tomorrow = new Date(time.currentTime.getFullYear(), time.currentTime.getMonth(),time.currentTime.getDate()+1);
		
		var timeUntilTomorrow = tomorrow - time.currentTime;

		$timeout(_handlerForTomorrow, timeUntilTomorrow);

		function _handlerForTomorrow(){
			setCurrentTime();
			$timeout(setCurrentTime, secInOneDay*milliseconds);
		}
		
		var timeToSwitch;

		if( time.currentTime.getHours() >= 0 && time.currentTime.getHours() < 12){
			timeToSwitch = new Date(time.currentTime.getFullYear(), time.currentTime.getMonth(),time.currentTime.getDate(), 12);
		}
		else {
			timeToSwitch = new Date(time.currentTime.getFullYear(), time.currentTime.getMonth(),time.currentTime.getDate()+1);
		}

		var timeUntillSwitch = timeToSwitch - time.currentTime;



		
		$timeout(_handlerSwitch, timeUntillSwitch);

		function _handlerSwitch(){
			setCurrentTime();
			$timeout(setCurrentTime, secInOneDay*milliseconds/2);
		}

		function setCurrentTime(){
			//time.currentTime = new Date(2015,1,2,0,0,0);
			time.currentTime = new Date();
		}

		function getCurrentTime(){
			return time;
		}

		// Array for storing values from 00 to 59 which will be used as minutes and seconds in css-clock 
		var secondsDigits = [];
		
		for (var w = 0 ; w < secInOneMinute ; w++){
			if ( w < 10 ) secondsDigits.push("0" + w );
			else secondsDigits.push(w.toString());
		}
		//copy of the minutes array
		var minutesDigits = secondsDigits.slice();

		//Array for storing values from 00 to 12 which will be used for 12-hour clock
		var hours12TimeFormatDigits = [];

		for ( w = 1 ; w < 13 ; w++){
			if ( w < 10 ) hours12TimeFormatDigits.push( "0" + w );
			else hours12TimeFormatDigits.push(w.toString());
		}
		hours12TimeFormatDigits = hours12TimeFormatDigits.concat(hours12TimeFormatDigits);
		
		//Array for storing values from 00 to 23 which will be used for 24-hour clock
		var hours24TimeFormatDigits = [];

		for ( w = 0 ; w < hoursInOneDay ; w++){
			if ( w < 10 ) hours24TimeFormatDigits.push( "0" + w );
			else hours24TimeFormatDigits.push(w.toString());
		}

		function _changeValuesOrderInArray(targetArray , targetValue, flagForClock){
			var changedArray = [];
			if (flagForClock=="12hours" && targetValue > 12) targetValue -= 12; 
			if (flagForClock=="12hours" && +targetValue === 0) targetValue = 1;

			for (var i = 0; i < targetArray.length; i++) {
				if (+targetArray[i] === targetValue) {
					changedArray = targetArray.slice(i);
					changedArray = changedArray.concat(targetArray.slice(0, i));
					if(flagForClock == "minutes") {
						changedArray.push(changedArray[0]);
					}
					else if(flagForClock == "12hours") {
						changedArray.push(changedArray[0]);
					}
					else if(flagForClock == "24hours") {
						changedArray.push(changedArray[0]);
					}
					break;
				}
			}
			return changedArray;
		}
			
			
		var digits ={
				hours: [],
				minutes : [],
				seconds: []
			};	

		function _setDigits(flagForTimeConvention){
			var hoursDigits;
			if ( flagForTimeConvention == "12hours" ) {
				hoursDigits = hours12TimeFormatDigits;
			}
			else {
				hoursDigits = hours24TimeFormatDigits;
			}

			var currentHours = time.currentTime.getHours();
			var currentMinutes=  time.currentTime.getMinutes();
			var currentSeconds = time.currentTime.getSeconds();

			digits.hours = _changeValuesOrderInArray (hoursDigits, currentHours, flagForTimeConvention);
			digits.minutes = _changeValuesOrderInArray (minutesDigits, currentMinutes, "minutes");
			digits.seconds = _changeValuesOrderInArray (secondsDigits, currentSeconds, "seconds");
		}

		var timeDelaysForAnimations={};

		function getDigitsForClock (flagForTimeConvention){
			 _setDigits(flagForTimeConvention);
			 _setTimesDelay();
			return digits;
		}

		function _setTimesDelay (){
			timeDelaysForAnimations.minutesDelay = secInOneMinute - digits.seconds[0] +0.2;
			timeDelaysForAnimations.hoursDelay= secInOneHour - digits.minutes[0]*secInOneMinute - digits.seconds[0]+0.2;
		} 

		function getTimeDelaysForAnimations() {
			return timeDelaysForAnimations;
		}

		return {
			getCurrentTime: getCurrentTime,
			getDigitsForClock: getDigitsForClock,
			getTimeDelaysForAnimations: getTimeDelaysForAnimations
		};
	}
})();