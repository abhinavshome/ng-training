angular
    .module('shopApp.auth.services', [])
    .factory('AuthService', function($window) {

        //load auth from local storage when service loads
        var auth = JSON.parse($window.sessionStorage.auth || "{}");

        return {
            isLoggedIn: function() {
                return auth.user != undefined;
            },
            getCurrentUser: function() {
                return auth.user;
            },
            setCurrentUser: function(user) {
                auth.user = user;
                $window.sessionStorage.auth = JSON.stringify(auth);
                console.log('set auth to', auth, 'sessionStorage ', $window.sessionStorage.auth);
            },
            getAuth: function () {
                return auth;
            },
            getToken: function() {
                return auth.token;
            },
            setToken: function(token) {
                auth.token = token;
                $window.sessionStorage.auth = JSON.stringify(auth);
            },
            logout: function() {
                auth.user = undefined;
                auth.token = undefined;
                $window.sessionStorage.auth = JSON.stringify(auth);
            },
            isAuthorised: function(access) {
                //if public url, everyone is authorised
                if(!access || !access.requiredLogin)
                    return true;

                //if login protected and aloowed to all roles, then allowed
                if(auth.user && access.allowedRoles == 'all')
                    return true;

                //if user has proper roles, only then allowed
                for (var i = 0; i < access.allowedRoles.length; i++) {
                    if (access.allowedRoles[i] == auth.user.role)
                        return true;
                }

                //no conditions met, so not allowed
                return false;

            }
        }

    })
    .factory('LoginService', function($location, $http, AuthService, BASE_URL) {
        return {
            login: function(user) {
                return $http.post(BASE_URL + '/login', user);
            },
            logout: function() {
                AuthService.logout();
                $location.path('/login');
            }
        }
    })
    .factory('TokenInterceptor', function($q, AuthService) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if (AuthService.getToken()) {
                    config.headers['X-Access-Token'] = AuthService.getToken();
                    // config.headers['X-Key'] = $window.sessionStorage.user;
                    // config.headers['Content-Type'] = "application/json";
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
