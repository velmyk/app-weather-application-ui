"use strict";
/*angular.module('app', [])
  .service('sampleSvc', ['$window', 'modalSvc', function($window, modalSvc){
    this.showDialog = function(message, title){
      if(title){
        modalSvc.showModalDialog({
          title: title,
          message: message
        });
      } else {
        $window.alert(message);
      }
    };
  }]);

beforeEach(function(){
    module('app');
    module(function ($provide) {
        $provide.value('humidityClasses', humidityClasses);
    });
});*/

/*describe("the toBe Matcher", function() {
    it("should compare both types and values", function() {
      var actual = "123";    
      var expected = "123";
      
      expect(actual).toBe(expected);
    });  
});
*/

describe('app', function() {
  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(module('app'));

  describe('humidity service class', function() {
  // inject() is used to inject arguments of all given functions
 it('should provide a classes for Humidity-images', 
    inject(function(humidityClasses) {
      expect(humidityClasses).toBeDefined();
      expect(humidityClasses.low).toEqual('lowHumidity');
      expect(humidityClasses.medium).toEqual('mediumHumidity');
      expect(humidityClasses.high).toEqual('highHumidity');
    }));
  }) 
})
