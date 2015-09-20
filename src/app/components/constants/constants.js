( function () {
	"use strict";

	angular
		.module("app")
		.constant("constants", {
			APIURL: "/api/weather",
			APIKEY: "01fd2cb2e81a0044dad76f3cbaf09e5d",
			TODAYSTR: "Today",
			TOMORROWSTR: "Tomorrow",
			MILISEC_IN_SEC: 1000
		})
		.constant("TIME_IN_SECONDS", {
			DAY: 86400
		});
})();