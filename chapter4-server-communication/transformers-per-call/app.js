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

        //example response transformer
        this.getAll = function() {
            return $http.get(url, {
                transformResponse: function(data) {
                    data = JSON.parse(data);
                    console.log('data is ', data);
                    if (data) {
                        data.push({
                            id: 0,
                            label: 'dummy todo',
                            priority: 2,
                            done: true
                        })
                    }
                    return data;
                }
            });
        };

        //example request transformer
        this.add = function(todo) {
            return $http.post(url, todo, {
                transformRequest: function(data) {
                    if (data) {
                        data.done = false;
                        data.desc = 'modified from transformRequest';
                        return JSON.stringify(data);
                    }
                }
            });
        };

        this.update = function(todo) {
            return $http.put(url + todo.id, todo);
        };

        this.delete = function(todo) {
            return $http.delete(url + todo.id);
        };
    });
