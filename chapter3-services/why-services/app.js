// chapter3/why-services/app.js
angular.module('todoApp', [])
  .controller('todoCtrl', function () {
    
  })
  .controller('basicTodoCtrl', function($scope) {
    $scope.todos = [
      {id: 1, label: 'Item 0', deadline: 'Today'},
      {id: 2, label: 'Item 1', deadline: 'Tomorrow'}
    ];
    $scope.add = function() {
      $scope.todos.push({
        id: $scope.todos.length + 1,
        label: $scope.todo.label,
        deadline: 'Today'
      });
    };
  })
  .controller('advancedTodoCtrl', function($scope) {
    $scope.todos = [
      {id: 1, label: 'Item 0', deadline: 'Today'},
      {id: 2, label: 'Item 1', deadline: 'Tomorrow'}
    ];
    $scope.add = function() {
      $scope.todos.push({
        id: $scope.todos.length + 1,
        label: $scope.todo.label,
        deadline: $scope.todo.deadline
      });
    };
  })
;
