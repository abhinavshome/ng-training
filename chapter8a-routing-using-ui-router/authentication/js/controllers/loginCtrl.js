angular
    .module('demoApp')
    .controller('loginCtrl', function($scope, $http, authService) {
        $scope.login = function() {
            $http
                .post('http://localhost:3000/login', $scope.user)
                .then(function(response) {
                    console.log('Login successful!!', response);
                    authService.setToken(response.data.token);
                });
        }
    })
