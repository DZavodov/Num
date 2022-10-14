// Copyright 2022 DZavodov. All Rights Reserved.

describe("NumberBase", function() {
	const min = 2;
	const max = 10;
	it("min", function () {
		expect(NumNumberBase.min.value).equal(min);
	});
	it("max", function () {
		expect(NumNumberBase.max.value).equal(max);
	});

	it("constructor(..)", function () {
		expect(new NumNumberBase(-100).value).equal(min);
		expect(new NumNumberBase(0).value).equal(min);
		expect(new NumNumberBase(min).value).equal(min);
		expect(new NumNumberBase(max).value).equal(max);
		expect(new NumNumberBase(100).value).equal(max);
	});
});
