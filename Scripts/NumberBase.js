// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumberBase {
	/**
	 * @return {integer} .
	 */
	static get valueMin() { return 2; }
	/**
	 * @return {integer} .
	 */
	static get valueMax() { return 10; }

	/** @todo Optimize. */
	static get min() { return new this(this.valueMin); }
	/** @todo Optimize. */
	static get max() { return new this(this.valueMax); }

	/**
	 * @type {integer}
	 */
	#value;
	/**  */
	get value() { return this.#value; }
	/**
	 * @param {integer} value .
	 */
	constructor(value) {
		this.#value = Math.min(Math.max(NumberBase.valueMin, value), NumberBase.valueMax);
	}
}
