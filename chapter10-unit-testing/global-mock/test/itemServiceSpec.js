describe('todoCtrl with inline mock', function() {
    
    beforeEach(module('todoApp'));
    beforeEach(module('todoAppMock'));

    var scope = {};

    beforeEach(inject(function($controller) {
        $controller('todoCtrl', {$scope:scope});
    }));

    it('should load mocked out items', function() {
        expect(scope.items).toEqual([{
            id: 1,
            label: 'Mock'
        }]);
    });
});
