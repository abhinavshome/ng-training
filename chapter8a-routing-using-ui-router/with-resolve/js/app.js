angular
    .module('demoApp', ['ui.router'])
    .run(['$rootScope', '$state', function($rootScope, $state) {

        $rootScope.$on('$stateChangeStart', function() {
            $rootScope.stateIsLoading = true;
        });


        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.stateIsLoading = false;
        });

    }]);
