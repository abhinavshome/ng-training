describe('TodoCtrl with real service and spies', function() {
    
    beforeEach(module('todoApp'));

    var scope = {}, service;
    beforeEach(inject(function($controller, todoService) {
        

        spyOn(todoService, 'list').and.callThrough();
        
        service = todoService;
        $controller('todoCtrl', {$scope: scope});
    }));

    it('should load real items', function() {
        expect(scope.items).toEqual([
          {id: 1, label: 'Item 0'},
          {id: 2, label: 'Item 1'}
        ]);
        expect(service.list).toHaveBeenCalled();
        expect(service.list.calls.count()).toEqual(1);
    });
});
