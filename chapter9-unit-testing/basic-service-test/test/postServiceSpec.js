describe('Service: PostService', function() {
    beforeEach(module('blogApp'));

    var postService;

    beforeEach(inject(function(PostService) {
        postService = PostService;
    }));

    it('should load default items', function() {
        expect(postService.list()).toEqual([{
            id: 1,
            title: 'Item 0'
        }, {
            id: 2,
            title: 'Item 1'
        }]);
    });

    it('should add items in list', function () {
        postService.add({
            id: 3,
            title: 'Item 2'
        });
        expect(postService.list()).toContain({
            id: 3,
            title: 'Item 2'
        });
        expect(postService.list()).toEqual([{
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
