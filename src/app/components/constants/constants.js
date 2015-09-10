( function () {
	"use strict";

	angular
		.module("app")
		.constant("constants", {
			APIURL: "http://localhost:3637/api/weather",
			// APIURL: "http://YOUR_IP:3637/api/weather",
			APIKEY: "01fd2cb2e81a0044dad76f3cbaf09e5d"
		});
})();