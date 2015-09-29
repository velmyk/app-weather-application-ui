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
		})
		.constant("SETTINGS", {
			DISPLAY_DAY_TYPE: {
				settingsKey: "dayDisplayType",
				buttons: [
					{
						value: "1",
						title: "Date"
					},
					{
						value: "2",
						title: "Weekday"
					}
				]
			},
			DISPLAY_DAY_AMOUNT: {
				settingsKey: "daysToDisplay",
				buttons: [
					{
						value: 3,
						title: 3
					},
					{
						value: 4,
						title: 4
					},
					{
						value: 5,
						title: 5
					}
				]
			},
			SYNC_PERIOD: {
				settingsKey: "syncPeriod",
				buttons: [
					{
						value: 1,
						title: "Off"
					},
					{
						value: 2,
						title: "4hrs"
					},
					{
						value: 3,
						title: "12hrs"
					}
				]
			}

		});

})();