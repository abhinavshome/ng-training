describe('capitalize filter test', function() {
    beforeEach(module('customFilterApp'));

    var filter;
    beforeEach(inject(function(capitalizeFilter) {
        filter = capitalizeFilter;
    }));

    it("should do right capitalize conversions", function() {
        expect(filter("sunny")).toEqual("Sunny");
        expect(filter("maximum",3)).toEqual("maXimum");
    });
})
