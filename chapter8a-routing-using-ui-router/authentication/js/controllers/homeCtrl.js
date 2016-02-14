angular
    .module('demoApp')
    .controller('homeCtrl', function($scope, $location) {
        $scope.title = 'Home';

        $scope.goToAbout = function () {
        	$location.path('/about');
        }
    })
