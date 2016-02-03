angular
	.module('todoApp')
    .controller('IpCtrl', function($http, ip, message) {
        var ctrl = this;
        ctrl.message = message;
        ctrl.ip = ip;
    })