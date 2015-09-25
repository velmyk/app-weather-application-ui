(function() {
  "use strict";

  angular
    .module("app")
      .factory("DayNightService", DayNightService);

  function DayNightService(constants) {

    function isNight(date){
      var dayPart = (new Date(date * constants.MILISEC_IN_SEC)).getHours();
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