describe('Service: postService', function() {
    beforeEach(module('blogApp'));

    var service;

    beforeEach(inject(function(postService) {
        service = postService;
    }));

    it('should load default items', function() {
        expect(service.list()).toEqual([{
            id: 1,
            title: 'Item 0'
        }, {
            id: 2,
            title: 'Item 1'
        }]);
    });

    it('should add items in list', function () {
        service.add({
            id: 3,
            title: 'Item 2'
        });
        expect(service.list()).toContain({
            id: 3,
            title: 'Item 2'
        });
        expect(service.list()).toEqual([{
            id: 1,
            title: 'Item 0'
        }, {
            id: 2,
            title: 'Item 1'
        },{
            id: 3,
            title: 'Item 2'
        }]);
    })

})
