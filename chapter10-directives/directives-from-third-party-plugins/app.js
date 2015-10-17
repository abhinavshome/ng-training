angular
    .module("dateApp", [])
    .directive('slider', function() {
        return {
            scope: {
                ngModel: "="
            },
            link: function(scope, element, attributes) {
                element.slider({
                	min: parseInt(attributes.min),
                	max: parseInt(attributes.max)
                });

                scope.ngModel = attributes.min;

                //change angular variable when jquery plugin changes
                element.on("slide", function(event, ui) {
                    scope.$apply(function() {
                        scope.ngModel = ui.value;
                    });
                });

                //change jquery plugin when angular variable changes
                scope.$watch('ngModel', function (newVal) {
                	newVal <= attributes.max && element.slider("value", newVal);
                })
            }
        }
    })
