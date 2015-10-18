angular
    .module('shopApp.prod.controllers', [])
    .controller("ProdCtrl", ['$scope', 'ProdService',
    function($scope, ProdService) {
        $scope.products = [];

        // Access the factory and get the latest products list
        ProdService.getProducts().then(function(data) {
        	console.log(data);
            $scope.products = data.data;
        });

    }
]);