"use strict";

describe('Moon Information Controller', function() {
    var sut,
        mockScope,
        mockClassValue = "MockClass",
        MockMoonPhaseService;

    beforeEach(module('app'));

    beforeEach(function(){
        module(function($provide){
            $provide.service('MoonPhaseService', function() {
                this.getMoonPhaseClass = jasmine.createSpy('getMoonPhaseClass').and.returnValue(mockClassValue);
            });
        });
    });

    beforeEach(inject(function(_$rootScope_, $controller, MoonPhaseService) {
        MockMoonPhaseService = MoonPhaseService;
        mockScope = _$rootScope_.$new();
        sut = $controller("MoonInformationController", { $scope: mockScope, 
                                                         MoonPhaseService: MockMoonPhaseService 
                                                        });
    }));


    it("should set moonPhaseClass equal to returned value from MoonPhaseService method from DateLabelService", function() {
        mockScope.$digest();
        expect(sut.moonPhaseClass).toEqual(mockClassValue);
    })
    it("should call MoonPhaseService with 'time' as an argument", function() {
        mockScope.$digest();
        expect(MockMoonPhaseService.getMoonPhaseClass).toHaveBeenCalledWith(mockScope.time);
    })

});