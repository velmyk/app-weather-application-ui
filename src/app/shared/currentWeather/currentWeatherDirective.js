(function (  ) {
    'use strict';

    angular.module('app')
        .directive('currentWeather', currentWeather);

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