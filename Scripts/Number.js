// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumber {
	/**
	 * @param {NumNumberBase} base .
	 * @param {integer} digitsSize .
	 * @warning Check size >= 0 && size <= this.digitsSizeMax!
	 *
	 * @return {integer} .
	 */
	static makeValueMax_Unsafe(base, digitsSize) {
		return base.value ** digitsSize - 1;
	}

	/**
	 * @return {integer} .
	 */
	static get digitsSizeMax() { return 8; }

	/**
	 * @todo Optimize.
	 */
	static get valueMax() { return this.makeValueMax_Unsafe(NumNumberBase.min, this.digitsSizeMax); }
	/** @todo Optimize. */
	static get max() { return new this(this.valueMax); }

	/**
	 * @todo Optimize.
	 *
	 * @param {NumNumberBase} base .
	 * @param {integer} figitsSize .
	 */
	static makeRandom(base, figitsSize) {
		return new this(Math.floor(Math.random() * this.makeValueMax_Unsafe(base, figitsSize)));
	}

	/**  */
	#value;
	/**
	 * @param {integer} value .
	 */
	constructor(value = 0) {
		this.#value = NumMath.clamp(value, 0, NumNumber.valueMax);
	}

	/**
	 * @param {NumNumberBase} base .
	 */
	toString(base) {
		return this.#value.toString(base.value);
	}
}
