(function() {
	"use strict";

	angular
		.module('app')
		.service('DigitsClockService', DigitsClockService);


	function DigitsClockService() {
		const secInOneHour = 60*60,
				secInOneMinute = 60,
				minInOneHour = 60,
				additionalDelay= 0.2,
				hoursInOneDay = 24;

		var initialSeconds = [],
			 initialMinutes = [],
			 hours12TimeFormatDigits = [],
			 hours24TimeFormatDigits = [],
			 secondsDigits = [],
			 minutesDigits = [],
			 hoursDigits = [];

		fillAll();

		function fillAll(){
			fillSecondsDigits();
			fillMinutesDigits();
			fill12HoursTimeFormatDigits();
			fill24HoursTimeFormatDigits();
		}

		function fillSecondsDigits(){
			for (var w = 0 ; w < secInOneMinute ; w++){
				if ( w < 10 ) initialSeconds.push("0" + w );
				else initialSeconds.push(w.toString());
			}
		}

		function fillMinutesDigits(){
			for (var w = 0 ; w < minInOneHour ; w++){
				if ( w < 10 ) initialMinutes.push("0" + w );
				else initialMinutes.push(w.toString());
			}
		}

		function fill12HoursTimeFormatDigits() {
			for (var w = 1 ; w < 13 ; w++){
				if ( w < 10 ) hours12TimeFormatDigits.push( "0" + w );
			else hours12TimeFormatDigits.push(w.toString());
			}
			hours12TimeFormatDigits = hours12TimeFormatDigits.concat(hours12TimeFormatDigits);
		}

		function fill24HoursTimeFormatDigits(){
			for ( var w = 0 ; w < hoursInOneDay ; w++){
				if ( w < 10 ) hours24TimeFormatDigits.push( "0" + w );
				else hours24TimeFormatDigits.push(w.toString());
			}
		}



		function getHoursForClock (date, flagForTimeConvention){
			_setHoursDigits(date, flagForTimeConvention);
			return hoursDigits;
		}

		function getMinutesForClock (date, flagForTimeConvention){
			_setMinutesDigits(date);
			return minutesDigits;
		}

		function getSecondsForClock (date, flagForTimeConvention){
			_setSecondsDigits(date);
			return secondsDigits;
		}

		function _setHoursDigits( date , flagForTimeConvention){
			var currentHours = date.getHours();
			hoursDigits = _changeValuesOrderInHoursArray(currentHours , flagForTimeConvention );
		}
		function _setMinutesDigits( date ){
			var currentMinutes=  date.getMinutes();
			minutesDigits = _changeValuesOrderInMinutesArray(currentMinutes);
		}
		function _setSecondsDigits( date ){
			var currentSeconds = date.getSeconds();
			secondsDigits = _changeValuesOrderInSecondsArray(currentSeconds);
		}
		
		function _changeValuesOrderInHoursArray(targetValue, flagForTimeConvention){
			var targetArray,
				 changedArray = [];

			targetArray = (flagForTimeConvention == "12hours") ? hours12TimeFormatDigits : hours24TimeFormatDigits;

			if (flagForTimeConvention=="12hours" && targetValue > 12) targetValue -= 12; 
			if (flagForTimeConvention=="12hours" && +targetValue === 0) targetValue = 1;

			for (var i = 0; i < targetArray.length; i++) {
				if (+targetArray[i] === targetValue) {
					changedArray = targetArray.slice(i);
					changedArray = changedArray.concat(targetArray.slice(0, i));
					changedArray.push(changedArray[0]);
					break;
				}
			}
			return changedArray;
		}

		function _changeValuesOrderInSecondsArray(targetValue ){
			var changedArray = [];

			for (var i = 0; i < initialSeconds.length; i++) {
				if (+initialSeconds[i] === targetValue) {
					changedArray = initialSeconds.slice(i);
					changedArray = changedArray.concat(initialSeconds.slice(0, i));
					break;
				}
			}
			return changedArray;
		}

		function _changeValuesOrderInMinutesArray(targetValue ){
			var changedArray = [];

			for (var i = 0; i < initialMinutes.length; i++) {
				if (+initialMinutes[i] === targetValue) {
					changedArray = initialMinutes.slice(i);
					changedArray = changedArray.concat(initialMinutes.slice(0, i));
					changedArray.push(changedArray[0]);
					break;
				}
			}
			return changedArray;
		}
		return {
			getHoursForClock: getHoursForClock,
			getMinutesForClock: getMinutesForClock,
			getSecondsForClock: getSecondsForClock
		};
	}
})();