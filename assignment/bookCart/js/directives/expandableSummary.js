angular
	.module('booksCart')
	.directive('expandableSummary', function () {
		return {
			restrict: 'E',
			templateUrl: 'templates/expandable-summary.html',
			scope: {
				order: "="
			},
			link: function (scope, element, attributes) {
				scope.showDetails = function () {
					scope.detailShown = !scope.detailShown;
				}
			}
		}
	})