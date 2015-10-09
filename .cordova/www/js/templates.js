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