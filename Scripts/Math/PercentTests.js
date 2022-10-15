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
		expect(new NumPercent(0).value).is.zero;
		expect(new NumPercent(1).value).is.one;
		expect(new NumPercent(10).value).is.one;
	});

	it("getRandomBoolean(..)", function () {
		const generator = new NumRandomGenerator();
		for (let index = 0; index < 100; ++index) {
			expect(new NumPercent(-10).getRandomBoolean(generator)).is.false;
			expect(new NumPercent().getRandomBoolean(generator)).is.false;
			expect(new NumPercent(0).getRandomBoolean(generator)).is.false;
			expect(new NumPercent(1).getRandomBoolean(generator)).is.true;
			expect(new NumPercent(10).getRandomBoolean(generator)).is.true;
		}

		const halfPrcent = new NumPercent(.5);
		numTestIsUniformRandom(this.test.title, 2, index => {
			return halfPrcent.getRandomBoolean(generator) ? 1 : 0;
		});
	});
});
