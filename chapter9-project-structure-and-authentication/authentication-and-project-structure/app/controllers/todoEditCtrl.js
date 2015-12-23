angular
    .module('todoApp')
    .controller('TodoEditCtrl', function(TodoService, $location, $routeParams) {

        var id = $routeParams.id;
        this.todoToEdit = TodoService.get(id);
        console.log(' => ', $routeParams.name);

        this.updateTodo = function() {
            console.log(this.todoToEdit)
            TodoService.update(angular.copy(this.todoToEdit));
            $location.path('/');
        };
    });
