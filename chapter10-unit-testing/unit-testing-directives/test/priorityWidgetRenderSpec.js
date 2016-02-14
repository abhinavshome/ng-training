// File: chapter12/stockDirectiveRenderSpec.js
describe('Priority Widget Directive Rendering', function() {

    beforeEach(module('todoApp'));

    var compile, mockBackend, rootScope;

    // Step 1
    beforeEach(inject(function($compile, $httpBackend, $rootScope) {
        compile = $compile;
        mockBackend = $httpBackend;
        rootScope = $rootScope;
    }));

    it('should render HTML based on scope correctly', function() {
        // Step 2
        var scope = rootScope.$new();
        scope.todo = {
            priority: 3
        };

        scope.colorChooser = function(priority) {
            if (priority < 3) return 'lightgreen';
            else if (priority < 5) return 'green';
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
        expect(element.html()).toEqual(
            '<div style="width:60px;background-color:green" class="ng-binding">3</div>'
        );
    });
});
