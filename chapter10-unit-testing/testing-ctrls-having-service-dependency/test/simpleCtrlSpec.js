describe("simpleCtrl Test", function () {
	
	beforeEach(module('simpleApp'));

	var location, scope = {};
	beforeEach(inject(function ($location, $controller) {
		location = $location;
		$controller('simpleCtrl', { $scope: scope});
	}));

	it('should have navigate away when clicked', function () {
		location.path('/here');
		scope.navigate();
		expect(location.path()).toEqual('/some/where/else');
	})

} )