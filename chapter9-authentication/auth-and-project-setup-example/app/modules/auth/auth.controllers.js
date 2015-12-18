angular
    .module('shopApp.auth.controllers', [])
    .controller('LoginCtrl', function($location, LoginService, AuthService, $rootScope) {
        var self = this;

        self.login = function() {
            LoginService
                .login(self.user)
                .then(function(response) {
                        
                        AuthService.setCurrentUser(response.data.user);
                        AuthService.setToken(response.data.token);
                        $location.path("/");
                    },
                    function(response) {
                        AuthService.logout();
                        console.log(response);
                    }
                );
        };

    });
