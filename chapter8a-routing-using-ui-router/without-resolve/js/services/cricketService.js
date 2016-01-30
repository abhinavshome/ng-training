angular
    .module('demoApp')
    .service('cricketService', function($q) {
        this.getPlayers = function() {
            var defer = $q.defer();
            setTimeout(function() {
                var players = [{
                    name: 'Virat Kohli',
                    centuries: 25
                },
                {
                	name: 'Sachin Tendulkar',
                	centuries: 50
                },
                {
                	name: 'Saurav Gangulay',
                	centuries: 22
                }];
                defer.resolve(players)
            }, 800);
            return defer.promise;
        };

        this.getTeams = function() {
            var defer = $q.defer();
            setTimeout(function() {
                var teams = [{
                    name: 'India',
                    won: 25,
                    lost: 12
                },
                {
                	name: 'South Africa',
                	won: 30,
                	lost:11
                },
                {
                	name: 'Sri Lanka',
                	won: 21,
                	lost: 23
                }];
                defer.resolve(teams)
            }, 1600);
            return defer.promise;
        };
    })
