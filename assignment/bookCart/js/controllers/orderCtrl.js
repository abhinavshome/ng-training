angular
    .module('booksCart')
    .controller('OrderCtrl', function(OrderService, $location, AlertService) {
        var ctrl = this;

        OrderService
            .getAll()
            .then(function(response) {
                ctrl.orders = response.data;
            }, function(response) {
                if (response.status == 401) {
                    $location.path('/login');
                    AlertService.error('You need to login to see your orders');
                }
            });

    });
