angular.module('demoApp', ['ui.router']);
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

angular
    .module('demoApp')
    .controller('bodyCtrl', function($scope, bodyStyle) {
        $scope.style = bodyStyle.getStyle();
        console.log('bye');
    });

angular
    .module('demoApp')
    .controller('navCtrl', function($scope, bodyStyle) {
        
        $scope.setSize = function(size) {
            bodyStyle.setSize(size);
        };

        $scope.setColor = function(color) {
            bodyStyle.setColor(color);
        };
    })

angular
    .module('demoApp')
    .service('bodyStyle', function() {
        var style = {};

        this.setSize = function(s) {
            style.size = s;
        };

        this.setColor = function(c) {
            style.color = c;
        };

        this.getStyle = function() {
            return style;
        };
    });
