angular
    .module('todoApp', ['ngRoute'])
    //Uncomment to start front end authentication

    // .run(function($rootScope, $location, AuthService) {
    //     $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
    //         if (!AuthService.getToken() && nextRoute.loginRequired) {
    //             event.preventDefault();
    //             $rootScope.$evalAsync(function() {
    //                 $location.path('/login').search({message: 'Please login first!!!'});
    //             });
    //         }
    //     });
    // });
