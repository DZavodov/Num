// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumPercent {
	/** @todo Optimize. */
	static get min() { return new this(); }
	/** @todo Optimize. */
	static get max() { return new this(1); }

	/**
	 * @type {float}
	 */
	#value;
	/**  */
	get value() { return this.#value; }

	/**
	 * @param {float} value .
	 */
	constructor(value = 0) {
		this.#value = NumMath.clamp(value);
	}

	/**  */
	getRandomBoolean() {
		return this.#value === 1 ? true : this.#value > Math.random();
	}
}
