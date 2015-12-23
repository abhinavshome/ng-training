angular
	.module('todoApp')    
    .controller('TodoSummaryCtrl', function(TodoService) {
        this.todos = TodoService.list();
    });