angular
	.module('todoApp')    
    .controller('TodoAddCtrl', function(TodoService, $location) {
    	this.addTodo = function () {
    		TodoService.add(angular.copy(this.newTodo));
    		$location.path('/')
    	};
    });