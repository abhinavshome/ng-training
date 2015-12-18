angular
    .module('shopApp.prod.controllers', [])
    .controller("ProdCtrl", ['ProdService',
    function(ProdService) {
        var self = this;
        self.products = [];

        ProdService.getProducts().then(function(data) {
            self.products = data.data;
        });

    }
]);