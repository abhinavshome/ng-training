angular
    .module('filtersApp', [])
    .controller('FilterCtrl', ['lowercaseFilter',  function(lowercaseFilter) {
        this.amount = 1024;
        this.name = 'Micheal Jackson';
        this.obj = {
            test: 'value',
            num: 123
        };
        this.startTime = new Date().getTime();
        this.nameInLC = lowercaseFilter(this.name);

    }]);
