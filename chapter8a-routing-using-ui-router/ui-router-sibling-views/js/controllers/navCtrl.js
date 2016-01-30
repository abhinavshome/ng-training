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
