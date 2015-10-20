// chapter3/why-services/app.js
angular.module('todoApp', [])
  .controller('TodoCtrl', function () {
    
  })
  .controller('BasicTodoCtrl', function() {
    var self = this;
    self.todos = [
      {id: 1, label: 'Item 0', deadline: 'Today'},
      {id: 2, label: 'Item 1', deadline: 'Tomorrow'}
    ];
    self.add = function() {
      self.todos.push({
        id: self.todos.length + 1,
        label: self.todo.label,
        deadline: 'Today'
      });
    };
  })
  .controller('AdvancedTodoCtrl', function() {
    var self = this;
    self.todos = [
      {id: 1, label: 'Item 0', deadline: 'Today'},
      {id: 2, label: 'Item 1', deadline: 'Tomorrow'}
    ];
    self.add = function() {
      self.todos.push({
        id: self.todos.length + 1,
        label: self.todo.label,
        deadline: self.todo.deadline
      });
    };
  })
;
