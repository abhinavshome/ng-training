angular
    .module('demoApp')
    .service('bodyStyle', function() {
        var style = {};

        this.setSize = function(s) {
            style.size = s;
        };

        this.setColor = function(c) {
            style.color = c;
        };

        this.getStyle = function() {
            return style;
        };
    });
