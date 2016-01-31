angular
    .module('taskApp', [])
    .controller('tasksCtrl', function($scope) {
        $scope.tasks = [{
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
        }, ];

        $scope.getTaskClass = function (task) {
        	return {
        		critical: task.priority > 3,
        		normal: task.priority >=2 && task.priority <= 3,
        		trivial: task.priority == 1
        	}
        }
    });
