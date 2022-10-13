// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumber {
	/**
	 * @return {integer} .
	 */
	static get digitsSizeMax() { return 8; }

	/**
	 * @todo Optimize.
	 */
	static get valueMax() { return NumNumberBase.min.value ** this.digitsSizeMax - 1; }
	/** @todo Optimize. */
	static get max() { return new this(this.valueMax); }

	/**
	 * @todo Optimize.
	 *
	 * @param {NumNumberBase} base .
	 * @param {integer} digitsSize .
	 */
	static makeRandom(base, digitsSize = 1) {
		return new this(Math.floor(Math.random() * base.value ** digitsSize));
	}

	/**  */
	#value;
	/**  */
	get value() { return this.#value; }
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
