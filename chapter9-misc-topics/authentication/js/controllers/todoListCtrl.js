angular
    .module('todoApp')
    .controller('TodoListCtrl', function(TodoService, $location) {
        this.todos = TodoService.list();

        this.editTodo = function (todo) {
        	$location.path('/todo/edit/' + todo.id);
        }
    });
