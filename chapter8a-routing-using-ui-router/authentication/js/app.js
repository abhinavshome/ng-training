angular
	.module('demoApp', ['ui.router'])
	// Uncomment this block for state protection

	// .run(function ($rootScope, $state) {
	// 	$rootScope.$on('$stateChangeStart', function (e, nextState) {
	// 		if(nextState.name == 'products') {
	// 			e.preventDefault();
	// 			$state.go('login');
	// 		}
	// 	})
	// })
	;