angular.module('taskApp', [])
    .controller('TasksCtrl', function() {
        this.tasks = [{
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

        this.getTaskClass = function (task) {
        	return {
        		critical: task.priority > 3,
        		normal: task.priority >=2 && task.priority <= 3,
        		trivial: task.priority == 1
        	}
        }

        this.increasePriority = function (task) {
            task.priority < 5 && task.priority++;
        }

        this.decreasePriority = function (task) {
            task.priority > 0 && task.priority--;
        }
    });
