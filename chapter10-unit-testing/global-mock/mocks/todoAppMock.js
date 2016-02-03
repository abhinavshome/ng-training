angular
    .module('todoAppMock', [])
    .factory('todoService', [function() {
        return {
            list: function() {
                return [{
                    id: 1,
                    label: 'Mock'
                }];
            }
        };
    }]);
