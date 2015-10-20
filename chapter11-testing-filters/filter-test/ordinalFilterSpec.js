describe('Ordinal filter test', function() {
    beforeEach(module('customFilterApp'));

    var filter;
    beforeEach(inject(function(ordinalFilter) {
        filter = ordinalFilter;
    }));

    it("should do right ordinal conversions", function() {
        expect(filter(12)).toEqual('12th');
        expect(filter(11)).toEqual('11th');
        expect(filter(21)).toEqual('21st');
        expect(filter(24)).toEqual('24th');
    });
})
