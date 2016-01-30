angular
    .module('demoApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/bfast');

        $stateProvider
        //main routes
            .state('breakfast', {
                url: '/bfast',
                templateUrl: 'templates/bfast.html'
            })
            .state('lunch', {
                url: '/lunch',
                templateUrl: 'templates/lunch.html'
            })
            .state('dinner', {
                url: '/dinner',
                templateUrl: 'templates/dinner.html'
            })
            //child states
            .state('breakfast.indian', {
                url: '/indian',
                templateUrl: 'templates/bfast-indian.html'
            })
            .state('breakfast.english', {
                url: '/english',
                templateUrl: 'templates/bfast-english.html'
            })
            .state('lunch.chinese', {
                url: '/chinese',
                templateUrl: 'templates/lunch-chinese.html'
            })
            .state('lunch.italian', {
                url: '/italian',
                templateUrl: 'templates/lunch-italian.html'
            })
            .state('dinner.thai', {
                url: '/thai',
                templateUrl: 'templates/dinner-thai.html'
            })
            .state('dinner.indian', {
                url: '/indian',
                templateUrl: 'templates/dinner-indian.html'
            })
            .state('dinner.american', {
                url: '/american',
                templateUrl: 'templates/dinner-american.html'
            })

    })
