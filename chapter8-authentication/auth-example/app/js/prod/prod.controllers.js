angular
    .module('shopApp.prod.controllers', [])
    .controller("ProdCtrl", ['ProdService',
    function(ProdService) {
        var self = this;
        self.products = [];

        // Access the factory and get the latest products list
        ProdService.getProducts().then(function(data) {
        	console.log(data);
            self.products = data.data;
        });

    }
]);