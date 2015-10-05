describe('NavigationDots Controller', function(){
	var sut,
			$scope,
			$controller,
			$rootScope;

	beforeEach(module('app'));

	beforeEach(inject(function(_$controller_, _$rootScope_){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
	}));

	beforeEach(function() {
		$scope = $rootScope.$new();
		sut = $controller('NavigationDotsController', { $scope: $scope });
		$scope.vm = sut;
	});

	it('should change dot to display if day to show changes', function(){
		$scope.currentDay = 3;
		$scope.$digest();
		expect(sut.currentDot).toEqual(3);

		$scope.currentDay = 4;
		$scope.$digest();
		expect(sut.currentDot).toEqual(4);
	});

	it('should create array with empty elements', function() {

		$scope.days = 5;
		$scope.$digest();

		expect(sut.dotsNum).toEqual(jasmine.any(Array));
		expect(sut.dotsNum.length).toEqual(5);
	});

});



