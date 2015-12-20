angular
    .module('todoApp', [])
    .controller('TodoCtrl', function($http, TodoService) {
        var self = this;

        function loadTodos() {
            TodoService
                .getAll()
                .then(function(response) {
                    self.todos = response.data;
                });
        }

        loadTodos();

        self.addTodo = function() {
            TodoService
                .add(self.newTodo)
                .then(function(response) {
                    loadTodos();
                });
        };

        self.editTodo = function(todo) {
            self.todoToEdit = angular.copy(todo);
        };

        self.updateTodo = function() {
            $http
                .put(url + self.todoToEdit.id, self.todoToEdit)
                .then(function(response) {
                    console.log('response after update call ', response);
                    loadTodos();
                });
        };

        self.deleteTodo = function(todo) {
            $http
                .delete(url + todo.id)
                .then(function(response) {
                    console.log('response after delete call ', response);
                    loadTodos();
                });
        };

    })
    .service('TodoService', function($http) {
        var url = 'http://localhost:3000/todo/';

        this.getAll = function() {
            return $http.get(url);
        }

        this.add = function (todo) {
            return $http.post(url, todo);
        }
    });
