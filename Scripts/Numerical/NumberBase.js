// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumberBase {
	/**  */
	static #min = new this(2);
	/**  */
	static #max = new this(10);
	/**  */
	static get min() { return this.#min; }
	/**  */
	static get max() { return this.#max; }

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
		this.#value = NumMath.clamp(value, NumNumberBase.min.value, NumNumberBase.max.value);
	}
}
