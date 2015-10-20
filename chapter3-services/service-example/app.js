// chapter3/why-services/app.js
angular.module('todoApp', [])
    .controller('TodoCtrl', function() {

    })
    .controller('BasicTodoCtrl', function(TodoService) {
        var self = this;
        self.todos = TodoService.list();
        self.add = function() {
            self.todo.deadline = 'Today';
            TodoService.add(self.todo);
            self.todo = {};
        }
    })
    .controller('AdvancedTodoCtrl', function(TodoService) {
        var self = this;
        self.todos = TodoService.list();
        self.add = function() {
            TodoService.add(self.todo);
            self.todo = {};
        };
    })
    .controller('ViewTodoCtrl', function(TodoService) {
        var self = this;
        self.todos = TodoService.list();
    })
    .factory('TodoService', function(Todo) {
        console.log('TodoService called');
        var todos =  [];

        return {
            list: function() {
                return todos;
            },
            add: function(todo) {
                todo.id = todos.length + 1;
                todos.push(todo);
            }
        }
    })
   ]
;
