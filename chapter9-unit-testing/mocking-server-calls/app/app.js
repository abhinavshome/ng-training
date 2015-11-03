angular
    .module('todoApp', [])
    .factory('TodoService', [function() {
        var items = [{
            id: 1,
            label: 'Item 0'
        }, {
            id: 2,
            label: 'Item 1'
        }];
        return {
            list: function() {
                return items;
            },
            add: function(item) {
                items.push(item);
            }
        };
    }])
    .controller('TodoCtrl', ['TodoService', function(TodoService) {
        var self = this;
        self.items = TodoService.list();
    }]);
