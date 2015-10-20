angular.module('shopApp', [
        'ngRoute',
        'shopApp.prod',
        'shopApp.auth',
        'shopApp.layout'
    ])
    .value('BASE_URL', 'http://localhost:3000')
    .value('API_URL', 'http://localhost:3000/api/v1')
    .config(function($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push('TokenInterceptor');

        $routeProvider
            .when('/login', {
                templateUrl: 'modules/auth/login.html',
                controller: 'LoginCtrl as loginCtrl',
                access: {
                    requiredLogin: false
                }
            }).when('/', {
                templateUrl: 'modules/layout/home.html',
                controller: 'HomeCtrl as homeCtrl',
                access: {
                    requiredLogin: true,
                    allowedRoles: ['user', 'admin']
                }
            }).when('/products', {
                templateUrl: 'modules/prod/products.html',
                controller: 'ProdCtrl as prodCtrl',
                access: {
                    requiredLogin: true,
                    allowedRoles: ['admin']
                }
            }).when('/about', {
                templateUrl: 'modules/layout/about.html',
                controller: function () {
                    
                },
                access: {
                    requiredLogin: true,
                    allowedRoles: ['user', 'admin']
                }
            }).
            otherwise({
                redirectTo: '/login'
            });
    })
    .run(function($rootScope, $window, $location, AuthenticationFactory) {
        // when the page refreshes, check if the user is already logged in
        var auth = AuthenticationFactory.check();

        $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
            console.log('==', nextRoute.access, auth);
            //handle public urls
            if (!nextRoute.access || nextRoute.access.requiredLogin == false)
                return;

            //handle protected urls
            if (nextRoute.access && nextRoute.access.requiredLogin) {
                //check authentication
                if (!auth.isLogged) {
                    $location.path("/login ");
                    console.log('You are not logged in, please login first');
                    return;
                }

                $rootScope.showMenu = auth.isLogged;

                //if allowedRoles not set, means its for all logged in users
                if (!nextRoute.access.allowedRoles)
                    return;

                //check authorization, if not authorized send to home
                if (!inArray(auth.user.role, nextRoute.access.allowedRoles)) {
                    console.log('You are not authorized to view this page');
                    $location.path('/')
                }
            }


            function inArray(val, arr) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) return true;
                }
                return false;
            }

            return;


            // if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged && !AuthenticationFactory.isAllowed(nextRoute)) {
            //     $location.path("/login");
            // } else {
            //     // check if user object exists else fetch it. This is incase of a page refresh
            //     if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
            //     if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
            // }
        });
        // $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
        //     $rootScope.showMenu = AuthenticationFactory.isLogged;
        //     $rootScope.role = AuthenticationFactory.userRole;
        //     // if the user is already logged in, take him to the home page
        //     if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
        //         $location.path('/');
        //     }
        // });

    });
