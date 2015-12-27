angular
    .module('booksCart', ['ngRoute'])
    .run(function($rootScope, AlertService) {
        //clear alert message on every route change
        $rootScope.$on("$routeChangeStart", function(event, nextRoute, prevRoute) {
            AlertService.clear();
        })

    });
