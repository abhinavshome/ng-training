angular
    .module('serverApp', [])
    .controller('MainCtrl', ['$http', function($http) {
        var self = this;
        self.items = [];
        self.errorMessage = '';
        $http.get('/api/note').then(function(response) {
            self.items = response.data.map(function (n) {
                return n.label;
            });
        }, function(errResponse) {
            self.errorMessage = errResponse.data.msg;
        });
    }]);
