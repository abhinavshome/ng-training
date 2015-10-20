angular
    .module('filtersApp', [])
    .controller('FilterCtrl', function(filterFilter) {
        this.notes = [{
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

        this.stringFilter = '';
        this.objectFilter = {
            done: true,
            label: 'S'
        };
        var doneTasks = function(note) {
            return note.type == 'task' && note.done == true;
        };
        var chores = function(note) {
            return note.type == 'chore';
        }

        this.functionFilter = doneTasks;
        this.availableFunctionFilters = [doneTasks, chores];

        this.filteredNotes = filterFilter(this.notes, chores);
        this.addRowToTable = function() {
            this.notes.push({
                label: 'New Todo' + this.notes.length,
                type: 'chore',
                done: false
            })
        }

    });
