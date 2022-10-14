// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumber {
	/**
	 * @return {integer} .
	 */
	static get #digitsSizeMax() { return 8; }

	/**
	 * @type {integer}
	 */
	static #maxValue = NumNumberBase.min.value ** this.#digitsSizeMax - 1
	/**  */
	static #max = new this(this.#maxValue);
	/**  */
	static get max() { return this.#max; }

	/**  */
	#value;
	/**  */
	get value() { return this.#value; }
	/**
	 * @param {integer} value .
	 */
	constructor(value = 0) {
		this.#value = NumMath.clamp(value, 0, NumNumber.#maxValue);
	}

	/**
	 * @param {NumRandomGeneratorBase} generator .
	 * @param {NumNumberBase} base .
	 * @param {integer} digitsSize .
	 */
	static makeRandom(generator, base, digitsSize = 1) {
		return new this(generator.randomInteger(base.value ** digitsSize));
	}

	/**
	 * @param {NumNumberBase} base .
	 */
	toString(base) {
		return this.#value.toString(base.value);
	}
}
