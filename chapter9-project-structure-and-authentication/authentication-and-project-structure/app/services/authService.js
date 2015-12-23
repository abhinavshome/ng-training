angular
	.module('todoApp')
	.service('AuthService', function () {
		var authData = {};

		this.setToken = function (token) {
			authData.token = token;
		};

		this.getToken = function () {
			return authData.token;
		};
	});
