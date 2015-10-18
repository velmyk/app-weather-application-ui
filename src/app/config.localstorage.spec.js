describe("LocalStorageService decorator", function () {
    var sut,
        mock_localStorageService;

    beforeEach(module("app"));

    beforeEach(inject(function (localStorageService) {
        sut = localStorageService;
    }));


    it("\'s get method should return second parameter if method returns undefined with first parameter", function () {
        sut.set('key', undefined);
        expect(sut.get('key', 'value')).toEqual('value');
    });

});
