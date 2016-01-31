angular
    .module('userApp', [])
    .controller('userCtrl', function($scope) {
        $scope.submit = function() {
            console.log('User clicked submit with ', $scope.user);
        };
    });
