(function() {
  "use strict";

  angular
    .module("app")
      .factory("DayNightService", DayNightService);

  function DayNightService(TIME_IN_MILISECONDS) {

    function isNight(date){
      var dayPart = (new Date(date * TIME_IN_MILISECONDS.SEC)).getHours();
      return !((dayPart > 6) && (dayPart < 22));
    }

    function isDay(date){
      return !isNight(date);
    }

    return {
      isDay : isDay,
      isNight : isNight,
    };
  }

})();