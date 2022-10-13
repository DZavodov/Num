// Copyright 2022 DZavodov. All Rights Reserved.

describe("RangedInteger", function() {
	it("randomize(..)", function () {
		const rangedInteger = new NumRangedInteger(new NumRange(42));
		for (let index = 0; index < 100; ++index) {
			rangedInteger.randomize();
			expect(rangedInteger.value).equal(42);
		}

		rangedInteger.range = NumRange.makeMax(0, 2);
		const histogram = [0, 0, 0];
		for (let index = 0; index < 30000; ++index) {
			rangedInteger.randomize();
			++histogram[rangedInteger.value];
		}
		const irregularities = [histogram[0] / histogram[1], histogram[1] / histogram[0], histogram[2] / histogram[1]];
		console.log(this.test.title, histogram, irregularities);
		irregularities.forEach(irregularity => {
			expect(irregularity > .9 && irregularity < 1.1).is.true;
		});
	});
});
