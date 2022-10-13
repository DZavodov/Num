// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
 class NumPercent {
	/**  */
	#value;
	/**  */
	get value() { return this.value; }

	/**
	 * @param {float} value .
	 */
	constructor(value = 0) {
		this.#value = NumMath.clamp(value);
	}
}
