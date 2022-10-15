// Copyright 2022 DZavodov. All Rights Reserved.

describe("Number", function() {
	const max = 255;
	it("max", function () {
		expect(NumNumber.max.value).equal(max);
	});

	it("constructor(..)", function () {
		expect(new NumNumber(-1000).value).is.zero;
		expect(new NumNumber().value).is.zero;
		expect(new NumNumber(0).value).is.zero;
		expect(new NumNumber(42).value).equal(42);
		expect(new NumNumber(max).value).equal(max);
		expect(new NumNumber(1000).value).equal(max);
	});

	it("makeRandom(..)", function () {
		const generator = new NumRandomGenerator();
		numTestIsUniformRandom(this.test.title, 2, index => {
			return NumNumber.makeRandom(generator, NumNumberBase.min).value;
		});
		numTestIsUniformRandom(this.test.title, 4, index => {
			return NumNumber.makeRandom(generator, NumNumberBase.min, 2).value;
		});
	});

	it("toString(..)", function () {
		expect(new NumNumber(42).toString(NumNumberBase.min)).equal("101010");
		expect(
			new NumNumber(42).toString(new NumNumberBase(2))).equal("101010");
		expect(new NumNumber(42).toString(new NumNumberBase(10))).equal("42");
		expect(new NumNumber(42).toString(NumNumberBase.max)).equal("42");
	});
});
