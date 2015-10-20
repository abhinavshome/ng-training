angular
    .module('shopApp.auth.controllers', [])
    .controller('LoginCtrl', ['$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
        function($window, $location, UserAuthFactory, AuthenticationFactory) {
            var self = this;

            self.user = {
                username: 'admin',
                password: 'admin'
            };

            self.login = function() {

                var username = self.user.username,
                    password = self.user.password;

                if (username !== undefined && password !== undefined) {
                    UserAuthFactory.login(username, password).success(function(data) {

                        AuthenticationFactory.setAuth(true, data.user, data.token);
                        
                        $window.sessionStorage.token = data.token;
                        $window.sessionStorage.user = JSON.stringify(data.user); // to fetch the user details on refresh
                        
                        $location.path("/");

                    }).error(function(status) {
                        alert('Oops something went wrong!');
                    });
                } else {
                    alert('Invalid credentials');
                }

            };

        }
    ]);
