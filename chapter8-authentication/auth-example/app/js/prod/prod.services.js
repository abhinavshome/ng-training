angular
    .module('shopApp.prod.services', [])
    .factory('ProdService', function($http, API_URL) {

    var urlBase = API_URL + '/products';
    var prodFactory = {};

    prodFactory.getProducts = function() {
        return $http.get(urlBase);
    };

    return prodFactory;
});
