angular
	.module('demoApp')
	.service('authService', function () {
		var auth = {};

		this.setToken = function (token) {
			auth.token = token;
		};

		this.getToken = function (token) {
			return auth.token;
		};
	})