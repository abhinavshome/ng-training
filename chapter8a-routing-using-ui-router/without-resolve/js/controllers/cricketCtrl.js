angular
    .module('demoApp')
    .controller('cricketCtrl', function($scope, cricketService) {
    	cricketService
    		.getPlayers()
    		.then(function (players) {
    			$scope.players = players;
    		});

    	cricketService
    		.getTeams()
    		.then(function (teams) {
    			$scope.teams = teams;
    		});
    });
