angular
    .module('tabApp', [])
    .directive('tabs', [function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: true,
            template: '<div class="tab-headers">' +
                '  <span ng-repeat="tab in tabs"' +
                '       ng-click="selectTab($index)"' +
                '       ng-class="{selected: isSelectedTab($index)}">' +
                '     {{tab.title}}' +
                '  </span>' +
                '</div>' +
                '<div ng-transclude></div> ',
            controller: function($scope) {
                var currentIndex = 0;
                $scope.tabs = [];
                this.registerTab = function(title, scope) {
                    if ($scope.tabs.length === 0) {
                        scope.selected = true;
                    } else {
                        scope.selected = false;
                    }
                    $scope.tabs.push({
                        title: title,
                        scope: scope
                    });
                };
                $scope.selectTab = function(index) {
                    currentIndex = index;

                    //make current tab selected and remaining unselected
                    for (var i = 0; i < $scope.tabs.length; i++) {
                        $scope.tabs[i].scope.selected = currentIndex === i;
                    }
                };
                $scope.isSelectedTab = function(index) {
                    return currentIndex === index;
                };
            }
        };
    }])
    .directive('tab', [function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="tab-content" ng-show="selected" ng-transclude></div>',
            require: '^tabs',
            scope: true,
            link: function($scope, $element, $attr, tabCtrl) {
                tabCtrl.registerTab($attr.title, $scope);
            }
        };
    }]);
