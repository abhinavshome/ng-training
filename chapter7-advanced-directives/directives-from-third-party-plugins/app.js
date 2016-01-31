angular
    .module("userApp", [])
    .controller('userCtrl', function($scope) {
        $scope.user = {
            name: 'Manoj',
            weight: 75,
            height: 122,
            bp: 140,
            diseases: ['fever', 'cough', 'cold']
        }
        $scope.submit = function() {
            console.log('Adding patients record', $scope.user);
        }
    })
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

                //set default value as min
                scope.ngModel = scope.ngModel || attributes.min;

                //change angular variable when jquery plugin changes
                element.on("slide", function(event, ui) {
                    scope.$apply(function() {
                        scope.ngModel = ui.value;
                    });
                });

                //change jquery plugin when angular variable changes
                scope.$watch('ngModel', function(newVal) {
                    newVal <= attributes.max && element.slider("value", newVal);
                })
            }
        }
    })
    .directive('tags', function() {
        return {
            scope: {
                ngModel: "="
            },
            link: function(scope, element, attributes) {
                element.tagsInput({
                    onChange: function(data) {
                        scope.$apply(function() {
                            scope.ngModel = element.val().split(',');
                        });
                    }
                });

                angular.forEach(scope.ngModel, function(disease) {
                    element.addTag(disease);
                });
            }
        }
    })
