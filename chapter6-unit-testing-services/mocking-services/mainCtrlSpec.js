describe('MainCtrl test with server calls', function() {

    beforeEach(module('serverApp'));
    
    var ctrl, mockBackend;
    
    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;
        mockBackend.expectGET('/api/note')
            .respond([{
                id: 1,
                label: 'Mock'
            }]);
        ctrl = $controller('MainCtrl');
    }));
    
    it('should load items from server', function() { /
    	// Initially, before the server responds,
        // the items should be empty 
        expect(ctrl.items).toEqual([]);
        // Simulate a server response
        mockBackend.flush();
        expect(ctrl.items).toEqual([{
            id: 1,
            label: 'Mock'
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
