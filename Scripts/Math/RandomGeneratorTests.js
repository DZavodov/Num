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
		numTestIsUniformRandom(this.test.title, 3, index => {
			return Math.floor(generator.random * 3);
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

		numTestIsUniformRandom(this.test.title, 3, index => {
			return generator.randomInteger(3);
		});
	});
});
