angular
    .module('demoApp')
    .controller('menuCtrl', function($scope, $state) {
        $scope.isActiveState = function (stateName) {
        	return $state.current.name == stateName;
        }
    });
