angular
    .module('serverApp', [])
    .controller('mainCtrl', function($scope, $http) {
        $scope.items = [];
        $scope.errorMessage = '';
        $http.get('/api/note').then(function(response) {

            $scope.items = response.data;

        }, function(errResponse) {
            $scope.errorMessage = errResponse.data.msg;
        });
    });
