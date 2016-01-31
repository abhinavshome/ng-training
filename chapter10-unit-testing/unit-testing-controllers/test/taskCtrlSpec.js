describe('TaskCtrl Test', function () {
	beforeEach(module('taskApp'));

	var scope = {};
	beforeEach(inject(function ($controller) {
		$controller('taskCtrl', {$scope: scope});
	}));

	it('should contain some items', function () {
		expect(scope.tasks.length).toEqual(4);
	});

	it('should have getTasksClass method working fine', function () {
		var classObject = scope.getTaskClass({priority: 5});
		expect(classObject.critical).toEqual(true);
		var classObject = scope.getTaskClass({priority: 1});
		expect(classObject.trivial).toEqual(true);
		var classObject = scope.getTaskClass({priority: 3});
		expect(classObject.normal).toEqual(true);
	});

	it('should increase priority properly', function () {
		var todo = {priority: 1};
		scope.decreasePriority(todo);
		expect(todo.priority).toEqual(1);

		todo = {priority: 3};
		scope.decreasePriority(todo);
		expect(todo.priority).toEqual(2);
	})

	it('should decrease priority properly', function () {
		var todo = {priority: 1};
		scope.increasePriority(todo);
		expect(todo.priority).toEqual(2);

		todo = {priority: 5};
		scope.increasePriority(todo);
		expect(todo.priority).toEqual(5);
	})
})