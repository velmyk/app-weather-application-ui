( function () {
	"use strict";

	angular
		.module("app")


		.constant("constants", {
			TODAYSTR: "Today",
			TOMORROWSTR: "Tomorrow",
			CITIES_API_URL: "http://localhost:8888/api/city/search/",
			DEFAULT_CITY_ID: 703448
		})


		.constant("TIME_IN_SECONDS", {
			DAY: 86400,
			HOUR: 3600,
		})


		.constant("TIME_IN_MILISECONDS", {
			SEC: 1000
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
			},

			SYNC_CONFIG: {
				1: "disable",
				2: 14400000,
				3: 43200000
			}

		});

})();