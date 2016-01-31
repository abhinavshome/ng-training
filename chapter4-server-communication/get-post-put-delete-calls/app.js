angular
    .module('todoApp', [])
    .controller('todoCtrl', function($scope, todoService) {

        function loadTodos() {
            todoService
                .getAll()
                .then(function(response) {
                    $scope.todos = response.data;
                });
        }

        loadTodos();

        $scope.addTodo = function() {
            todoService
                .add($scope.newTodo)
                .then(function(response) {
                    loadTodos();
                });
        };

        $scope.editTodo = function(todo) {
            $scope.todoToEdit = angular.copy(todo);
        };

        $scope.updateTodo = function() {
            todoService
                .update($scope.todoToEdit)
                .then(function(response) {
                    console.log('response after update call ', response);
                    loadTodos();
                });
        };

        $scope.deleteTodo = function(todo) {
            todoService
                .delete(todo)
                .then(function(response) {
                    console.log('response after delete call ', response);
                    loadTodos();
                });
        };

    })
    .service('todoService', function($http) {
        var url = 'http://localhost:3000/todo/';

        this.getAll = function() {
            return $http.get(url);
        };

        this.add = function(todo) {
            return $http.post(url, todo);
        };

        this.update = function(todo) {
            return $http.put(url + todo.id, todo);
        };

        this.delete = function (todo) {
            return $http.delete(url + todo.id);
        };
    });
