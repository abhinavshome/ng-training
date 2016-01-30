describe('TaskCtrl Test', function () {
	beforeEach(module('taskApp'));

	var ctrl;
	beforeEach(inject(function ($controller) {
		ctrl = $controller('TasksCtrl');
	}));

	it('should contain some items', function () {
		expect(ctrl.tasks.length).toEqual(4);
	});
})