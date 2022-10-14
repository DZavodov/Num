// Copyright 2022 DZavodov. All Rights Reserved.

describe("RandomGenerator", function() {
	it("seed(..)", function () {
		const generator = new NumRandomGenerator(0);
		expect(generator.seed).is.zero;
		generator.seed = 1;
		expect(generator.seed).is.one;
	});

	it("random(..)", function () {
		const generator = new NumRandomGenerator();
		const histogram = [0, 0, 0];
		for (let index = 0; index < 30000; ++index) {
			++histogram[Math.floor(generator.random * 3)];
		}
		const irregularities = [histogram[0] / histogram[1], histogram[1] / histogram[0], histogram[2] / histogram[1]];
		console.log(this.test.title, histogram, irregularities);
		irregularities.forEach(irregularity => {
			expect(irregularity > .9 && irregularity < 1.1).is.true;
		});
	});
	it("seeded random(..)", function () {
		expect("TODO Diferent seeds return diferent randoms").is.true;
	});

	it("randomInteger(..)", function () {
		const generator = new NumRandomGenerator();
		for (let index = 0; index < 100; ++index) {
			expect(generator.randomInteger(0)).is.zero;
		}

		const histogram = [0, 0, 0];
		for (let index = 0; index < 30000; ++index) {
			++histogram[generator.randomInteger(3)];
		}
		const irregularities = [histogram[0] / histogram[1], histogram[1] / histogram[0], histogram[2] / histogram[1]];
		console.log(this.test.title, histogram, irregularities);
		irregularities.forEach(irregularity => {
			expect(irregularity > .9 && irregularity < 1.1).is.true;
		});
	});
});
