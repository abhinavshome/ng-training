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
                data: {
                    temp: 1
                },
                access: {
                    requiredLogin: false,
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
                controller: function() {

                },
                access: {
                    requiredLogin: false
                }
            }).
        otherwise({
            redirectTo: '/login'
        });
    })
    .run(function($rootScope, $location, AuthService) {
        $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
            //if not logged in and accessing a non public route, send to login page
            if(!AuthService.isLoggedIn() && nextRoute.access && nextRoute.access.requiredLogin) 
                $location.path('/login')

            //if not authorised to see a particular page, send to home
            if (!AuthService.isAuthorised(nextRoute.access)) {
                $location.path('/');
            }


        });

    });
