describe("SimpleCtrl Test", function () {
	
	beforeEach(module('simpleApp'));

	var location, ctrl;
	beforeEach(inject(function ($location, $controller) {
		location = $location;
		ctrl = $controller('SimpleCtrl');
	}));

	it('should have navigate away when clicked', function () {
		location.path('/here');
		ctrl.navigate();
		expect(location.path()).toEqual('/some/where/else');
	})

} )