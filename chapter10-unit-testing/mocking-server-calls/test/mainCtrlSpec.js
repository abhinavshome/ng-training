describe('mainCtrl test with server calls', function() {

    beforeEach(module('serverApp'));

    var scope = {},
        mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;
        mockBackend.expectGET('/api/note')
            .respond([{
                id: 1,
                label: 'Mock1'
            }, {
                id: 2,
                label: 'Mock2'
            }]);
        $controller('mainCtrl', {$scope: scope});
    }));

    it('should load items from server', function() {
        // Initially, before the server responds,
        // the items should be empty 
        expect(scope.items).toEqual([]);
        // Simulate a server response
        mockBackend.flush();
        expect(scope.items).toEqual([{
                id: 1,
                label: 'Mock1'
            }, {
                id: 2,
                label: 'Mock2'
            }]);
    });

    afterEach(function() {
        // Ensure that all expects set on the $httpBackend 
        // were actually called 
        mockBackend.verifyNoOutstandingExpectation();
        // Ensure that all requests to the server 
        // have actually responded (using flush()) 
        mockBackend.verifyNoOutstandingRequest();
    });
});
