angular
    .module('todoAppMock', [])
    .factory('TodoService', [function() {
        return {
            list: function() {
                return [{
                    id: 1,
                    label: 'Mock'
                }];
            }
        };
    }]);
