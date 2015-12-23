angular
    .module('todoApp')
    .controller('ProductCtrl', function($http, AuthService, $location) {
        var ctrl = this,
            token = AuthService.getToken();
        $http
            .get('http://localhost:3000/api/v1/products', {
                headers: {
                    'X-ACCESS-TOKEN': token
                }
            })
            .then(function(response) {
                    ctrl.products = response.data;
                },
                function(response) {
                    console.log(' => ', response);
                    if (response.status == 401) {
                        $location
                            .path("/login")
                            .search({
                                message: 'Please login first'
                            });
                    }
                });
    });
