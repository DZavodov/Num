// Copyright 2022 DZavodov. All Rights Reserved.

describe("RangedInteger", function() {
	it("randomize(..)", function () {
		const rangedInteger = new NumRangedInteger(new NumRange(42));
		const generator = new NumRandomGenerator();
		for (let index = 0; index < 100; ++index) {
			rangedInteger.randomize(generator);
			expect(rangedInteger.value).equal(42);
		}

		rangedInteger.range = NumRange.makeMax(0, 2);
		numLogRandomMeasure(this.test.title, 3, index => {
			rangedInteger.randomize(generator);
			return rangedInteger.value;
		});
	});
});
