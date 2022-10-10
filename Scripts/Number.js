// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class Number {
	/**
	 * @return {integer} .
	 */
	static get digitsMax() { return 8; }
	/**
	 * @todo Optimize.
	 *
	 * @return {integer} .
	 */
	static get valueMax() { return NumberBase.valueMin ** this.digitsMax - 1; }

	/** @todo Optimize. */
	static get max() { return new this(this.valueMax); }

	/**
	 * @type {integer}
	 */
	#value;
	/**
	 * @param {integer} value .
	 */
	constructor(value = 0) {
		this.#value = Math.min(Math.max(0, value), Number.valueMax);
	}

	/**
	 * @param {NumberBase} base .
	 */
	toString(base) {
		return this.#value.toString(base.value);
	}
}
