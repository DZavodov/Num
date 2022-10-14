// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumMath {
	/**
	 * @param {number} x .
	 */
	static clamp(x, min = 0, max = 1) { return Math.min(Math.max(min, x), max); }

	/**  */
	static get randomGenerator() { return numMathRandomGenerator; }

	/**
	 * @param {integer} max .
	 * @param {NumRandomGeneratorBase} generator .
	 *
	 * @return {integer} .
	 */
	static randomInteger(max = Number.MAX_SAFE_INTEGER, generator = this.randomGenerator) { return Math.floor(generator.random * max); }
}
