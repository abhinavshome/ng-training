angular
    .module('userApp', [])
    .controller('UserCtrl', [function() {
        var self = this;
        self.countries = [{
            label: 'USA',
            id: 1,
            continent: 'America'
        }, {
            label: 'India',
            id: 2,
            continent: 'Asia'
        }, {
            label: 'China',
            id: 3,
            continent: 'Asia'
        }];
        self.submit = function() {
            console.log('User clicked submit with ', self.user);
        };
    }]);
