// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumMath {
	/**
	 * @param {number} x .
	 */
	static clamp(x, min = 0, max = 1) {
		return Math.min(Math.max(min, x), max);
	}

	/**  */
	static #randomGenerator = new NumRandomGenerator(Date.now());
	/**  */
	static get randomGenerator() { return this.#randomGenerator; }
}

