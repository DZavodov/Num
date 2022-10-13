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
});
