angular
	.module('todoApp')
	.controller('LoginCtrl', function ($http, AuthService, $routeParams) {
			var ctrl = this;
			console.log(' => ', $routeParams);
			ctrl.message = $routeParams.message;		
		this.login = function () {

			$http
				.post('http://localhost:3000/login', ctrl.user)
				.then(function (response) {
					AuthService.setToken(response.data.token);
					console.log('Login successful');
				});
		}
	})