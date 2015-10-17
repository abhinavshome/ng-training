angular
    .module('todoApp', [])
    .controller('TodoCtrl', function() {
        this.todos = [{
            id: 1,
            label: '1st task',
            priority: 3,
            assignee: 'Ram'
        }, {
            id: 2,
            label: '2nd task',
            priority: 2
        }, {
            id: 3,
            label: '3rd task',
            priority: 1,
            assignee: 'Shyam'
        }, {
            id: 4,
            label: '4th task',
            priority: 5,
            assignee: 'Mohan'
        }, ];

        this.colorChooser = function(priority) {
            if (priority < 3) return 'lightgreen';
            else if (priority < 5) return 'green';
            else return 'darkgreen';
        };
    })
    .directive('priorityWidget', function() {
        return {
            restrict: 'E',
            templateUrl: 'priority-widget-tpl.html',
            link: function(scope, element, attributes) {
                //console.log(scope);
                scope.getColorCode =  function(point) {
                    if(scope.colorFunction) {
                        return scope.colorFunction({priority: point})
                    }

                    if (point < 3) return 'yellow';
                    else if (point < 5) return 'orange';
                    else return 'red';
                }
            },
            scope: {
                widthPerPoint: "@",
                item: "=",
                colorFunction: "&"
            },
//            replace: true
        }
    });
