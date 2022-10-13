// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumberBase {
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
		this.#value = NumMath.clamp(value, NumNumberBase.valueMin, NumNumberBase.valueMax);
	}
}
