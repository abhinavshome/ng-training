describe('ItemCtrl with inline mock', function() {

    beforeEach(module('todoApp'));

    var scope = {},
        mockService;

    beforeEach(module(function($provide) {
        mockService = {
            list: function() {

                return [{
                    id: 1,
                    label: 'Mock'
                }];
            }
        };
        $provide.value('todoService', mockService);
    }));

    beforeEach(inject(function($controller) {
        $controller('todoCtrl', {$scope: scope});
    }));

    it('should load items', function() {
        expect(scope.items).toEqual([{
            id: 1,
            label: 'Mock'
        }]);
    });
});
