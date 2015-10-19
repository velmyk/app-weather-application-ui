(function() { 
'use strict'; 
angular.module("app.config", [])

.constant("API_CONSTANTS", {
	"APIURL": "http://localhost:8888/api/weather",
	"APIKEY": "01fd2cb2e81a0044dad76f3cbaf09e5d"
})

;})();