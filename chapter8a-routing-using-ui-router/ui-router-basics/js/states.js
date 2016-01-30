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
            });

        $urlRouterProvider.otherwise('/');

    });
