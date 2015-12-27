angular
    .module('booksCart')
    .service('AlertService', function() {
        var alert = {
            type: '',
            message: ''
        };

        this.getAlert = function () {
        	return alert;
        }

        this.success = function(message) {
            alert.type = 'success';
            alert.message = message;
        };

        this.error = function(message) {
            alert.type = 'error';
            alert.message = message;
        };

        this.clear = function () {
        	alert.type = '';
        	alert.message = '';
        }
    });
