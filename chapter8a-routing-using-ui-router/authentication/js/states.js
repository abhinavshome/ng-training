angular
    .module('demoApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            })
            .state('products', {
                url: '/products',
                templateUrl: 'templates/products.html',
                controller: 'productsCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })
            ;

        $urlRouterProvider.otherwise('/');

    });
