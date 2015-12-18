angular
    .module('shopApp.layout.controllers', [])
    .controller("HeaderCtrl", function(AuthService, $location, $rootScope) {
        var self = this;
        self.isActive = function(route) {
            return route === $location.path();
        }

        self.logout = function() {
            AuthService.logout();
            self.currentUser = undefined;
            $rootScope.showMenu = false;
            $location.path('/login');
        }

        self.auth = AuthService.getAuth();
        console.log(self.auth);
    })
    .controller("HomeCtrl", function() {
            this.name = "Home Controller";
        }
    );
