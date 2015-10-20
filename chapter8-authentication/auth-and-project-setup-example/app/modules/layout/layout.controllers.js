angular
    .module('shopApp.layout.controllers', [])
    .controller("HeaderCtrl", ['$location', 'UserAuthFactory', 'AuthenticationFactory',
        function($location, UserAuthFactory, AuthenticationFactory) {
            var self = this;
            self.isActive = function(route) {
                return route === $location.path();
            }

            self.logout = function() {
                UserAuthFactory.logout();
            }

            self.auth = AuthenticationFactory.getAuth();
        }
    ])
    .controller("HomeCtrl", [
        function() {
            this.name = "Home Controller";
        }
    ]);
