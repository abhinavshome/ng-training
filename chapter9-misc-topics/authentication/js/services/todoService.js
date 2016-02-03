angular
    .module('todoApp')
    .factory('TodoService', function() {
        var todos = [{
            id: 1,
            label: 'Fix bulb',
            priority: 3,
            done: false
        }, {
            id: 2,
            label: 'Bring milk',
            priority: 1,
            done: false
        }, {
            id: 3,
            label: 'Pay internet bill',
            priority: 4,
            done: true
        }, {
            id: 4,
            label: 'Clean kitchen',
            priority: 5,
            done: false
        }];

        return {
            list: function() {
                return todos;
            },
            get: function (id) {
                return todos[id - 1];
            },
            add: function(todo) {
                todo.id = todos.length + 1;
                todos.push(todo);
            },
            update: function (todo) {
                todos[todo.id - 1] = todo;
            }
        }
    });
