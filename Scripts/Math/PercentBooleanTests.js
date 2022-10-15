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
		numTestIsUniformRandom(this.test.title, 2, index => {
			percentBoolean.randomize(generator);
			return percentBoolean.value ? 1 : 0;
		});
	});
});
