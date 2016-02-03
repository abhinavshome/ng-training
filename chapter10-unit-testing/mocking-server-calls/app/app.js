angular
    .module('serverApp', [])
    .controller('mainCtrl', function($scope, $http) {
        $scope.items = [];
        $scope.errorMessage = '';
        $http.get('/api/note').then(function(response) {

            $scope.items = response.data.map(function(n) {
                return n.label;
            });

        }, function(errResponse) {
            $scope.errorMessage = errResponse.data.msg;
        });
    });
