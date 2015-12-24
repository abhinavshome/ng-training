angular
    .module('simpleApp', [])
    .controller('SimpleCtrl', function($location) {
        var self = this;
        self.navigate = function() {
            $location.path('/some/where/else');
        };
    });
