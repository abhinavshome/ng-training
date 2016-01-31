angular
    .module('filtersApp', [])
    .controller('filterCtrl', function($scope, filterFilter) {
        
        $scope.notes = [{
            label: 'FC Todo',
            type: 'chore',
            done: false
        }, {
            label: 'FT Todo',
            type: 'task',
            done: false
        }, {
            label: 'FF Todo',
            type: 'fun',
            done: true
        }, {
            label: 'SC Todo',
            type: 'chore',
            done: false
        }, {
            label: 'ST Todo',
            type: 'task',
            done: true
        }, {
            label: 'SF Todo',
            type: 'fun',
            done: true
        }, {
            label: 'TC Todo',
            type: 'chore',
            done: false
        }, {
            label: 'TT Todo',
            type: 'task',
            done: false
        }, {
            label: 'TF Todo',
            type: 'fun',
            done: false
        }];

        $scope.stringFilter = '';
        $scope.objectFilter = {
            done: true,
            label: 'S'
        };
        var doneTasks = function(note) {
            return note.type == 'task' && note.done == true;
        };
        var chores = function(note) {
            return note.type == 'chore';
        }

        $scope.functionFilter = doneTasks;
        $scope.availableFunctionFilters = [doneTasks, chores];

        $scope.filteredNotes = filterFilter($scope.notes, chores);
        $scope.addRowToTable = function() {
            $scope.notes.push({
                label: 'New Todo' + $scope.notes.length,
                type: 'chore',
                done: false
            })
        }

    });
