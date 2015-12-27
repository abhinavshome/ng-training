angular
    .module('booksCart')
    .service('AuthService', function($http) {

        var url = 'http://localhost:3000/login',
            authData = {};

        this.login = function(user) {
            return $http
                .post(url, user)
                .then(function(response) {
                	console.log('setting token', response.data.token);
                    authData.token = response.data.token;
                    return response; //return for next success callback
                });
        };

        this.getToken = function () {
        	return authData.token;
        };

        this.getAuth = function () {
            return authData;
        };

        this.isLoggedIn = function () {
            return authData.token !== undefined;
        };

        this.logout = function () {
            authData.token = undefined;
        };


    })
