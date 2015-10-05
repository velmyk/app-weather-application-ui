'use strict';

describe('UI-Router ("app" module)', function () {

  var $rootScope,
      $location,
      $state,
      $injector;

  beforeEach(module('app'));

  beforeEach(function(){

    module(function($provide){

      $provide.service('OpenWeatherAPI', function() {
          this.loadForecast = jasmine.createSpy('loadForecast').and.returnValue({data: 'data'});
      });

      // $provide.provider('DeviceTypeService', function() {

      //   this.$get = function() {
      //     var isTablet = jasmine.createSpy('isTablet').and.returnValue(true);

      //     return {
      //       isTablet: isTablet
      //     };
      //   };
      // });

    });
    
  });

    // //Getting reference of the provider
    // var DeviceTypeServiceProvider;

    // module(function(_DeviceTypeServiceProvider_) {
    //   DeviceTypeServiceProvider = _DeviceTypeServiceProvider_;
    // });

    // module(function($provide) {
    //   $provide.service('DeviceTypeService', function() {
    //     this.isTablet = jasmine.createSpy('isTablet').and.returnValue(true);
        
    //   });
    // });

    // var DeviceTypeService;

    // inject(function(_DeviceTypeService_) {
    //   DeviceTypeService = _DeviceTypeService_;
    // });


  beforeEach(inject(function( _$rootScope_, _$location_, _$state_, _$injector_){

    $rootScope = _$rootScope_;
    $location = _$location_;
    $state = _$state_;
    $injector = _$injector_;

  }));

  describe('on /settings', function () {

    it('should go to the settings state', function () {
      $location.url('/settings');
      $rootScope.$digest();
      expect($state.current.name).toEqual('settings');
      expect($state.current.templateUrl).toEqual('components/settings/settingsView.html');
      expect($state.current.controller).toEqual('SettingsController');
    });

  });

  describe('on /home', function () {

    var state = 'home';

    it('should go to the home state', function () {
      $location.url('/home');
      $rootScope.$digest();
      expect($state.current.name).toEqual('home');
      expect($state.current.controller).toEqual('HomeController');
    });

    // describe('should show', function(){

    //   it('mobile view if width <= 639', function () {
    //     $state.go(state);
    //     $rootScope.$digest();
    //     expect($state.current.templateUrl).toEqual('components/home/homeView.html');
    //   });

    //   it('tablet view if width > 639', function () {
    //     $state.go(state);
    //     $rootScope.$digest();
    //     expect($state.current.templateUrl).toEqual('components/home/homeTabletView.html');
    //   });
    // });

    it('should resolve OpenWeatherAPI.loadForecast', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
      expect($injector.invoke($state.current.resolve.loadForecast)).toEqual({data: 'data'});
    });

  });

  describe('with otherwise url', function () {

    it('should go to the home state', function () {
      $location.url('someNonExistentUrl');
      $rootScope.$digest();
      expect($state.current.name).toEqual('home');
    });

    it('should change the url to "/home"', function () {
      $location.url('someNonExistentUrl');
      $rootScope.$digest();
      expect($location.url()).toEqual('/home');
    });

  });

});