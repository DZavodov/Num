// Copyright 2022 DZavodov. All Rights Reserved.

describe("RandomGenerator", function() {
	it("seed(..)", function () {
		let generator = new NumRandomGenerator(0);
		expect(generator.seed).is.zero;
		generator = new NumRandomGenerator(1);
		expect(generator.seed).is.one;
	});

	it("random(..)", function () {
		const generator = new NumRandomGenerator();
		numTestIsUniformRandom(this.test.title, 3, index => {
			return Math.floor(generator.random * 3);
		});

		const size = 10000;
		summ = 0;
		for(let i = 0; i < size; ++i){
			summ += generator.random
		}
		expect(Math.abs(summ / size) - .5).not.above(.01);
	});
	it("seeded random(..)", function () {
		let generator0 = new NumRandomGenerator(0);
		let generator1 = new NumRandomGenerator(0);

		for (let index = 0; index < 100; ++index) {
			expect(generator0.random).equal(generator1.random);
		}

		generator0 = new NumRandomGenerator(0);
		generator1 = new NumRandomGenerator(1);

		for (let index = 0; index < 100; ++index) {
			expect(generator0.random).not.equal(generator1.random);
		}
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
