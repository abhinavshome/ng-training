angular
    .module('demoApp')
    .controller('bodyCtrl', function($scope, bodyStyle) {
        $scope.style = bodyStyle.getStyle();
    });
