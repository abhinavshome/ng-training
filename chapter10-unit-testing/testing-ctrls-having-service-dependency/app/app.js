angular
    .module('simpleApp', [])
    .controller('simpleCtrl', function($scope, $location) {
        $scope.navigate = function() {
            $location.path('/some/where/else');
        };
    });
