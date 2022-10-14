// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumRange {
	/**  */
	#max;
	/**  */
	#min;
	/**  */
	get min() { return this.#min; }
	/**  */
	get max() { return this.#max; }
	/**  */
	get value() { return this.#min; }

	/**
	 * @param {number} value .
	 */
	constructor(value) {
		this.#min = value;
		this.#max = value;
	}

	/**
	 * @param {number} min .
	 * @param {number} max .
	 */
	static makeMin(min, max) {
		const value = new this(max);
		value.#min = Math.min(min, max);
		return value;
	}
	/**
	 * @param {number} min .
	 * @param {number} max .
	 */
	static makeMax(min, max) {
		const value = new this(min);
		value.#max = Math.max(min, max);
		return value;
	}

	/**  */
	get isValue() { return this.#min === this.#max; }
	/**  */
	get isRange() { return this.#min < this.#max; }

	/**
	 * @param {NumRandomGenerator} generator .
	 *
	 * @return {integer} .
	 */
	getRandomInteger(generator) {
		if (this.isValue) { return this.value; }

		const min = Math.ceil(this.#min);
		return Math.floor(generator.random * (Math.floor(this.#max) - min + 1) + min);
	}
}
