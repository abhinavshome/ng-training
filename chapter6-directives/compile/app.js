angular
    .module('tabsApp', [])
    .directive('tabs', function() {

        var linkFunction = function(scope, element, attributes) {
            if (element.find('tab').length > 0)
                scope.currentTab = 1;

            scope.selectTab = function(tabId) {
                scope.currentTab = tabId;
            };
        }
        return {
            restrict: 'E',
            compile: function(element, attributes) {

                //make it like a angular view
                var tabs = element.find('tab');
                var tabHtml = "<div>";
                angular.forEach(tabs, function(tab, index) {
                    index++;
                    $(tab).attr('ng-show', 'currentTab==' + index);
                    $(tab).attr('ng-click', 'selectTab(' + index + ')');
                    tabHtml += "<a ng-class='{selected: currentTab == " + index + "}' ng-click='selectTab(" + index + ")'>" + $(tab).attr('title') + "</a>";
                });
                element.prepend(tabHtml);

                //add some css
                element.prepend(
                    "<style>" +
                    "tabs a { background-color:lightgray; margin: 5px; padding: 5px; cursor: pointer }" +
                    ".selected {background-color: lightpink !important}" +
                    " tab {margin: 5px; padding: 20px; display: block; border: 1px solid lightpink}" +
                    "</style>"
                );

                return linkFunction;
            }


        }
    })
