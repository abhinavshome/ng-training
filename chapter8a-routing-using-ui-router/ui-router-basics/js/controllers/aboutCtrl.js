angular
    .module('demoApp')
    .controller('aboutCtrl', function($scope) {
        $scope.title = 'About';

        $scope.routes = ['home', 'about'];
    })
