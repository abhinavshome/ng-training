angular
    .module('userApp', [])
    .controller('userCtrl', function($scope) {
        $scope.countries = [{
            label: 'USA',
            id: 1,
            continent: 'America'
        }, {
            label: 'India',
            id: 2,
            continent: 'Asia'
        }, {
            label: 'China',
            id: 3,
            continent: 'Asia'
        }];

        $scope.submit = function() {
            console.log('User clicked submit with ', $scope.user);
        };
    });
