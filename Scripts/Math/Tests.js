// Copyright 2022 DZavodov. All Rights Reserved.

describe("Math", function() {
	it("clamp(..)", function () {
		expect(NumMath.clamp(-10)).is.zero;
		expect(NumMath.clamp(0)).is.zero;
		expect(NumMath.clamp(1)).is.one;
		expect(NumMath.clamp(10)).is.one;

		expect(NumMath.clamp(-10, 0, 1)).is.zero;
		expect(NumMath.clamp(0, 0, 1)).is.zero;
		expect(NumMath.clamp(1, 0, 1)).is.one;
		expect(NumMath.clamp(10, 0, 1)).is.one;
	});

	it("generator", function () {
		expect(NumMath.randomGenerator).instanceof(NumRandomGeneratorBase);
	});

	it("randomInteger(..)", function () {
		for (let index = 0; index < 100; ++index) {
			expect(NumMath.randomInteger(0)).is.zero;
		}

		const histogram = [0, 0, 0];
		for (let index = 0; index < 30000; ++index) {
			++histogram[NumMath.randomInteger(3)];
		}
		const irregularities = [histogram[0] / histogram[1], histogram[1] / histogram[0], histogram[2] / histogram[1]];
		console.log(this.test.title, histogram, irregularities);
		irregularities.forEach(irregularity => {
			expect(irregularity > .9 && irregularity < 1.1).is.true;
		});
	});
});
