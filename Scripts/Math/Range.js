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
	isValue() { return this.#min === this.#max; }
	/**  */
	isRange() { return this.#min < this.#max; }
}
