describe('TodoCtrl with real service and spies', function() {
    
    beforeEach(module('todoApp'));

    var ctrl, todoService;
    beforeEach(inject(function($controller, TodoService) {
        spyOn(TodoService, 'list').and.callThrough();
        todoService = TodoService;
        ctrl = $controller('TodoCtrl');
    }));

    it('should load real items', function() {
        expect(ctrl.items).toEqual([
          {id: 1, label: 'Item 0'},
          {id: 2, label: 'Item 1'}
        ]);
        expect(todoService.list).toHaveBeenCalled();
        expect(todoService.list.calls.count()).toEqual(1);
    });
});
