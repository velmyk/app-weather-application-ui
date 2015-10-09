angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/home/homeView.html","<div class=\" container-fluid\" ng-class=\"home.getBgClass(home.time.displayTime)\" style=\"height:100vh\">\r\n	<div class=\"location-container\">\r\n		<div class=\'location-gear\'>\r\n			<a ui-sref=\"settings\">\r\n				<img src=\"svg/cogweel.svg\" class=\"wheel\" alt=\"gearwheel\" /> \r\n			</a>\r\n		</div>\r\n		<location class=\"current-location\" data-time=\"{{home.time.displayTime}}\"></location>\r\n	</div>\r\n	<div class=\"weather-state-container\">\r\n		<temperature data-time=\"{{home.time.displayTime}}\"></temperature>\r\n		<div class=\"row\" ng-swipe-left=\"home.plusDay()\" ng-swipe-right=\"home.minusDay()\">\r\n			<navigation-arrow data-direction=\"left\" class=\"col-xs-2 arrow-left\" ng-click=\"home.minusDay()\"></navigation-arrow>\r\n			<current-weather data-time=\"{{home.time.displayTime}}\" class=\"col-xs-8 weather-wrapper\"></current-weather>\r\n			<navigation-arrow data-direction=\"right\" class=\"col-xs-2 arrow-right\" ng-click=\"home.plusDay()\"></navigation-arrow>\r\n			<navigation-dots data-current-day=\"{{home.time.displayDay}}\" data-days=\"{{home.time.maxDays}}\"></navigation-dots>\r\n		</div>\r\n		<div class=\"row other-info\">\r\n			<humidity-information class=\"col-xs-4\" data-time=\"{{home.time.displayTime}}\"></humidity-information>\r\n			<wind-information class=\"col-xs-4\" data-time=\"{{home.time.displayTime}}\"></wind-information>  \r\n			<moon-information class=\"col-xs-4\" data-time=\"{{home.time.displayTime}}\"></moon-information>  \r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("components/settings/settingsView.html","<div class=\"container-fluid settings\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-2\">\r\n			<a ui-sref=\"home\">\r\n				<img src=\"svg/cogweel.svg\" class=\"wheel\" alt=\"gearwheel\" /> \r\n			</a>\r\n		</div>\r\n		<div class=\"col-xs-8 settings-title\">\r\n			Settings\r\n		</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<settings-switcher data-title=\"Show day as:\" data-init=\"{{settings.displayDay}}\"></settings-switcher>\r\n		<settings-switcher data-title=\"Days to show:\" data-init=\"{{settings.daysToDisplay}}\" class=\"max-days-settings\"></settings-switcher>\r\n		<settings-switcher data-title=\"Sync period:\" data-init=\"{{settings.syncPeriod}}\" class=\"max-days-settings\"></settings-switcher>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("shared/currentWeather/currentWeatherView.html","<div>\r\n	<div>\r\n		<div>\r\n			<!--current weather icon-->\r\n			<div class=\"weatherIcon\">\r\n					<div ng-class=\"\'main \'+ weatherCtrl.mainImageClass\" >	</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n		<!--weather description-->\r\n	<div class=\"weather\">\r\n		{{weatherCtrl.desc}}\r\n	</div>\r\n</div>\r\n");
$templateCache.put("shared/locationLabel/locationView.html","<div >\r\n	<div class=\'col-xs-12 current-location-title\'>{{locationCtrl.time | date:\'dd-MM-yy\'}} in <span class=\"current-location-title__city\">{{locationCtrl.city}} </span></div>	\r\n</div>\r\n\r\n");
$templateCache.put("shared/navigationArrow/navigationArrowView.html","<div>\r\n	<img ng-src=\"{{navArrowCtrl.arrowImg}}\" class=\"arrow\">\r\n</div>\r\n");
$templateCache.put("shared/navigationDots/navigationDotsView.html","<div class=\"row\">\r\n	<div class=\"col-xs-12\">\r\n		<ul class=\"nav-dots\" >\r\n			<li ng-repeat=\"dot in navDotsCtrl.dotsNum track by $index\" data-dot-number=\"{{$index}}\">\r\n				<div ng-class=\"({{$index}} == navDotsCtrl.currentDot) ? \'nav-dot-active\' : \'nav-dot\'\"></div>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n</div>\r\n\r\n");
$templateCache.put("shared/settingsSwitcher/settingsSwitcherView.html","<div>\r\n	<div class=\"row settings-item\">\r\n		<div class=\"row settings-item-title\">{{switcher.title}}</div>\r\n		<div class=\"row settings-item-controlls btn-group\" role=\"group\">\r\n			<label ng-repeat=\"button in switcher.buttons\"\r\n 						 class=\"btn btn-default settings-item-controlls-button\"\r\n 						 ng-class=\"(switcher.settingsKeyValue == button.value) ? \'settings-item-controlls-button-active\' : \'\'\">\r\n  			<input  class=\"settings-item-controlls-radio\"\r\n  							ng-model=\"switcher.settingsKeyValue\"\r\n  							type=\"radio\"\r\n  							value=\"{{button.value}}\">\r\n  						{{button.title}}\r\n  		</label>\r\n  		</div>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("shared/temperature/temperatureView.html","<div >\r\n	<div class=\"col-xs-12\">\r\n				<div class=\"temperature-value\">{{tempCtrl.temperatureNow}}<sup><sup><sup><sub><sub><sub><b>o</b></sub></sub></sub></sup></sup></sup>\r\n				</div>\r\n				<div class=\"day-night\">\r\n					<span ng-if=\"tempCtrl.isNight\" class=\"day-night-shift\">Day</span>\r\n					<span ng-if=\"tempCtrl.isDay\" class=\"day-night-shift\">Night</span>\r\n					<span class=\"temperature-minor\">{{tempCtrl.closestForecast}}</span>\r\n				</div>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("shared/weatherInfo/humidityDirective/humidityInfoView.html","<div>\r\n	<div>\r\n		<div class=\"humidity-value\">{{humidInfoCtrl.humidity}}</div>\r\n	</div>\r\n	<div>\r\n		<div class=\"humidity-img\" ng-class=\"humidInfoCtrl.humidityClass\"></div>\r\n	</div>\r\n</div>");
$templateCache.put("shared/weatherInfo/moonDirective/moonInformationView.html","<div >\r\n	<div >\r\n		<div class=\"moon-value\">Moon</div>\r\n	</div>\r\n	<div >\r\n		<div class=\"moon-img\" ng-class=\"moonInfoCtrl.moonPhaseClass\"></div>\r\n	</div>\r\n</div>");
$templateCache.put("shared/weatherInfo/windInfoDirective/windInformationView.html","<div >\r\n	<div>\r\n		<div class=\"wind-value\">{{windInfoCtrl.wSpeed}}</div>\r\n	</div>\r\n	<div >\r\n		<img src=\"svg/wind.svg\" ng-style=\"{\'transform\': \'rotate(\'+windInfoCtrl.wDegree+\'deg)\'}\" alt=\"wind\" class=\"wind-img\" />\r\n	</div>\r\n</div>");}]);
'use strict';

(function () {
	"use strict";

	angular.module('app', ['templates', 'ui.router', 'ngTouch', 'LocalStorageModule', 'angular-loading-bar']);
})();
"use strict";

(function () {
	"use strict";

	angular.module('app').config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state("home", {
			url: "/home",
			templateUrl: "components/home/homeView.html",
			controller: "HomeController",
			controllerAs: 'home',
			resolve: {
				loadForecast: ["OpenWeatherAPI", function (OpenWeatherAPI) {
					return OpenWeatherAPI.loadForecast();
				}]
			}
		}).state("settings", {
			url: "/settings",
			templateUrl: "components/settings/settingsView.html",
			controller: "SettingsController",
			controllerAs: "settings"
		});
	}]);
})();
"use strict";

(function () {
	"use strict";

	angular.module('app').config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
		cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-preloader">Weather App</div>';
	}]);
})();
"use strict";

(function () {
	"use strict";

	angular.module('app').config(["localStorageServiceProvider", function (localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('ls');
	}]);
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("OpenWeatherAPI", OpenWeatherAPI);

	function OpenWeatherAPI($http, constants) {
		var cityID = 703448,
		    city = {},
		    windForecast = {},
		    humidityForecast = {},
		    temperatureForecast = {},
		    weatherStateForecast = {};

		function fetchResponse(response) {
			city.name = response.data.city.name;

			response.data.list.forEach(function (item, i) {
				temperatureForecast[item.dt] = item.main.temp;
				humidityForecast[item.dt] = item.main.humidity;
				windForecast[item.dt] = {
					speed: item.wind.speed,
					degree: item.wind.deg
				};
				weatherStateForecast[item.dt] = {
					id: item.weather[0].id,
					desc: item.weather[0].description,
					state: item.weather[0].main
				};
			});
		}

		function loadForecast() {
			return $http({
				url: constants.APIURL,
				method: "GET",
				params: {
					id: cityID,
					units: "metric",
					APPID: constants.APIKEY
				}
			}).then(fetchResponse);
		}

		return {
			loadForecast: loadForecast,
			windForecast: windForecast,
			humidityForecast: humidityForecast,
			temperatureForecast: temperatureForecast,
			weatherStateForecast: weatherStateForecast,
			city: city
		};
	}
	OpenWeatherAPI.$inject = ["$http", "constants"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("WeatherService", WeatherService);

	function WeatherService($http, constants, OpenWeatherAPI) {
		var hourAndHalf = 5400,
		    halfADay = 43200,
		    windForecast = OpenWeatherAPI.windForecast,
		    humidityForecast = OpenWeatherAPI.humidityForecast,
		    temperatureForecast = OpenWeatherAPI.temperatureForecast,
		    weatherStateForecast = OpenWeatherAPI.weatherStateForecast,
		    city = OpenWeatherAPI.city;

		function findClosestVal(current, forecast) {
			var diff;
			for (var dt in forecast) {
				diff = dt - current;
				if (diff >= 0 && diff <= hourAndHalf) {
					return forecast[dt];
				}
			}
		}

		function getCity() {
			return city.name;
		}

		function getTemp(date) {
			return Math.round(findClosestVal(date, temperatureForecast));
		}

		function getHumidity(date) {
			return findClosestVal(date, humidityForecast);
		}

		function getWindSpeed(date) {
			return findClosestVal(date, windForecast).speed;
		}

		function getWindDirection(date) {
			return findClosestVal(date, windForecast).degree;
		}

		function getWeatherId(date) {
			return findClosestVal(date, weatherStateForecast).id;
		}

		function getWeatherState(date) {
			return findClosestVal(date, weatherStateForecast).state;
		}

		function getWeatherDesc(date) {
			return findClosestVal(date, weatherStateForecast).desc;
		}

		function getClosestTemp(date) {
			var closestDate = +date + halfADay;
			return getTemp(closestDate);
		}

		return {
			getCity: getCity,
			getTemp: getTemp,
			getHumidity: getHumidity,
			getWindSpeed: getWindSpeed,
			getWindDirection: getWindDirection,
			getWeatherDesc: getWeatherDesc,
			getWeatherState: getWeatherState,
			getClosestTemp: getClosestTemp,
			getWeatherId: getWeatherId
		};
	}
	WeatherService.$inject = ["$http", "constants", "OpenWeatherAPI"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").constant("constants", {
		APIURL: "/api/weather",
		APIKEY: "01fd2cb2e81a0044dad76f3cbaf09e5d",
		TODAYSTR: "Today",
		TOMORROWSTR: "Tomorrow",
		MILISEC_IN_SEC: 1000
	}).constant("TIME_IN_SECONDS", {
		DAY: 86400
	}).constant("SETTINGS", {
		DISPLAY_DAY_TYPE: {
			settingsKey: "dayDisplayType",
			buttons: [{
				value: "1",
				title: "Date"
			}, {
				value: "2",
				title: "Weekday"
			}]
		},
		DISPLAY_DAY_AMOUNT: {
			settingsKey: "daysToDisplay",
			buttons: [{
				value: 3,
				title: 3
			}, {
				value: 4,
				title: 4
			}, {
				value: 5,
				title: 5
			}]
		},
		SYNC_PERIOD: {
			settingsKey: "syncPeriod",
			buttons: [{
				value: 1,
				title: "Off"
			}, {
				value: 2,
				title: "4hrs"
			}, {
				value: 3,
				title: "12hrs"
			}]
		}

	});
})();
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {
	"use strict";

	angular.module("app").factory("WeatherClassService", WeatherClassService);

	function WeatherClassService(WeatherClassesMap, WeatherService) {
		var map = WeatherClassesMap.getWeatherClassesMap(),
		    mainWeatherClass,
		    weatherId,
		    backgroundColor;

		function getBgClass(displayTime) {
			weatherId = WeatherService.getWeatherId(displayTime);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var key = _step$value[0];
					var value = _step$value[1];

					if (key.test(weatherId)) {

						backgroundColor = value;
						break;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return backgroundColor;
		}

		function getWeatherIconClass(displayTime) {

			weatherId = WeatherService.getWeatherId(displayTime);

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _step2$value = _slicedToArray(_step2.value, 2);

					var key = _step2$value[0];
					var value = _step2$value[1];

					if (key.test(weatherId)) {

						mainWeatherClass = value;
						break;
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
						_iterator2["return"]();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return mainWeatherClass;
		}

		return {
			getBgClass: getBgClass,
			getWeatherIconClass: getWeatherIconClass
		};
	}
	WeatherClassService.$inject = ["WeatherClassesMap", "WeatherService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").value("WeatherClasses", {
		thunder: 'thunder',
		drizzle: 'drizzle',
		lightRain: 'lightRain',
		heavyRain: 'heavyRain',
		freezingRain: 'freezingRain',
		snow: 'snow',
		clearSky: 'clearSky',
		fewClouds: 'fewClouds',
		scatteredClouds: 'scatteredClouds',
		overcastClouds: 'overcastClouds',
		mist: 'mist',
		tornado: 'tornado'
	});
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("WeatherClassesMap", WeatherClassesMap);

	function WeatherClassesMap(WeatherClasses) {
		var map = new Map();
		var thunderPattern = /^2|^90[1,2,5,6]|^95[^1-4]|^96/;
		var drizzlePattern = /^3/;
		var lightRainPattern = /^50[0-1]$/;
		var heavyRainPattern = /(^50[2-4]$)|(^5[2-3][0-9]$)/;
		var freezingRainPattern = /(511)|(^61)/;
		var snowPattern = /(^60)|(^62)/;
		var clearSkyPattern = /800|904|951/;
		var fewCloudsPattern = /801|^95[2-4]/;
		var scatteredCloudsPattern = /80[2,3,4]|903/;
		var overcastCloudsPattern = /804/;
		var mistPattern = /^7[0-7]/;
		var tornado = /900|781/;

		function getWeatherClassesMap() {

			map.set(thunderPattern, WeatherClasses.thunder);
			map.set(drizzlePattern, WeatherClasses.drizzle);
			map.set(lightRainPattern, WeatherClasses.lightRain);
			map.set(heavyRainPattern, WeatherClasses.heavyRain);
			map.set(freezingRainPattern, WeatherClasses.freezingRain);
			map.set(snowPattern, WeatherClasses.snow);
			map.set(clearSkyPattern, WeatherClasses.clearSky);
			map.set(fewCloudsPattern, WeatherClasses.fewClouds);
			map.set(scatteredCloudsPattern, WeatherClasses.scatteredClouds);
			map.set(overcastCloudsPattern, WeatherClasses.overcastClouds);
			map.set(mistPattern, WeatherClasses.mist);
			map.set(tornado, WeatherClasses.tornado);

			return map;
		}

		return {
			getWeatherClassesMap: getWeatherClassesMap
		};
	}
	WeatherClassesMap.$inject = ["WeatherClasses"];
})();
'use strict';

(function () {
	"use strict";

	angular.module('app').controller('HomeController', HomeController);

	function HomeController($scope, WeatherService, WeatherClassService, TimeTrackingService) {
		/*jshint validthis:true */
		var vm = this;

		vm.time = TimeTrackingService.time;

		TimeTrackingService.initTime();

		vm.getBgClass = WeatherClassService.getBgClass;

		vm.city = WeatherService.getCity();

		vm.plusDay = TimeTrackingService.plusDay;
		vm.minusDay = TimeTrackingService.minusDay;
	}
	HomeController.$inject = ["$scope", "WeatherService", "WeatherClassService", "TimeTrackingService"];
})();
'use strict';

(function () {
	"use strict";

	angular.module('app').controller('SettingsController', SettingsController);

	function SettingsController(SETTINGS) {

		var vm = this;

		vm.displayDay = SETTINGS.DISPLAY_DAY_TYPE;
		vm.daysToDisplay = SETTINGS.DISPLAY_DAY_AMOUNT;
		vm.syncPeriod = SETTINGS.SYNC_PERIOD;
	}
	SettingsController.$inject = ["SETTINGS"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("CurrentWeatherCtrl", CurrentWeatherCtrl);

	function CurrentWeatherCtrl($scope, WeatherService, WeatherClassService) {
		/*jshint validthis:true */
		var vm = this;
		$scope.$watch('time', refreshData);

		function refreshData() {
			vm.desc = WeatherService.getWeatherDesc($scope.time);
			vm.main = WeatherService.getWeatherState($scope.time);
			vm.mainImageClass = WeatherClassService.getWeatherIconClass($scope.time);
		}
	}
	CurrentWeatherCtrl.$inject = ["$scope", "WeatherService", "WeatherClassService"];
})();
'use strict';

(function () {
    'use strict';

    angular.module('app').directive('currentWeather', currentWeather);

    function currentWeather() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                time: "@"
            },
            controller: "CurrentWeatherCtrl",
            controllerAs: "weatherCtrl",
            templateUrl: "shared/currentWeather/currentWeatherView.html"
        };
    }
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("DateLabelService", DateLabelService);

	function DateLabelService(constants, localStorageService) {

		var weekDay = {
			0: "Sunday",
			1: "Monday",
			2: "Tuesday",
			3: "Wednesday",
			4: "Thursday",
			5: "Friday",
			6: "Saturday"
		};

		function getTimeLabel(timestamp) {
			var miliseconds = 1000,
			    day = 24 * 60 * 60 * 1000;

			var scopeTime = new Date(timestamp * miliseconds),
			    today = new Date(),
			    dayDisplayType = localStorageService.get("dayDisplayType") || 1;

			scopeTime.setHours(0, 0, 0, 0);
			today.setHours(0, 0, 0, 0);

			if (+scopeTime == +today) {
				return constants.TODAYSTR;
			} else if (+scopeTime == +today + day) {
				return constants.TOMORROWSTR;
			}

			if (dayDisplayType == 1) {
				return scopeTime;
			} else {
				return weekDay[scopeTime.getDay()];
			}
		}

		return {
			getTimeLabel: getTimeLabel
		};
	}
	DateLabelService.$inject = ["constants", "localStorageService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("LocationController", LocationController);

	function LocationController($scope, constants, WeatherService, DateLabelService) {
		/*jshint validthis:true */

		var vm = this;

		vm.city = WeatherService.getCity();
		vm.time = DateLabelService.getTimeLabel($scope.time);

		$scope.$watch("time", refreshData);

		function refreshData() {
			vm.time = DateLabelService.getTimeLabel($scope.time);
		}
	}
	LocationController.$inject = ["$scope", "constants", "WeatherService", "DateLabelService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("location", currentLocation);

	function currentLocation() {

		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "LocationController",
			controllerAs: "locationCtrl",
			templateUrl: "shared/locationLabel/locationView.html"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").factory("NavigationArrowService", NavigationArrowService);

	function NavigationArrowService() {

		function arrowImg(direction) {
			return direction === "left" ? "svg/z-arrow-left.svg" : "svg/z-arrow-right.svg";
		}

		return {
			arrowImg: arrowImg
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("NavigationArrowController", NavigationArrowController);

	function NavigationArrowController($scope, NavigationArrowService) {
		/*jshint validthis:true */
		var vm = this;
		vm.arrowImg = NavigationArrowService.arrowImg($scope.direction);
	}
	NavigationArrowController.$inject = ["$scope", "NavigationArrowService"];
})();
'use strict';

(function () {
	"use strict";

	angular.module('app').directive('navigationArrow', navigationArrow);

	function navigationArrow() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				time: "=",
				direction: "@"
			},
			controller: "NavigationArrowController",
			controllerAs: "navArrowCtrl",
			templateUrl: "shared/navigationArrow/navigationArrowView.html"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("NavigationDotsController", NavigationDotsController);

	function NavigationDotsController($scope) {
		/*jshint validthis:true */
		var vm = this;

		vm.dotsNum = new Array(+$scope.days);

		$scope.$watch('currentDay', refreshData);

		function refreshData() {
			vm.currentDot = $scope.currentDay;
		}
	}
	NavigationDotsController.$inject = ["$scope"];
})();
'use strict';

(function () {
	"use strict";

	angular.module('app').directive('navigationDots', navigationDots);

	function navigationDots() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				currentDay: "@",
				days: "@"
			},
			controller: "NavigationDotsController",
			controllerAs: "navDotsCtrl",
			templateUrl: "shared/navigationDots/navigationDotsView.html"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("SettingsSwitcherController", SettingsSwitcherController);

	function SettingsSwitcherController($scope, SettingsSwitcherService, localStorageService) {
		var vm = this,
		    init = JSON.parse($scope.init);

		vm.title = $scope.title;
		vm.settingsKey = init.settingsKey;
		vm.settingsKeyValue = localStorageService.get(vm.settingsKey) || 1;
		vm.buttons = init.buttons;
		vm.setValue = SettingsSwitcherService.setSettings;

		$scope.$watch("switcher.settingsKeyValue", function () {
			localStorageService.set(vm.settingsKey, vm.settingsKeyValue);
		});
	}
	SettingsSwitcherController.$inject = ["$scope", "SettingsSwitcherService", "localStorageService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").factory("SettingsSwitcherService", SettingsSwitcherService);

	function SettingsSwitcherService(localStorageService) {

		function setSettings($event) {
			var key = $event.target.attributes["data-settings-key"].value,
			    value = $event.target.attributes["data-settings-value"].value;

			localStorageService.remove(key);
			localStorageService.set(key, value);
		}

		return {
			setSettings: setSettings
		};
	}
	SettingsSwitcherService.$inject = ["localStorageService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("settingsSwitcher", settingsSwitcher);

	function settingsSwitcher() {
		return {
			restrict: "E",
			scope: {
				title: "@",
				init: "@"
			},
			replace: true,
			controller: "SettingsSwitcherController",
			controllerAs: "switcher",
			templateUrl: "shared/settingsSwitcher/settingsSwitcherView.html"
		};
	}
})();
"use strict";

(function () {
  "use strict";

  angular.module("app").factory("DayNightService", DayNightService);

  function DayNightService(constants) {

    function isNight(date) {
      var dayPart = new Date(date * constants.MILISEC_IN_SEC).getHours();
      return !(dayPart > 6 && dayPart < 22);
    }

    function isDay(date) {
      return !isNight(date);
    }

    return {
      isDay: isDay,
      isNight: isNight
    };
  }
  DayNightService.$inject = ["constants"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("TemperatureController", TemperatureController);

	function TemperatureController($scope, WeatherService, DayNightService) {
		/*jshint validthis:true */

		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData() {
			vm.temperatureNow = WeatherService.getTemp($scope.time);
			vm.closestForecast = WeatherService.getClosestTemp($scope.time);
			vm.isDay = DayNightService.isDay($scope.time);
			vm.isNight = DayNightService.isNight($scope.time);
		}
	}
	TemperatureController.$inject = ["$scope", "WeatherService", "DayNightService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("temperature", tempForecast);

	function tempForecast() {
		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			templateUrl: "shared/temperature/temperatureView.html",
			controller: "TemperatureController",
			controllerAs: "tempCtrl"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").factory("TimeTrackingService", TimeTrackingService);

	function TimeTrackingService(TIME_IN_SECONDS, localStorageService) {

		var time = {};

		function initTime() {
			time.now = 1441875600;
			time.displayTime = 1441875600;
			time.displayDay = 0;
			time.maxDays = getMaxDays();
		}

		function getMaxDays() {
			return localStorageService.get("daysToDisplay") || 5;
		}

		function plusDay() {
			if (time.displayDay < time.maxDays - 1) {
				time.displayDay++;
				time.displayTime = calculateTime(time.displayDay);
			}
		}

		function minusDay() {
			if (time.displayDay > 0) {
				if (time.displayDay === 1) {
					time.displayDay--;
					time.displayTime = time.now;
				} else {
					time.displayDay--;
					time.displayTime = calculateTime(time.displayDay);
				}
			}
		}

		function calculateTime(days) {
			return new Date((time.now + days * TIME_IN_SECONDS.DAY) * 1000).setHours(15) / 1000;
		}

		return {
			initTime: initTime,
			time: time,
			minusDay: minusDay,
			plusDay: plusDay
		};
	}
	TimeTrackingService.$inject = ["TIME_IN_SECONDS", "localStorageService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("HumidityInformationController", HumidityInformationController);

	function HumidityInformationController($scope, WeatherService, HumidityService) {
		/*jshint validthis:true */
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData() {
			vm.humidity = WeatherService.getHumidity($scope.time);
			vm.humidityClass = HumidityService.getHumidityClass(vm.humidity);
		}
	}
	HumidityInformationController.$inject = ["$scope", "WeatherService", "HumidityService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("HumidityService", HumidityService);

	function HumidityService(humidityClasses) {

		var humidityClass;

		function getHumidityClass(humidity) {
			if (humidity < 72) {
				humidityClass = humidityClasses.low;
			} else if (humidity < 82) {
				humidityClass = humidityClasses.medium;
			} else {
				humidityClass = humidityClasses.high;
			}
			return humidityClass;
		}

		return {
			getHumidityClass: getHumidityClass
		};
	}
	HumidityService.$inject = ["humidityClasses"];
})();
"use strict";

(function () {
	"use strict";
	angular.module("app").value("humidityClasses", {
		low: 'lowHumidity',
		medium: 'mediumHumidity',
		high: 'highHumidity'
	});
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("humidityInformation", humidityInformation);

	function humidityInformation() {
		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "HumidityInformationController",
			controllerAs: "humidInfoCtrl",
			templateUrl: "shared/weatherInfo/humidityDirective/humidityInfoView.html"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("MoonInformationController", MoonInformationController);

	function MoonInformationController($scope, MoonPhaseService) {
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData() {
			vm.moonPhaseClass = MoonPhaseService.getMoonPhaseClass($scope.time);
		}
	}
	MoonInformationController.$inject = ["$scope", "MoonPhaseService"];
})();
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {
	"use strict";

	angular.module("app").service("MoonPhaseService", MoonPhaseService);

	function MoonPhaseService(MoonPhaseMap) {

		function getMoonPhase(weatherDate) {

			var year = weatherDate.getFullYear();
			var month = weatherDate.getMonth() + 1;
			var day = weatherDate.getDate();
			var lp = 2551443;
			var now = new Date(year, month - 1, day, 20, 35, 0);
			var new_moon = new Date(1970, 0, 7, 20, 35, 0);
			var phase = (now.getTime() - new_moon.getTime()) / 1000 % lp;
			return Math.floor(phase / (24 * 3600)) + 1;
		}

		var phase;
		var moonPhaseClass;
		var map = MoonPhaseMap.getMoonPhaseMap();
		function getMoonPhaseClass(weatherDate) {
			phase = getMoonPhase(new Date(weatherDate * 1000));

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				label: for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var key = _step$value[0];
					var value = _step$value[1];

					for (var i = 0; i < key.length; i++) {
						if (key[i] == phase) {
							moonPhaseClass = value;
							break label;
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return moonPhaseClass;
		}

		return {
			getMoonPhaseClass: getMoonPhaseClass
		};
	}
	MoonPhaseService.$inject = ["MoonPhaseMap"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").service("MoonPhaseMap", MoonPhaseMap);

	function MoonPhaseMap() {
		var map = new Map();
		function getMoonPhaseMap() {

			map.set([1, 2, 3], 'MoonPhaseOne');
			map.set([4, 5, 6], 'MoonPhaseTwo');
			map.set([7, 8], 'MoonPhaseThree');
			map.set([9, 10, 11], 'MoonPhaseFour');
			map.set([12, 13, 14], 'MoonPhaseFive');
			map.set([15, 16], 'MoonPhaseSix');
			map.set([17, 18], 'MoonPhaseSeven');
			map.set([19, 20], 'MoonPhaseEight');
			map.set([21, 22], 'MoonPhaseNine');
			map.set([23, 24, 25], 'MoonPhaseTen');
			map.set([26, 27, 28], 'MoonPhaseEleven');
			map.set([29, 30], 'MoonPhaseTwelve');

			return map;
		}

		return {
			getMoonPhaseMap: getMoonPhaseMap
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("moonInformation", moonInformation);

	function moonInformation() {
		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "MoonInformationController",
			controllerAs: "moonInfoCtrl",
			templateUrl: "shared/weatherInfo/moonDirective/moonInformationView.html"
		};
	}
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").controller("WindInformationController", WindInformationController);

	function WindInformationController($scope, WeatherService) {
		var vm = this;

		$scope.$watch('time', refreshData);

		function refreshData() {
			vm.wSpeed = WeatherService.getWindSpeed($scope.time);
			vm.wDegree = WeatherService.getWindDirection($scope.time);
		}
	}
	WindInformationController.$inject = ["$scope", "WeatherService"];
})();
"use strict";

(function () {
	"use strict";

	angular.module("app").directive("windInformation", windInformation);

	function windInformation() {
		return {
			restrict: "E",
			replace: true,
			scope: {
				time: "@"
			},
			controller: "WindInformationController",
			controllerAs: "windInfoCtrl",
			templateUrl: "shared/weatherInfo/windInfoDirective/windInformationView.html"
		};
	}
})();
//# sourceMappingURL=all.js.map