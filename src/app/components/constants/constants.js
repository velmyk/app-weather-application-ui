( function () {
	"use strict";

	angular
		.module("app")
		.constant("constants", {
			APIURL: "/api/weather",
			APIKEY: "01fd2cb2e81a0044dad76f3cbaf09e5d",
			TODAYSTR: "Today",
			TOMORROWSTR: "Tomorrow"
		});
})();