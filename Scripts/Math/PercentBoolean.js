// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumPercentBoolean {
	/**  */
	constructor(percent = new NumPercent()) {
		/**
		 * @type {NumPercent}
		 */
		this.percent = percent;
	}

	/**
	 * @type {boolean}
	 */
	#value;
	/**  */
	get value() { return this.#value; }

	/**
	 * @param {NumRandomGenerator} generator .
	 */
	randomize(generator) {
		this.#value = this.percent.getRandomBoolean(generator);
	}
}
