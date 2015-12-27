angular
    .module('booksCart')
    .filter('titlecase', function() {
        return function(s) {
            s = s || '';
            return s.toString().toLowerCase().replace(/\b([a-z])/g, function(ch) {
                return ch.toUpperCase();
            });
        };
    });
