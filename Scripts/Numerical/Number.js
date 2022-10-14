// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumber {
	/**
	 * @return {integer} .
	 */
	static get #digitsSizeMax() { return 8; }

	/**  */
	static #max = new this(NumNumberBase.min.value ** this.#digitsSizeMax - 1);
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
		this.#value = NumMath.clamp(value, 0, NumNumber.max.value);
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
