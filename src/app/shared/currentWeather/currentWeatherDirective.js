(function (  ) {
    'use strict';

    angular.module('app')
        .directive('currentWeather', currentWeather);

    function currentWeather() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                desc: "@"
            },
            controller: "currentWeatherCtrl",
            controllerAs: "ctrl",
            templateUrl: "shared/currentWeather/currentWeatherView.html",
        };
    }
})();