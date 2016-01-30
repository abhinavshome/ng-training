angular
    .module('demoApp')
    .controller('cricketCtrl', function($scope, players, teams) {
    	$scope.players = players;
    	$scope.teams = teams;
    });
