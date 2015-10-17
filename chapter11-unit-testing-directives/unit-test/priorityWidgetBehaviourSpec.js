// File: chapter12/stockDirectiveBehaviorSpec.js
describe('Stock Widget Directive Behavior', function() {

    beforeEach(module('todoApp'));

    var compile, mockBackend, rootScope;

    // Step 1
    beforeEach(inject(function($compile, $httpBackend, $rootScope) {
        compile = $compile;
        mockBackend = $httpBackend;
        rootScope = $rootScope;
    }));

    it('should have functions and data on scope correctly',
        function() {
            // Step 2
            var scope = rootScope.$new(), colorChooserCalled = '';
            scope.todo = {
                priority: 3
            };

            scope.colorChooser = function(priority) {
                colorChooserCalled = 'called with ' + priority;
                console.log(colorChooserCalled);
                if (priority < 3) return 'lightgreen';
                else if (priority < 5) return 'blue';
                else return 'darkgreen';
            };

            // Step 3
            mockBackend.expectGET('priority-widget-tpl.html').respond(
                '<div style="width:{{item.priority*widthPerPoint}}px;background-color:{{getColorCode(item.priority)}}">' +
                '{{item.priority}}' +
                '</div>'
            );

            // Step 4
            var element = compile('<priority-widget item="todo" width-per-point="20" color-function="colorChooser(priority)"></priority-widget>')(scope);


            // Step 5
            scope.$digest();
            mockBackend.flush();

            // Step 6
            var compiledElementScope = element.isolateScope();

            expect(compiledElementScope.item)
                .toEqual(scope.todo);
            expect(compiledElementScope.colorFunction(
                compiledElementScope.item)).toEqual('blue');


            // Step 7
            expect(colorChooserCalled).toEqual('called with 3');
        });
});
