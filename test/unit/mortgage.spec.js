const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(500000, 5.5, 30);
    });

    it("should have a mortgage function", () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it("should have a principal = 5500,000", () => {
        expect(mortgage.principal).to.equal(500000);
    });

    it("should have the interest = 5.5%", () => {
        expect(mortgage.interest).equal(5.5);
    });

    it("should have a term arg", () => {
        expect(mortgage.term).to.exist;
    });
});