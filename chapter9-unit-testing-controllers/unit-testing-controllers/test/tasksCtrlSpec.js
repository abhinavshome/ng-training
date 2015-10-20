describe('Controller Test: TasksCtrl', function() {

    beforeEach(module('taskApp'));

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

    it("should increase priority when increase btn clicked", function () {
        
    });
});
