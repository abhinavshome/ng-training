angular
    .module('bookCart')
    .controller('bookCtrl', function($scope, bookService, Book) {
        $scope.title = 'BookCart';
        
        $scope.books = bookService.getAll();

        $scope.addBook = function() {
            bookService.add(angular.copy($scope.newBook));
        };

        $scope.showEditForm = function (book) {
        	$scope.bookToEdit = angular.copy(book);
        };

        $scope.updateBook = function () {
        	bookService.update($scope.bookToEdit);
        }
    });
