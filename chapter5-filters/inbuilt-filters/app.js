angular
    .module('filtersApp', [])
    .controller('filterCtrl', function($scope, lowercaseFilter) {
        $scope.amount = 1024;
        $scope.name = 'Micheal Jackson';
        $scope.obj = {
            test: 'value',
            num: 123
        };
        $scope.startTime = new Date().getTime();
        $scope.nameInLC = lowercaseFilter($scope.name);

    });
