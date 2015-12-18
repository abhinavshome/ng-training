describe('ItemCtrl with inline mock', function() {
    
    beforeEach(module('todoApp'));

    var ctrl, mockService;
    beforeEach(module(function($provide) {
        mockService = {
            list: function() {

                return [{
                    id: 1,
                    label: 'Mock'
                }];
            }
        };
        $provide.value('TodoService', mockService);
    }));

    beforeEach(inject(function($controller) {
        ctrl = $controller('TodoCtrl');
    }));

    it('should load mocked out items', function() {
        expect(ctrl.items).toEqual([{
            id: 1,
            label: 'Mock'
        }]);
    });
});
