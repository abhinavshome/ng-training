angular
    .module('filtersApp', [])
    .controller('FilterCtrl', [function() {
        this.amount = 1024;
        this.name = 'Micheal Jackson';
        this.obj = {
            test: 'value',
            num: 123
        };
        this.startTime = new Date().getTime();

    }]);
