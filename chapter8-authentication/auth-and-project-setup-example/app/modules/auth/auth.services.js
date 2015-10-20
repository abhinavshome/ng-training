angular
    .module('shopApp.auth.services', [])
    .factory('AuthenticationFactory', function($window) {
        var auth = {
            isLogged: false,
            user: undefined,
            token: undefined
        }

        return {
            getAuth: function () {
                return auth;
            },
            check: function() {
                if ($window.sessionStorage.token && $window.sessionStorage.user) {
                    auth.isLogged = true;
                    console.log($window.sessionStorage.user);
                    auth.user = JSON.parse($window.sessionStorage.user);
                    auth.token = $window.sessionStorage.token;
                } else {
                    auth.isLogged = false;
                    delete auth.user;
                    delete auth.token;
                }
                return auth;
            },
            setAuth: function (isLogged, user, token) {
                auth.isLogged = isLogged;
                auth.user = user;
                auth.token = token;
            }
        }

    })
    .factory('UserAuthFactory', function($window, $location, $http, AuthenticationFactory, BASE_URL) {
        return {
            login: function(username, password) {
                return $http.post(BASE_URL + '/login', {
                    username: username,
                    password: password
                });
            },
            logout: function() {
                var auth = AuthenticationFactory.getAuth();
                if (auth.isLogged) {

                    auth.isLogged = false;
                    delete auth.user;
                    delete auth.userRole;

                    delete $window.sessionStorage.token;
                    delete $window.sessionStorage.user;
                    delete $window.sessionStorage.userRole;

                    $location.path("/login");
                }

            }
        }
    })
    .factory('TokenInterceptor', function($q, $window) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers['X-Access-Token'] = $window.sessionStorage.token;
                    config.headers['X-Key'] = $window.sessionStorage.user;
                    config.headers['Content-Type'] = "application/json";
                }
                return config || $q.when(config);
            },

            response: function(response) {
                //console.log('a response from server', response);
                return response || $q.when(response);
            }
        };
    });

//     factory('MyLoggingInterceptor', ['$q', function($q) { return {
// request: function(config) {
// console.log('Request made with ', config);
// return config;
// // If an error, not allowed, or my custom condition, // return $q.reject('Not allowed');
// },
// requestError: function(rejection) {
// console.log('Request error due to ', rejection); // Continue to ensure that the next promise chain // sees an error
// return $q.reject(rejection);
//       // Or handled successfully?
//       // return someValue
// },
// response: function(response) {
// console.log('Response from server', response); // Return a promise
// return response || $q.when(response);
// },
// responseError: function(rejection) {
// console.log('Error in response ', rejection);
// // Continue to ensure that the next promise chain // sees an error
// // Can check auth status code here if need to
// // if (rejection.status === 403) {
//       //   Show a login dialog
//       //   return a value to tell controllers it has
//       //   been handled
//       // }
//       // Or return a rejection to continue the
//       // promise failure chain
// return $q.reject(rejection); }
// }; }])
