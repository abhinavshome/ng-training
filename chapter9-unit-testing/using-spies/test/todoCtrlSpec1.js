describe('TodoCtrl with mocking service using spies', function() {

    beforeEach(module('todoApp'));

    var ctrl, todoService;
    beforeEach(inject(function($controller, TodoService) {
        spyOn(TodoService, 'list').and.returnValue([{
            id: 1,
            label: 'Mock'
        }]);
        todoService = TodoService;
        ctrl = $controller('TodoCtrl');
    }));

    it('should load real items', function() {
        expect(ctrl.items).toEqual([{
            id: 1,
            label: 'Mock'
        }]);
        expect(todoService.list).toHaveBeenCalled();
        expect(todoService.list.calls.count()).toEqual(1);
    });
});
