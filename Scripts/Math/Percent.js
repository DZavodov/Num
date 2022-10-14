// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumPercent {
	/**  */
	static #min = new this();
	/**  */
	static #max = new this(1);
	/**  */
	static get min() { return this.#min; }
	/**  */
	static get max() { return this.#max; }

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

	/**
	 * @param {NumRandomGeneratorBase} generator .
	 */
	getRandomBoolean(generator) {
		return this.#value >= 1 ? true : this.#value > generator.random;
	}
}
