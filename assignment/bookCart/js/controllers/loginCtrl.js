angular
    .module('booksCart')
    .controller('LoginCtrl', function(AuthService, AlertService) {
        var ctrl = this;

        //prefill login form
        ctrl.user = {
            username: 'admin',
            password: 'admin'
        }

        ctrl.login = function() {
            AuthService
                .login(ctrl.user)
                .then(function(response) {
                    AlertService.success('Login successful');
                });
        }
    });
