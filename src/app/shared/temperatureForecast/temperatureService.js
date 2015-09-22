(function() {
  "use strict";

  angular
    .module("app")
      .factory("Daynight", Daynight);

  function Daynight() {

    function isNight(date){
      var dayPart = (new Date(date * 1000)).getHours();
      if ((dayPart > 6) && (dayPart < 22)) {
        return false;
      } else {
        return true;
      }
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