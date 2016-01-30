angular
    .module('demoApp')
    .controller('menuCtrl', function($scope, $state) {
        $scope.isActiveState = function (stateName) {
        	console.log($state.current.name, stateName);
        	return $state.current.name == stateName;
        }
    });
