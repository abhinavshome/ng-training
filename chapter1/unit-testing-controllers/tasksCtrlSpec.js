descriibe('Controller Test: TasksCtrl', function() {

    beforeEach(module('tasksApp'));

    var ctrl;
    beforeEach(inject(function($controller) {
        ctrl = $controller('TasksCtrl');
    }))

    it('should load default tasks', function() {
        expect(ctrl.tasks).toEqual([{
            id: 1,
            label: '1st task',
            priority: 3,
            assignee: 'Ram'
        }, {
            id: 2,
            label: '2nd task',
            priority: 2
        }, {
            id: 3,
            label: '3rd task',
            priority: 1,
            assignee: 'Shyam'
        }, {
            id: 4,
            label: '4th task',
            priority: 5,
            assignee: 'Mohan'
        }]);
    });

    it('should increase priority if required', function() {
        var task = {
            id: 1,
            label: '1st task',
            priority: 3,
            assignee: 'Ram'
        };

        ctrl.increasePriority(task);

        expect(task.priority).toEqual(4);
    });

    it('should not increase priority beyond 5', function() {
        var task = {
            id: 1,
            label: '1st task',
            priority: 5,
            assignee: 'Ram'
        };

        ctrl.increasePriority(task);

        expect(task.priority).toEqual(5);
    });

    it('should decrease priority if required', function() {
        var task = {
            id: 1,
            label: '1st task',
            priority: 3,
            assignee: 'Ram'
        };

        ctrl.decreasePriority(task);

        expect(task.priority).toEqual(2);
    });

    it('should not decrease priority below 0', function() {
        var task = {
            id: 1,
            label: '1st task',
            priority: 0,
            assignee: 'Ram'
        };

        ctrl.decreasePriority(task);

        expect(task.priority).toEqual(0);
    });
})
