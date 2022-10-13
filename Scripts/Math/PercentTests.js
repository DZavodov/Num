// Copyright 2022 DZavodov. All Rights Reserved.

describe("Percent", function() {
	it("min", function () {
		expect(NumPercent.min.value).is.zero;
	});
	it("max", function () {
		expect(NumPercent.max.value).is.one;
	});

	it("constructor(..)", function () {
		expect(new NumPercent(-10).value).is.zero;
		expect(new NumPercent().value).is.zero;
		expect(new NumPercent(1).value).is.one;
		expect(new NumPercent(10).value).is.one;
	});

	it("getRandomBoolean(..)", function () {
		for (let index = 0; index < 10; ++index) {
			expect(new NumPercent(-10).getRandomBoolean()).is.false;
			expect(new NumPercent().getRandomBoolean()).is.false;
			expect(new NumPercent(1).getRandomBoolean()).is.true;
			expect(new NumPercent(10).getRandomBoolean()).is.true;
		}

		const halfPrcent = new NumPercent(.5);
		const histogram = [0, 0];
		for (let index = 0; index < 20000; ++index) {
			++histogram[halfPrcent.getRandomBoolean() ? 1 : 0];
		}
		const irregularity = histogram[1] / histogram[0];
		console.log(this.test.title, histogram, irregularity);
		expect(irregularity > .9 && irregularity < 1.1).is.true;
	});
});
