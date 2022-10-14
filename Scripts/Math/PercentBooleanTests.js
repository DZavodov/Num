// Copyright 2022 DZavodov. All Rights Reserved.

describe("PercentBoolean", function() {
	it("randomize(..)", function () {
		const percentBoolean = new NumPercentBoolean();
		const generator = new NumRandomGenerator();
		for (let index = 0; index < 100; ++index) {
			percentBoolean.randomize(generator);
			expect(percentBoolean.value).is.false;
		}

		percentBoolean.percent = NumPercent.max;
		for (let index = 0; index < 100; ++index) {
			percentBoolean.randomize(generator);
			expect(percentBoolean.value).is.true;
		}

		percentBoolean.percent = new NumPercent(.5);
		const histogram = [0, 0];
		for (let index = 0; index < 20000; ++index) {
			percentBoolean.randomize(generator);
			++histogram[percentBoolean.value ? 1 : 0];
		}
		const irregularity = histogram[1] / histogram[0];
		console.log(this.test.title, histogram, irregularity);
		expect(irregularity > .9 && irregularity < 1.1).is.true;
	});
});
