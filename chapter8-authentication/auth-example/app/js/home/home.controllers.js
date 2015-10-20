angular
    .module('shopApp.home.controllers', [])
    .controller("HeaderCtrl", ['$scope', '$location', 'UserAuthFactory',
        function($scope, $location, UserAuthFactory) {

            $scope.isActive = function(route) {
                return route === $location.path();
            }

            $scope.logout = function() {
                UserAuthFactory.logout();
            }
        }
    ])
    .controller("HomeCtrl", ['$scope',
        function($scope) {
            $scope.name = "Home Controller";
        }
    ]);
