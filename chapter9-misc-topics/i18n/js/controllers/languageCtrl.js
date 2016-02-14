angular
    .module('demoApp')
    .controller('languageCtrl', function($translate, $scope) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };

        $scope.now = new Date();
    });
