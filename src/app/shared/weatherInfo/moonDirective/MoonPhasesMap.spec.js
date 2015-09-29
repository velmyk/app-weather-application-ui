"use strict";
describe('app', function() {
  var sut;
  
  beforeEach(module('app'));
  beforeEach( inject(function(MoonPhaseMap) {

    sut = MoonPhaseMap;

  }));

  describe('moon service map', function() {
    it('should provide a map for moonPhase which consist of 12 key-values', 
    function() {
      var map=sut.getMoonPhaseMap();
      expect(map).toBeDefined();
      expect(map.size).toEqual(12);
    }); 
 })
})
