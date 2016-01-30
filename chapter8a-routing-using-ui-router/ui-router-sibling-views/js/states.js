angular
    .module('demoApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('state1', {
                url: '/',
                views: {
                    header: {
                        template: '<div class="header">Header1</div>'
                    },
                    nav: {
                        templateUrl: 'templates/nav1.html',
                        controller: 'navCtrl'
                    },
                    body: {
                        templateUrl: 'templates/body.html',
                        controller: 'bodyCtrl'
                    },
                    footer: {
                        template: '<div class="footer">Footer1</div>'
                    },

                }
            })
            .state('state2', {
                url: '/url2',
                views: {
                    header: {
                        template: '<div class="header">Header2</div>'
                    },
                    nav: {
                        templateUrl: 'templates/nav2.html',
                        controller: 'navCtrl'
                    },
                    body: {
                        templateUrl: 'templates/body.html',
                        controller: 'bodyCtrl'
                    },
                    footer: {
                        template: '<div class="footer">Footer2</div>'
                    },

                }
            })
    })
