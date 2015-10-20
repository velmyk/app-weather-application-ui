(function() { 
'use strict'; 
angular.module("app.config", [])

.constant("API_CONSTANTS", {
	"APIURL": "http://api.openweathermap.org/data/2.5/forecast",
	"APIKEY": "01fd2cb2e81a0044dad76f3cbaf09e5d"
})

;})();