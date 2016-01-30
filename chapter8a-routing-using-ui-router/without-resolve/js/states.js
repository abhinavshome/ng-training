angular
    .module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/news');

        $stateProvider
            .state('news', {
                url: '/news',
                template: '<h1>Welcome to the news website</h1>'
            })
            .state('cricket', {
                url: '/cricket-news',
                controller: 'cricketCtrl',
                templateUrl: 'templates/cricket.html'
            })
    })