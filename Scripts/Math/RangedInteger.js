// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumRangedInteger {
	/**
	 * @param {NumRange} range .
	 */
	constructor(range) {
		/**
		 * @type {NumRange}
		 */
		this.range = range;
	}

	/**
	 * @type {integer}
	 */
	#value;
	/**  */
	get value() { return this.#value; }

	/**
	 * @param {NumRandomGeneratorBase} generator .
	 */
	randomize(generator) {
		this.#value = this.range.getRandomInteger(generator);
	}
}
