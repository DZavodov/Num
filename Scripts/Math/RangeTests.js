// Copyright 2022 DZavodov. All Rights Reserved.

describe("Range", function() {
	it("constructor(..)", function () {
		/**
		 * @param {number} value .
		 */
		function testMinMaxValue(value) {
			const range = new NumRange(value);

			expect(range.min).equal(value);
			expect(range.max).equal(value);
			expect(range.value).equal(value);

			expect(range.isValue).is.true;
			expect(range.isRange).is.false;
		}

		testMinMaxValue(-1);
		testMinMaxValue(0);
		testMinMaxValue(1);
	});

	it("makeMin(..)", function () {
		/**
		 * @param {number} min .
		 * @param {number} max .
		 * @param {(number|undefined)} overrideMin .
		 */
		 function testMinMaxIsRange(min, max, overrideMin = undefined) {
			const range = NumRange.makeMin(min, max);

			expect(range.min).equal(overrideMin === undefined ? min : overrideMin);
			expect(range.max).equal(max);

			const isRange = min < max;
			expect(range.isValue).not.equal(isRange);
			expect(range.isRange).equal(isRange);
		}

		testMinMaxIsRange(-10, -10);
		testMinMaxIsRange(-10, 0);
		testMinMaxIsRange(0, -10, -10);
		testMinMaxIsRange(0, 0);
		testMinMaxIsRange(0, 10);
		testMinMaxIsRange(10, 0, 0);
		testMinMaxIsRange(10, 10);
	});
	it("makeMax(..)", function () {
		/**
		 * @param {number} min .
		 * @param {number} max .
		 * @param {(number|undefined)} overrideMax .
		 */
		 function testMinMaxIsRange(min, max, overrideMax = undefined) {
			const range = NumRange.makeMax(min, max);

			expect(range.min).equal(min);
			expect(range.max).equal(overrideMax === undefined ? max : overrideMax);

			const isRange = min < max;
			expect(range.isValue).not.equal(isRange);
			expect(range.isRange).equal(isRange);
		}

		testMinMaxIsRange(-10, -10);
		testMinMaxIsRange(-10, 0);
		testMinMaxIsRange(0, -10, 0);
		testMinMaxIsRange(0, 0);
		testMinMaxIsRange(0, 10);
		testMinMaxIsRange(10, 0, 10);
		testMinMaxIsRange(10, 10);
	});

	it("getRandomInteger(..)", function () {
		const generator = new NumRandomGenerator();
		for (let index = 0; index < 100; ++index) {
			expect(new NumRange(42).getRandomInteger(generator)).equal(42);
		}

		const range = NumRange.makeMax(0, 2);
		const histogram = [0, 0, 0];
		for (let index = 0; index < 30000; ++index) {
			++histogram[range.getRandomInteger(generator)];
		}
		const irregularities = [histogram[0] / histogram[1], histogram[1] / histogram[0], histogram[2] / histogram[1]];
		console.log(this.test.title, histogram, irregularities);
		irregularities.forEach(irregularity => {
			expect(irregularity > .9 && irregularity < 1.1).is.true;
		});
	});
});
