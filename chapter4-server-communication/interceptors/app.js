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

        this.delete = function(todo) {
            return $http.delete(url + todo.id);
        };
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('loggingInterceptor');
    })
    .factory('loggingInterceptor', function() {
        return {
            request: function(request) {
                console.log('Request made with ', request);
                return request;
                // If an error, not allowed, or my custom condition, // return .reject('Not allowed');
            },
            requestError: function(rejection) {
                console.log('Request error due to ', rejection); // Continue to ensure that the next promise chain // sees an error
                return $q.reject(rejection);
                // Or handled successfully?
                // return someValue
            },
            response: function(response) {
                console.log('Response from server', response); // Return a promise
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log('Error in response ', rejection);
                // Continue to ensure that the next promise chain // sees an error
                // Can check auth status code here if need to
                // if (rejection.status === 403) {
                //   Show a login dialog
                //   return a value to tell controllers it has
                //   been handled
                // }
                // Or return a rejection to continue the
                // promise failure chain
                return $q.reject(rejection);
            }
        };
    });
