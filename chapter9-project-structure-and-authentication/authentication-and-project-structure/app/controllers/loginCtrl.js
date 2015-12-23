angular
    .module('todoApp')
    .controller('LoginCtrl', function($http, AuthService, $routeParams) {
        var ctrl = this;
        ctrl.message = $routeParams.message;
        ctrl.user = {username: 'admin', password: 'admin'}
        this.login = function() {

            $http
                .post('http://localhost:3000/login', ctrl.user)
                .then(function(response) {
                    AuthService.setToken(response.data.token);
                    console.log('Login successful');
                });
        }
    })
