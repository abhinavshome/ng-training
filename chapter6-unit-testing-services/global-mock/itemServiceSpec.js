describe('ItemCtrl with inline mock', function() {
    
    beforeEach(module('todoApp'));
    beforeEach(module('todoAppMock'));

    var ctrl;

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
