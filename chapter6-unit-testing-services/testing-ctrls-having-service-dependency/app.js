angular
    .module('simpleApp', [])
    .controller('SimpleCtrl', ['$location', function($location) {
        var self = this;
        self.navigate = function() {
            $location.path('/some/where/else');
        };
    }]);
