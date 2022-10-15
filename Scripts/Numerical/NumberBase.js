// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumNumberBase {
	/**  */
	static get #valueMin() { return 2; }
	/**  */
	static get #valueMax() { return 10; }
	/**  */
	static #min = new this(this.#valueMin);
	/**  */
	static #max = new this(this.#valueMax);
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
		this.#value = NumMath.clamp(value,
			NumNumberBase.#valueMin,
			NumNumberBase.#valueMax);
	}
}
