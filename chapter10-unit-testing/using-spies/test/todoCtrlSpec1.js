describe('TodoCtrl with mocking service using spies', function() {

    beforeEach(module('todoApp'));

    var scope = {},
        service;
    beforeEach(inject(function($controller, todoService) {
        spyOn(todoService, 'list').and.returnValue([{
            id: 1,
            label: 'Mock'
        }]);
        service = todoService;
        $controller('todoCtrl', {$scope: scope});
    }));

    it('should load real items', function() {
        expect(scope.items).toEqual([{
            id: 1,
            label: 'Mock'
        }]);
        expect(service.list).toHaveBeenCalled();
        expect(service.list.calls.count()).toEqual(1);
    });
});
