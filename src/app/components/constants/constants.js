( function () {
	"use strict";

	angular
		.module("app")
		.constant("constants", {
			APIURL: "/api/weather",
			// APIURL: "http://localhost:8080/api/weather",
			APIKEY: "01fd2cb2e81a0044dad76f3cbaf09e5d"
		});
})();